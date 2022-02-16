# Toguro CLI

This is the CLI to create Toguro Apps.

## Simplified Architecture

![Architecture](https://i.ibb.co/BBbZPg4/Untitled-Artwork-5.png)

## Example of app

[Assessment App](https://github.com/hmendes00/assessment-app) that supports Javascript and Typescript

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

As per [Vue Documentation](https://vuejs.org/guide/extras/web-components.html#building-custom-elements-with-vue) around custom elements, you can't really add a style tag inside the component without making it a custom element itself (meaning having it with `.ce.vue` extension). As far as I understood, after trying out a few things, you'd need to register each element separately with those extensions, or add the style inline`

The best structure I could come up with to allow `code splitting` and work with `shadow root`, was by injecting the css file in the component itself. (The default is using `scss`, but if you want to use something different you can play with the file `globals.d.ts` adding a declaration for your styling loader).

Here's how to inject it:

```
import { InjectCssInShadowRootFromString } from '@/helpers/css-injector';
import thisCss from './example.scss';

onMounted(() => {
  InjectCssInShadowRootFromString(thisCss);
});
```

## How can I test and publish Apps in the meantime?

The project will be served in: `http://localhost:3000/`
You can access it directly to test the custom-app directly or you can clone our base client [toguro-fe](https://github.com/hmendes00/toguro-fe) to test it being added in another structure.

You will see all the needed instructions to have it setup.
It shouldn't take more than 5 minutes to get it up and running, tbh.

If you want to develop your own app that supports other apps being installed, you will have to build it yourself.
Luckily you have toguro-fe with the basic structure already setup for this. You will need to take care of the app marketplace where you can allow others to publish apps to it. Those apps can be added to your main project by applying some simple business logic.

## Deploying App to AWS

The created project is using [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/home.html) to deploy/write the infrastructure

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
