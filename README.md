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

## How can I test and publish Apps in the meantime?

To test the app you for now you can clone our base client [toguro-fe](https://github.com/hmendes00/toguro-fe)
You will see all the needed instructions to have it setup.
It shouldn't take more than 5 minutes to get it up and running, tbh.

If you want to develop your own app that supports other apps being installed, you will have to build it yourself.
Luckily you have toguro-fe with the basic structure already setup for this. You will need to take care of the app marketplace where you can allow others to publish apps to it. Those apps can be added to your main project by applying some simple business logic.

For publishing within our marketplace you will have to contact Toguro Support/Admin Team

Our email:
`hmendes00@gmail.com`
`geovannylc@gmail.com`