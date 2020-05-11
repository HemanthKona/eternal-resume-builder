const chromium = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');

exports.handler = async (event, context) => {

  // Recieved body
  let html = '';
  let css = '';
  let test = '';
  console.log("Start Function");
  // console.log(event);
  if (event.body) {
    const body = JSON.parse(event.body);
    console.log(body);
    html = body.html
    css = body.css;
    test = body.test;
  }

  // Error Respone
  if (!html || !css) {
    return {
      statusCode: 400,
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      //   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      // },
      body: JSON.stringify({ message: 'HTML or CSS is not found' })
    }
  }

  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  });

  // const page = await browser.newPage();

  // // await page.addStyleTag({content: css});

  // await page.setContent(html);

  // const pdf = await page.pdf({
  //   format: 'A4',
  //   printBackground: true
  // });

  // await browser.close();
console.log("HTML 99999ksjdhkfshdkf sjkdfhk sdfh slkdf ls fsldfhs df ")
  console.log(html);
  return {
    headers: {
      // 'Content-type': 'application/pdf',
      // 'content-disposition': 'attachment; filename=test.pdf',
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    },
    statusCode: 200,
    body: JSON.stringify({
      text: test
    }),
    // body: pdf.toString('base64'),
    // isBase64Encoded: true
  }

}
