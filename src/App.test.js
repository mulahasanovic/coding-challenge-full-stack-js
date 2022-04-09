import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const el = screen.getByText(/hello crewfire/i);
  expect(el).toBeInTheDocument();
});
