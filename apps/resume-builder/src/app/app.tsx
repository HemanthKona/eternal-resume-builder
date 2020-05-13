import React, {  useState } from 'react';

/** @jsx jsx */
import { jsx, Box, Button, Flex, Grid, ThemeProvider } from 'theme-ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faDownload, faKeyboard } from '@fortawesome/free-solid-svg-icons';

// config
import theme from './app.theme';

// libs
import { ResumeProvider } from './app.context';
import { downloadPDF } from '@eternal-resume-builder/util';

// components
import { About } from './about';
import { Resume } from './resume';
import { ShowJsonOutput } from './show-json-output';
import { ResumeBuilderForms } from './resume-builder-forms';

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
      <ResumeProvider>
        <Grid gap={0} columns={['auto 60px']}>
          <Grid gap={0} sx={{gridTemplateRows:'100vh'}}>
            <Grid gap={2} columns={grid}>
              <Resume></Resume>
              <Box sx={{ bg: 'gray.3', height: '100vh', overflow: 'scroll' }}>
                {
                  (view.about) ? <About gotoView={updateCurrentView} pdf={downloadPDF}></About> :
                    ((view.forms) ? <ResumeBuilderForms></ResumeBuilderForms> :
                      ((view.code) ? <ShowJsonOutput></ShowJsonOutput> : ''))
                }
              </Box>
            </Grid>
          </Grid>
          {/* Right side toolbar */}
          <Flex sx={{flexDirection: 'column', '> Button': { mb: '2'}}} bg='gray.5' >
            {
              menuItems.map((item, index) =>
                item.show ?
                  <Button key={index} bg={view[item.name] ? 'gray.6': 'gray.4'}
                    onClick={e => updateCurrentView(item.name)}>
                      {/* { view[item.name] ? <span > {`.`} </span> : `` } */}
                      { item.faIcon ? <FontAwesomeIcon icon={item.faIcon} /> : `` }
                      { item.icon ? item.icon  : `` }
                  </Button>
                  : ``
              )
            }
          </Flex>
        </Grid>
      </ResumeProvider>
    </ThemeProvider>
  );
};

export default App;
