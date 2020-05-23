import React, { createContext, useState } from 'react';
import { useLocation } from 'react-router-dom';


import { sample, hem, ResumeSchema } from '@eternal-resume-builder/data';

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ResumeContext = createContext<any>({});
const AppSettingsContext = createContext<any>(initSettings);

const ResumeProvider = props => {
  let resumeData = sample;
  const query = useQuery();

  query.get('id') === 'hem' ? resumeData = hem : resumeData = sample ;

  const [state, setState] = useState<ResumeSchema>(resumeData);

  // const api = resumeApi(state, setState);

  // const resumeApi = useMemo(() => [state, resumeFactory({ state, setState })], [state]);
  const resumeApi = [state, setState] ;

  return (
    <ResumeContext.Provider value={resumeApi} {...props}>

    </ResumeContext.Provider>
  )
}

interface AppSettings {
  theme: string;
}

const initSettings: AppSettings = {
  theme: 'default'
}

const AppSettingsProvider = props => {
  const settings: any = JSON.parse(JSON.stringify(initSettings));

  const query = useQuery();
  query.get('theme') === 'nord' ? settings.theme = 'nord' : settings.theme = 'default' ;

  const [state, setState] = useState<AppSettings>(settings);

  const settingsApi = [state, setState] ;

  return (
    <AppSettingsContext.Provider value={settingsApi} {...props}>

    </AppSettingsContext.Provider>
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
  ResumeProvider,
  AppSettingsContext,
  AppSettingsProvider
}
