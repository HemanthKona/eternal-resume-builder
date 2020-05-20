import React from 'react';
import { render } from '@testing-library/react';

import Designx from './designx';

describe(' Designx', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Designx />);
    expect(baseElement).toBeTruthy();
  });
});
