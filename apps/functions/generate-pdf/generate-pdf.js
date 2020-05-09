const chromium = require('chrome-aws-lambda');

exports.handler = async (event, context) => {

  // const pageToScreenshot = JSON.parse(event.body).pageToScreenshot;
  const pageToScreenshot = 'https://eternallife.live';

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
  const pdf = await page.pdf();

  await browser.close();

  return {
    headers: {
      'Content-type': 'application/pdf',
      'content-disposition': 'attachment; filename=test.pdf'
    },
    statusCode: 200,
    body: JSON.stringify({
      test: 'test working',
      message: `Complete screenshot of ${pageToScreenshot}`,
      // buffer: screenshot,
      pdf: pdf.toString('base64')
    })
  }

}
