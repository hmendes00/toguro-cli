# Toguro FE

This project contains the codebase to create new apps to Toguro and integrate to Toguro App Store.

## Requirements

- Node 16 (we have .nvmrc if you just want to run nvm use)

## How to install

First make sure you are inside of _SRC_ folder (and not STACK folder)

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

First make sure you are inside of _SRC_ folder (and not STACK folder)

Then run the following command

```bash
npm run dev
```

## How to test

The project will be served in: `http://localhost:3000/`
You can access it directly to test the custom-app directly or you can clone our base client [toguro-fe](https://github.com/hmendes00/toguro-fe) to test it being added in another structure.

You will see all the needed instructions to have it setup.
It shouldn't take more than 5 minutes to get it up and running, tbh.

## Deploying App to AWS

this project is using [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/home.html) to deploy/write the infrastructure

You will find the instructions on how to setup and deploy it inside of `/stack/README.md`.

If you already have AWS CLI configured and are already using AWS CDK in your aws account, you could pretty much just run
`cdk deploy --profile=the-profile-you-have` inside `/stack` folder (Don't forget to run `npm install` inside of `STACK` folder before).

At this moment you will need to run `npm run build` manually in the root folder before publishing it.

_NOTE: I don't have strong skills with devops stuff, so if you find things that could be improved in the stack, please open an issue or send me an email <3_

I will be improving the stack to configure automated pipeline in the future (user will be able to choose from CLI what they want to include).

---

Any questions, comments and suggestions you can send an email to
`hmendes00@gmail.com`
