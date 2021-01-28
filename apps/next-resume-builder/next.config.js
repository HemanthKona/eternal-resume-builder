// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

module.exports = withNx({
  target: 'serverless',
  distDir: 'dist/apps/next-resume-builder'
});
