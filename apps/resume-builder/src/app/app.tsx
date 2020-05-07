import React, { createContext, useState, useContext } from 'react';
import ReactDOMServer from 'react-dom/server';
// import { renderStylesToString } from 'emotion-server'

/** @jsx jsx */
import { jsx, Box, Button, Flex, Grid, ThemeProvider } from 'theme-ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/fontawesome-svg-core';
import { faInfo, faDownload, faKeyboard } from '@fortawesome/free-solid-svg-icons';

// config
import theme from './app.theme';

// libs
import { ResumeProvider, ResumeContext,  } from './app.context';

// components
import { About } from './about';
import { EternalResume } from './eternal-resume';
import { Resume } from './resume';
import { ShowJsonOutput } from './show-json-output';
import { ResumeBuilderForms } from './resume-builder-forms';


// const ResumeContext = React.createContext({init: 1});

// const ResumeProvider = props => {
//   // const [state, setState] = useState<any>({ count: 0, name: {first: 'f', last: 'l'}});

//   // const resumeApi = useMemo(() => [state, resumeFactory({ state, setState })], [state]);


//   return (
//     <ResumeContext.Provider value={{def: 2}} {...props} />
//   )
// }

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

  const generateHTML = () => {
    document.querySelectorAll("[data-emotion='css']").forEach((style) => {
      console.log(style.outerHTML);
    });
    console.log(ReactDOMServer.renderToString(<Resume></Resume>));
    // console.log(renderStylesToString(<Resume></Resume>));
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
                  (view.about) ? <About gotoView={updateCurrentView} pdf={generateHTML}></About> :
                    ((view.forms) ? <ResumeBuilderForms></ResumeBuilderForms> :
                      ((view.code) ? <ShowJsonOutput></ShowJsonOutput> : ''))
                }
              </Box>
            </Grid>
          </Grid>
          {/* Right side toolbar */}
          <Flex sx={{flexDirection: 'column', minHeight: '100%', '> Button': { mb: '2'}}} bg='gray.5' >
            {
              menuItems.map((item) =>
                item.show ?
                  <Button bg={view[item.name] ? 'gray.6': 'gray.4'}
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
