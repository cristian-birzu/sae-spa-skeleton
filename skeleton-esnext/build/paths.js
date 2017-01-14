var appRoot = 'src/';
var outputRoot = 'dist/';
var exportSrvRoot = 'export/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.css',
  style: 'styles/**/*.css',
  output: outputRoot,
  exportSrv: exportSrvRoot,
  doc: './doc',
  e2eSpecsSrc: 'test/e2e/browser/src/**/*.js',
  e2eSpecsDist: 'test/e2e/browser/dist/',
  jasmineSrc: 'test/unit/node/src/**/*.js',
  jasmineDist: 'test/unit/node/dist/'
};
