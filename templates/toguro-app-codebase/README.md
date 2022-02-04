# Toguro FE

This project contains the codebase to create new apps to Toguro and integrate to Toguro App Store.

## Requirements

* Node 14 (we have .nvmrc if you just want to run nvm use)

## How to install

First make sure you are inside of *SRC* folder (and not STACK folder)

Then install the dependencies:
```bash
npm install
```

You will need an app-id to start testing your app in the client application.

For now you can use the `@toguro/cli` _(Instructions on how to install here: https://www.npmjs.com/package/@toguro/cli)_

After installation, just the following:
```bash
toguro --generate-app-id
```

After adding the new generated app-id to your .env, you should make sure you have the same inside `fake-api.json` in the client-app (toguro-fe);

## How to run

First make sure you are inside of *SRC* folder (and not STACK folder)

Then run the following command
```bash
npm run dev
```

## How to test

The project will be served in: `http://localhost:3000/`

Because this project is a web-component, you will need the toguro-fe-project to render it.
For now you will have to contact Toguro Support/Admin Team to have access to a client stack

hmendes00@gmail.com

geovannylc@gmail.com

## How to publish it

At the moment you will need to create a build and give the js file to one of the adminstrators of Toguro
