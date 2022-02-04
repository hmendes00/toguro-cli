import inquirer from 'inquirer';

async function promptForMissingOptions(options) {
    if (options.skipPrompts) {
      return {
        ...options,
        template: options.template,
      };
    }
   
    const questions = [];
   
    if (options.template && !options.git) {
      questions.push({
        type: 'confirm',
        name: 'git',
        message: 'Initialize a git repository?',
        default: false,
      });
    }
   
    const answers = await inquirer.prompt(questions);
    return {
      ...options,
      template: options.template || answers.template,
      git: options.git || answers.git,
    };
   }

   export { promptForMissingOptions };
