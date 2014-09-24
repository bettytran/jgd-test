#!/usr/bin/env node

var config = {
  project: {},
  environment: {}
};

config.project.hardlinks = true;
config.project.mergeBranch = 'master';

config.environment.githubRepo = 'BROKEN';

module.exports = config;
