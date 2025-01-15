import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Birthday from './Birthday.jsx';

describe('Birthday', () => {
  const exampleBirthday = {
    name: 'Ares',
    dob: '1996-03-03',
  };

  it('displays the name of the person', () => {
    render(<Birthday {...exampleBirthday} />);

    expect(screen.queryByText('Ares')).toBeVisible();
  });
  it('displays date of birth', () => {
    render(<Birthday {...exampleBirthday} />);
    expect(screen.queryByText('1996-03-03')).toBeVisible();
  });
});
