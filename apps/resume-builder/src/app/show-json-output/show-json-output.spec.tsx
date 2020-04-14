import React from 'react';
import { render } from '@testing-library/react';

import ShowJsonOutput from './show-json-output';

describe(' ShowJsonOutput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShowJsonOutput />);
    expect(baseElement).toBeTruthy();
  });
});
