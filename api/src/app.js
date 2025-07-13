require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  verified: { type: Boolean, default: false },
  balance: { type: Number, default: 0 }
});
const User = mongoose.model('User', UserSchema);

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

function auth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'missing token' });
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = payload.userId;
    next();
  } catch (e) {
    res.status(401).json({ error: 'invalid token' });
  }
}

app.get('/status', (req, res) => res.json({ status: 'ok' }));

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'email and password required' });
  }
  const existing = await User.findOne({ email });
  if (existing) {
    return res.status(400).json({ error: 'email exists' });
  }
  const hash = await bcrypt.hash(password, 10);
  await User.create({ email, password: hash });
  res.json({ message: 'registered' });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: 'invalid credentials' });
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ error: 'invalid credentials' });
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  res.json({ token });
});

app.post('/kyc', auth, async (req, res) => {
  const user = await User.findByIdAndUpdate(req.userId, { verified: true }, { new: true });
  res.json({ kycStatus: user.verified ? 'verified' : 'pending' });
});

app.post('/deposit', auth, async (req, res) => {
  const { amount } = req.body;
  if (!amount || amount <= 0) return res.status(400).json({ error: 'invalid amount' });
  const user = await User.findByIdAndUpdate(req.userId, { $inc: { balance: amount } }, { new: true });
  res.json({ balance: user.balance });
});

app.post('/withdraw', auth, async (req, res) => {
  const { amount } = req.body;
  if (!amount || amount <= 0) return res.status(400).json({ error: 'invalid amount' });
  const user = await User.findById(req.userId);
  if (!user || user.balance < amount) return res.status(400).json({ error: 'insufficient funds' });
  user.balance -= amount;
  await user.save();
  res.json({ balance: user.balance });
});

module.exports = { app, User };
