import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app title', () => {
  render(<App />);
  const title = screen.getByTestId('app-title');
  expect(title).toBeInTheDocument();
});

test('renders all task checkboxes', () => {
  render(<App />);

  const checkbox1 = screen.getByTestId('checkbox-task-1');
  const checkbox2 = screen.getByTestId('checkbox-task-2');
  const checkbox3 = screen.getByTestId('checkbox-task-3');

  expect(checkbox1).toBeInTheDocument();
  expect(checkbox2).toBeInTheDocument();
  expect(checkbox3).toBeInTheDocument();
});

test('checkboxes are unchecked by default', () => {
  render(<App />);

  const checkboxes = [
    screen.getByTestId('checkbox-task-1'),
    screen.getByTestId('checkbox-task-2'),
    screen.getByTestId('checkbox-task-3'),
  ];

  checkboxes.forEach((checkbox) => {
    expect(checkbox).not.toBeChecked();
  });
});
