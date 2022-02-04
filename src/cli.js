import chalk from "chalk";
import { newAppId } from "./helper";
import { createApp } from "./main";
import { parseArgumentsIntoOptions } from "./parsers";
import { promptForMissingOptions } from "./prompter";
const cliVersion = require('../package.json').version;

export async function cli(args) {
    let options = parseArgumentsIntoOptions(args);
    options = await promptForMissingOptions(options);
    if(options.generateAppId) {
        console.log('Generating App ID ...');
        console.log('New App ID: ' + chalk.blue(`${newAppId()}`) + chalk.green('  // Copy it and Paste it in your VITE_AP_ID on your .env file'))
    }
    if(options.version) {
        console.log(cliVersion);
    }
    if(options.template) {
        await createApp(options);
    }
}