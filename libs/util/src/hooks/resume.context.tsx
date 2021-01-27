import React, { createContext, useState } from 'react';
import { noop } from 'lodash';
import { sample, ResumeSchema } from '@eternal-resume-builder/data';

export const ResumeContext = createContext<any>({ state: {}, setState: noop });

export const ResumeProvider = (props) => {
  let resumeData = sample;
  const [state, setState] = useState(resumeData);

  const resumeApi = { state, setState };

  return (
    <ResumeContext.Provider
      value={resumeApi}
      {...props}
    ></ResumeContext.Provider>
  );
};
