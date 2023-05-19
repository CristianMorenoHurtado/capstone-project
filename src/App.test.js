import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import BookingForm from './assets/components/BookingForm';

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Reserve");
    expect(headingElement).toBeInTheDocument();
})

test('updateTimes', () => {
  render(<BookingForm />);
  const headingElement = screen.getByLabelText("time");
  expect(headingElement).toBeTruthy();
})

test('initializeTimes', () => {
  render(<BookingForm />);
  const headingElement = screen.getByLabelText("time");
  expect(headingElement).toBeTruthy();
})

test('Testing First Name', () => {
  render(<BookingForm />);
  const headingElement = screen.getByTestId("firstName");
  expect(headingElement).toBeTruthy();
})