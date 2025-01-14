import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import App from '../App';

describe('App', () => {
  it('Display header', () => {
    render(<App />);
    expect(document.body).toHaveTextContent('Hello, world!');
  });
});