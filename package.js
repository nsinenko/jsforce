Package.describe({
  summary: "Meteor wrapper around jsforce library",
  version: '1.5.0',
  name: 'nsinenko:jsforce',
  git: 'https://github.com/nsinenko/jsforce.git',
  documentation: 'README.md'
});

Npm.depends({
  jsforce: '1.5.0'
});

Package.on_use(function (api) {
  api.versionsFrom('1.0.1');

  if (api.export) {
    api.export('jsforce');
  }

  api.add_files(['nsinenko:jsforce.js'], 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('nsinenko:jsforce');
  api.addFiles('nsinenko:jsforce-tests.js');
});
