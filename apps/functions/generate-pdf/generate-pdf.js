const chromium = require('chrome-aws-lambda');

exports.handler = async (event, context) => {

  // Recieved body
  const html = JSON.parse(event.body).html;
  const css = JSON.parse(event.body).css;

  // Error Respone
  if (!html || !css) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'HTML or CSS is not found' })
    }
  }

  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  });

  const page = await browser.newPage();

  await page.addStyleTag(css);

  await page.setContent(html);

  const pdf = await page.pdf({
    format: 'A4',
    printBackground: true
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
