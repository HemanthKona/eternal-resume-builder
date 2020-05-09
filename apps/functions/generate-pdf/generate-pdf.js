const chromium = require('chrome-aws-lambda');

exports.handler = async (event, context) => {

  // const pageToScreenshot = JSON.parse(event.body).pageToScreenshot;
  const pageToScreenshot = 'https://resume.eternallife.live';

  if (!pageToScreenshot) return {
    statusCode: 400,
    body: JSON.stringify({ message: 'Page URL not defined' })
  }

  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  });

  const page = await browser.newPage();

  await page.goto(pageToScreenshot, { waitUntil: 'networkidle2' });

  // const screenshot = await page.screenshot({ encoding: 'binary' });
  const pdf = await page.pdf({
    format: 'A4',
    printBackground: true,
    margin: { top: '8px', right: '8px', bottom: '8px', left: '8px' }
  });

  await browser.close();

  return {
    headers: {
      'Content-type': 'application/pdf',
      'content-disposition': 'attachment; filename=test.pdf'
    },
    statusCode: 200,
    body: pdf.toString('base64'),
    isBase64Encoded: true
  }

}
