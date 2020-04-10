import React from 'react';
import { render } from '@testing-library/react';

import EternalResume from './eternal-resume';

describe(' EternalResume', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EternalResume />);
    expect(baseElement).toBeTruthy();
  });
});
