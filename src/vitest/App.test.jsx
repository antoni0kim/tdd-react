import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import App from '../App';

describe('App', () => {
  it('Display header', () => {
    const test_var = 'react';
    render(<App name={test_var} />);
    expect(document.body).toHaveTextContent(`Hello, ${test_var}!`);
  });
});
