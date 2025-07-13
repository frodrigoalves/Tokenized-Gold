const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let app;
let mongod;

beforeAll(async () => {
  process.env.JWT_SECRET = 'testsecret';
  mongod = await MongoMemoryServer.create();
  process.env.MONGODB_URI = mongod.getUri();
  ({ app } = require('../src/app'));
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
});

describe('API endpoints', () => {
  let token;
  test('register', async () => {
    const res = await request(app)
      .post('/register')
      .send({ email: 'a@test.com', password: 'pass' });
    expect(res.statusCode).toBe(200);
  });

  test('login', async () => {
    const res = await request(app)
      .post('/login')
      .send({ email: 'a@test.com', password: 'pass' });
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeTruthy();
    token = res.body.token;
  });

  test('kyc', async () => {
    const res = await request(app)
      .post('/kyc')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.kycStatus).toBe('verified');
  });

  test('deposit and withdraw', async () => {
    const dep = await request(app)
      .post('/deposit')
      .set('Authorization', `Bearer ${token}`)
      .send({ amount: 100 });
    expect(dep.statusCode).toBe(200);
    expect(dep.body.balance).toBe(100);

    const wit = await request(app)
      .post('/withdraw')
      .set('Authorization', `Bearer ${token}`)
      .send({ amount: 40 });
    expect(wit.statusCode).toBe(200);
    expect(wit.body.balance).toBe(60);
  });

  test('status', async () => {
    const res = await request(app).get('/status');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});
