import React, { createContext, useState } from 'react';
import { useRouter } from 'next/router';

import { useQueryParams } from './useQueryParams';

const AvailableThemes = ['default', 'simple', 'nord'];

interface AppSettings {
  theme: string;
}

const initSettings: AppSettings = {
  theme: 'default',
};

export const AppSettingsContext = createContext<any>(initSettings);

export const AppSettingsProvider = (props) => {
  const settings: any = JSON.parse(JSON.stringify(initSettings));

  // if using in Next.js App
  if (props.nextjs) {
    const { query } = useRouter();
    settings.theme = AvailableThemes.includes(query.theme as string)
      ? query.theme
      : 'default';
    // if using in Vanilla React App
  } else {
    const query = useQueryParams();
    settings.theme = AvailableThemes.includes(query.get('theme'))
      ? query.get('theme')
      : 'default';
  }

  const [state, setState] = useState<AppSettings>(settings);

  const settingsApi = [state, setState];

  return (
    <AppSettingsContext.Provider
      value={settingsApi}
      {...props}
    ></AppSettingsContext.Provider>
  );
};
