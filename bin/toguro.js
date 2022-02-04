#!/usr/bin/env node

require = require('esm')(module /*, options*/);
const requiredVersion = require('../package.json').engines.node;
const semverSatisfies = require('semver/functions/satisfies')
const chalk = require('chalk');

function checkNodeVersion (wanted, id) {
    if (!semverSatisfies(process.version, wanted, { includePrerelease: true })) {
        console.log(chalk.red(
        'You are using Node ' + process.version + ', but this version of ' + id +
        ' requires Node ' + wanted + '.\nPlease upgrade your Node version.'
        ))
        process.exit(1);
    }
}

checkNodeVersion(requiredVersion, '@toguro/cli');

require('../src/cli').cli(process.argv);