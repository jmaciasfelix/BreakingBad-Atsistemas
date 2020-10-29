import { render, screen } from '@testing-library/react';
import App from './App';
/*
describe('NAME SUITE', () => {
  test('should return XXXX if receive YYYY', () => {
    const expected = 'XXXX';
    const result = 'ZZZZ';
    expect(result).toBe(expected);
  });
});
*/
describe('Test App.js', () => {
  test('should return one if receive one', () => {
    render(<App />);
    const result = screen.getByText('App');
    expect(result).toBeInTheDocument();
  });
});
