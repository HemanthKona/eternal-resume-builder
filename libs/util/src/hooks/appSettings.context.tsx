import React, { createContext, useState } from 'react';

import { useQueryParams } from './useQueryParams';

interface AppSettings {
  theme: string;
}

const initSettings: AppSettings = {
  theme: 'default',
};

export const AppSettingsContext = createContext<any>(initSettings);

export const AppSettingsProvider = (props) => {
  const settings: any = JSON.parse(JSON.stringify(initSettings));

  const query = useQueryParams();
  query.get('theme') === 'nord'
    ? (settings.theme = 'nord')
    : (settings.theme = 'default');

  const [state, setState] = useState<AppSettings>(settings);
  console.log(state);

  const settingsApi = [state, setState];

  return (
    <AppSettingsContext.Provider
      value={settingsApi}
      {...props}
    ></AppSettingsContext.Provider>
  );
};
