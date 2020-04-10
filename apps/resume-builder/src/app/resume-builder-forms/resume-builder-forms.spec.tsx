import React from 'react';
import { render } from '@testing-library/react';

import ResumeBuilderForms from './resume-builder-forms';

describe(' ResumeBuilderForms', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResumeBuilderForms />);
    expect(baseElement).toBeTruthy();
  });
});
