import React, { useContext } from 'react';

import { Box, Button } from 'theme-ui';

import { AppSettingsContext } from '../app.context';

/* eslint-disable-next-line */
export interface DesignxProps {}

export const Designx = (props: DesignxProps) => {
  const [settings, setSettings] = useContext(AppSettingsContext);

  return (
    <Box p='3'>
      <h1>Themes</h1>

      <Button variant="elevated" sx={{bg: settings.theme === 'default'? `gray.5` : ``}} mr="2" onClick={e => setSettings({theme: 'default'})}> Simple </Button>
      <Button variant="elevated" sx={{bg: settings.theme === 'nord'? `gray.5` : ``}} onClick={e => setSettings({theme: 'nord'})}> Nord </Button>
    </Box>
  );
};

export default Designx;
