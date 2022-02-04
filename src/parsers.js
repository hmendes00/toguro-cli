import arg from 'arg';

const argDefaults = {
    '--create-app': 'my-toguro-app'
}

function validateDefaults(rawArgs) {  
    for (let index = 0; index < rawArgs.length; index++) {
        const element = rawArgs[index];
        if(!argDefaults[element]) {
            continue;
        }

        if(index > -1 && (!rawArgs[index + 1] || rawArgs[index + 1].toString().startsWith('-'))) {
            rawArgs.splice(rawArgs.indexOf(element) + 1, 0, argDefaults[element]);
        }
    }    
}

function parseArgumentsIntoOptions(rawArgs) {
    validateDefaults(rawArgs);
    
    const args = arg(
      {
        '--git': Boolean,
        '--yes': Boolean,
        '--v': Boolean,
        '--create-app': String,
        '--generate-app-id': Boolean,
        '-g': '--git',
        '-y': '--yes',
        '-v': '--v',
        '--version': '--v',
      },
      {
        argv: rawArgs.slice(2),
      }
    );
    
    return {
      skipPrompts: args['--yes'] || false,
      git: args['--git'] || false,
      template: args['--create-app'],
      generateAppId: args['--generate-app-id'] || false,
      version: args['--v'] || false,
    };
}

export { parseArgumentsIntoOptions };
