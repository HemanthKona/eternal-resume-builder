import React, {  useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

/** @jsx jsx */
import { jsx, css, Box, Flex, Grid, ThemeProvider } from 'theme-ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faDownload, faKeyboard } from '@fortawesome/free-solid-svg-icons';

// libs
import { theme } from '@eternal-resume-builder/themes';
import { ResumeProvider, AppSettingsProvider } from './app.context';
import { downloadPDF } from '@eternal-resume-builder/util';

// components
import { EtNav } from './components/et-nav';

import { About } from './about';
import { Resume } from './resume';
import { ShowJsonOutput } from './show-json-output';
import { ResumeBuilderForms } from './resume-builder-forms';
import { Designx } from './designx';

const defaultView = {
  about: false,
  code: false,
  forms: false,
  export: false
}

const menuItems = [{
  name: 'about',
  title: 'About',
  faIcon: faInfo,
  show: true
},
{
  name: 'forms',
  title: 'Forms',
  faIcon: faKeyboard,
  show: true
},
{
  name: 'theme',
  title: 'Themes',
  show: false
},
{
  name: 'code',
  title: 'Code',
  icon: '</>',
  show: true
},
{
  name: 'export',
  title: 'Export',
  faIcon: faDownload,
  show: false
},
{
  name: 'designx',
  title: 'DesignX',
  icon: '>>>',
  show: true
}];

export const App = () => {
  const [view, setView] = useState({
    ...defaultView,
    about: true
  });
  const [grid, setGrid] = useState(['minmax(auto, 960px) 1fr']);

  const updateCurrentView = (view) => {
    setView(prevState => {
      prevState = JSON.parse(JSON.stringify(defaultView));
      prevState[view] = true;
      return prevState;
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <AppSettingsProvider>
        <ResumeProvider>
          <Grid gap={0} columns={['auto 60px']}>
            <Grid gap={0} sx={{gridTemplateRows:'100vh'}}>
              <Grid gap={2} columns={grid}>
                <Resume></Resume>
                <Box sx={{ bg: 'gray.3', height: '100vh', overflow: 'scroll' }}>
                  <Switch>
                    <Route path="/about">
                      <About theme={theme} gotoView={updateCurrentView} pdf={downloadPDF}></About>
                    </Route>
                    <Route path="/forms">
                      <ResumeBuilderForms></ResumeBuilderForms>
                    </Route>
                    <Route path="/code">
                      <ShowJsonOutput></ShowJsonOutput>
                    </Route>
                    <Route path="/designx">
                      <Designx></Designx>
                    </Route>
                  </Switch>
                </Box>
              </Grid>
            </Grid>
            {/* Right side toolbar */}
            <Flex sx={{
              flexDirection: 'column'
            }} bg='gray.5' >

              {
                menuItems.map((item, index) =>
                  item.show ?
                    <EtNav to={`/${item.name}`} key={index} theme={theme} activeStyle={{ background: theme.colors.red[6] }}>
                      {/* { view[item.name] ? <span > {`.`} </span> : `` } */}
                      { item.faIcon ? <FontAwesomeIcon icon={item.faIcon} /> : `` }
                      { item.icon ? item.icon  : `` }
                    </EtNav>
                    : ``
                )
              }
            </Flex>
          </Grid>
        </ResumeProvider>
      </AppSettingsProvider>
    </ThemeProvider>
  );
};

export default App;
