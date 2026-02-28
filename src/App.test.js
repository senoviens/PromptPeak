// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PromptPeak title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PromptPeak/i);
    expect(titleElement).toBeInTheDocument();
});
