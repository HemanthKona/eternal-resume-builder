import React, { createContext, useState, useContext } from 'react';
import ReactDOMServer from 'react-dom/server';
// import { renderStylesToString } from 'emotion-server'

/** @jsx jsx */
import { jsx, Box, Button, Flex, Grid, ThemeProvider } from 'theme-ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

/**
 * Creates an anchor element `<a></a>` with
 * the base64 pdf source and a filename with the
 * HTML5 `download` attribute then clicks on it.
 * @param  {string} pdf
 * @return {void}
 */
function downloadPDFLink(pdf) {
  const linkSource = `data:application/pdf;base64,${pdf}`;
  const downloadLink = document.createElement("a");
  const fileName = "resume.pdf";

  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
}

const downloadPDF = () => {
  let css = '';
  let html = '';

  const styles = Array.from(document.getElementsByTagName("style"));
  for (const style of styles) {
    if (style.type !== 'text/css') {
      css += style.outerHTML;
    }
  }
  console.log(css);
  // console.log(css.length)

  html = document.getElementById('et-resume').outerHTML;
  console.log(html);

  let pdfFuncUrlLocal = 'http://localhost:8888/.netlify/functions/generate-pdf';

  if (window.location.hostname.indexOf('localhost') === -1) {
    pdfFuncUrlLocal = 'https://resume.eternallife.live/.netlify/functions/generate-pdf'
  }

  const pdfFuncUrl = '';

  fetch(pdfFuncUrl, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      html,
      css,
      test: 'test'
    })
  }).then((res) => {
    console.log(res.json());
    console.log();
    // if (res.body) downloadPDFLink(res.body);
  })
}

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
