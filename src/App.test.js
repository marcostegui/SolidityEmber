// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SolidityEmber title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SolidityEmber/i);
    expect(titleElement).toBeInTheDocument();
});
