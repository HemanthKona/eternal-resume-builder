import React from 'react';
import { render } from '@testing-library/react';

import Resume from './resume';

describe(' Resume', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Resume />);
    expect(baseElement).toBeTruthy();
  });
});
