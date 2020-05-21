import * as PhantomjsCloud from 'phantomjscloud-lite';

export const downloadPDF = () => {
  let css = "";
  let html = "";
  let content = "";

  const styles = Array.from(document.getElementsByTagName("style"));
  for (const style of styles) {
    if (style.type !== 'text/css') {
      css += style.outerHTML;
    }
  }
  // console.log(css);
  // console.log(css.length)

  html = document.getElementById('et-resume').outerHTML;
  // console.log(html);

  content = css + html;

  let pdfFuncUrl = 'http://localhost:8888/.netlify/functions/generate-pdf';

  if (window.location.hostname.indexOf('localhost') === -1) {
    pdfFuncUrl = 'https://resume.eternallife.live/.netlify/functions/generate-pdf'
  }

  // fetch(pdfFuncUrl, {
  //   method: 'post',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     html,
  //     css,
  //     test: 'test'
  //   })
  // }).then((res) => {
  //   console.log(res.json());
  //   console.log();
  //   // if (res.body) downloadPDFLink(res.body);
  // })

  const browserless = new PhantomjsCloud.BrowserApi('ak-597kx-aa6bc-nbeb1-mnh81-26kdk');
  console.log(browserless);

  const pdfDownloadRequest: PhantomjsCloud.ioDatatypes.IPageRequest = {
    url: "http://localhost/blank",
    content,
    renderType: "pdf",
    renderSettings: {
      emulateMedia: "print",
      pdfOptions: {
        headerTemplate: '<div style="width: 100%; box-sizing: border-box; border: 5px solid #88C0D0;"><div>',
        footerTemplate: '<div style="width: 100%; box-sizing: border-box; border: 5px solid #88C0D0;"><div>'
      }
    }
  }

  browserless.requestSingle(pdfDownloadRequest, (err, userResponse) => {
    //can use a callback like this example, or a Promise (see the Typescript example below)
    if (err != null) {
        throw err;
    }

    // Download pdf resume to user system
    if (userResponse.content && userResponse.content.data) {
      downloadPDFLink(userResponse.content.data);
    } else {
      console.error("Error downloading pdf");
    }
  });

}

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

