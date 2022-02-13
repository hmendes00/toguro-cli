# Toguro CLI

This is the CLI to create Toguro Apps.

## Simplified Architecture

![Architecture](https://i.ibb.co/BBbZPg4/Untitled-Artwork-5.png)

## Instalation

```
npm install -g @toguro/cli
```

## Basic commands

```
toguro --create-app name-of-app // this will add the toguro-app template to your current directory

toguro --generate-app-id // this will print a new app-id that can be used in your new app
```

## ROADMAP

We are working on adding the following commands soon:

```
toguro --login // login to your dev account

toguro --publish // publish app to Toguro App Marketplace

toguro --create-client-app // create a client where you can test your app
```

## Styling

When I first designed the architecture, vue custom components was still in "beta" version.
The only way of adding css to the custom components were by either giving all of them `.ce.vue` file extensions, or by doing as I did here where you import your css in the main app.

As soon as I find/create a way to separate them properly I will be updating the CLI.
(If you are aware of a better way of doing this already, please let us know by sending an email <3 )

## How can I test and publish Apps in the meantime?

To test the app you for now you can clone our base client [toguro-fe](https://github.com/hmendes00/toguro-fe)
You will see all the needed instructions to have it setup.
It shouldn't take more than 5 minutes to get it up and running, tbh.

If you want to develop your own app that supports other apps being installed, you will have to build it yourself.
Luckily you have toguro-fe with the basic structure already setup for this. You will need to take care of the app marketplace where you can allow others to publish apps to it. Those apps can be added to your main project by applying some simple business logic.

## Deploying App to AWS

I added the script to automatically deploy the app using [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/home.html)

You will find the instructions on how to setup and deploy it inside of `/stack/README.md` in the just created app.

You can also checkout this [REPO](https://github.com/hmendes00/toguro-cli) to learn more about the cli, templates and hopefully contribute to it <3.

If you already have AWS CLI configured and are already using AWS CDK in your aws account, you could pretty much just run
`cdk deploy --profile=the-profile-you-have` inside `/stack` folder (Don't forget to run `npm install` inside of `STACK` folder before).

At this moment you will need to run `npm run build` manually in the root folder before publishing it.

_NOTE: I don't have strong skills with devops stuff, so if you find things that could be improved in the stack, please open an issue or send me an email <3_

I will be improving the stack to configure automated pipeline in the future (user will be able to choose from CLI what they want to include).

---

Any questions, comments and suggestions you can send an email to
`hmendes00@gmail.com`
