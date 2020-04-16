import React from 'react';
import { render } from '@testing-library/react';

import Basic from './basic';

describe(' Basic', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Basic />);
    expect(baseElement).toBeTruthy();
  });
});
