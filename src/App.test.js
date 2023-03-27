import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './BookingForm';

test('rendering the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
