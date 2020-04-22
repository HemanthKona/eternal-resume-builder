import React, { createContext, useState } from 'react';

import { sample, ResumeSchema } from '@eternal-resume-builder/data';

const ResumeContext = createContext<any>({});

const ResumeProvider = props => {
  const [state, setState] = useState<ResumeSchema>(sample);

  // const api = resumeApi(state, setState);

  // const resumeApi = useMemo(() => [state, resumeFactory({ state, setState })], [state]);
  const resumeApi = [state, setState] ;

  return (
    <ResumeContext.Provider value={resumeApi} {...props}>

    </ResumeContext.Provider>
  )
}

// const resumeApi = (state, setState) => {

//   console.log(state);
//   const getAll = () => {
//     return {...state}
//   }

//   return {
//     getAll,
//     setState
//   }
// }

export {
  ResumeContext,
  ResumeProvider
}
