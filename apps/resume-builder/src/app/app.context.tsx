import React, { createContext, useState } from 'react';

import { data } from '@eternal-resume-builder/data';

const ResumeContext = createContext<any>({init: 0});

const ResumeProvider = props => {
  const [state, setState] = useState<any>(data);

  // const api = resumeApi(state, setState);

  // const resumeApi = useMemo(() => [state, resumeFactory({ state, setState })], [state]);
  const resumeApi = [state, setState] ;

  return (
    <ResumeContext.Provider value={resumeApi} {...props}>

    </ResumeContext.Provider>
  )
}

const resumeApi = (state, setState) => {

  console.log(state);
  const getAll = () => {
    return {...state}
  }

  return {
    getAll,
    setState
  }
}

export {
  ResumeContext,
  ResumeProvider
}
