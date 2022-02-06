import chalk from 'chalk';
import fs from 'fs';
import Listr from 'listr';
import ncp from 'ncp';
import path from 'path';
import { promisify } from 'util';
import { initGit } from "./helper";

const access = promisify(fs.access);
const rename = promisify(fs.rename);
const copy = promisify(ncp);

async function copyTemplateFiles(options) {
 return copy(options.templateDirectory, options.targetDirectory, {
   clobber: false,
   filter: (file) => !file.toString().endsWith('.git')
 });
}

async function replaceTemplateNameByNewProjectNameInFile(filePath, templateName) {
  const fsPromise = fs.promises;
  // Below statements must be wrapped inside the 'async' function:
  const data = await fsPromise.readFile(filePath, 'utf8');
  const result = data.replace(/toguro-app-codebase/g, templateName);
  await fsPromise.writeFile(filePath, result,'utf8');
}

async function fixPackageJsonNames(options) {
  try {
    if(!fs.existsSync(`${options.templateDirectory}/_package.json`)) {
      return true;
    }

    await replaceTemplateNameByNewProjectNameInFile(`${options.templateDirectory}/_package.json`, options.template);
    await rename(`${options.templateDirectory}/_package.json`, `${options.templateDirectory}/package.json`);
    return true;
  } catch (error) {
    return true;
  }
  
}

export async function createApp(options) {
    options = {
        ...options,
        targetDirectory: `${(options.targetDirectory || process.cwd())}/${options.template}`,
    };
    
    const currentFileUrl = import.meta.url;
    const templateDir = path.resolve(
    new URL(currentFileUrl).pathname,
    '../../templates',
    'toguro-app-codebase'
    );
    options.templateDirectory = templateDir;

    try {
        await access(templateDir, fs.constants.R_OK);
    } catch (err) {
        console.error('%s Invalid template name', chalk.red.bold('ERROR'));
        process.exit(1);
    }

    const tasks = new Listr([
        {
          title: 'Apply package fixes',
          task: () => fixPackageJsonNames(options),
        },
        {
          title: 'Copy project files',
          task: () => copyTemplateFiles(options),
        },
        {
          title: 'Initialize git',
          task: () => initGit(options),
          enabled: () => options.git,
        }
    ]);

    await tasks.run();
    
    console.log('%s Project ready', chalk.green.bold('DONE'));
    return true;
}