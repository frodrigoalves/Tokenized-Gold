import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

test('renders welcome text', () => {
  render(<Home />);
  expect(screen.getByText('Tokenized Gold Platform')).toBeInTheDocument();
});
