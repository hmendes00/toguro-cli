# Welcome to your CDK TypeScript project!

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template

# Setup

This stack folder is for AWS based infrastructure. If you don't have an aws account and want to use this structure, you can create one for free (I believe it's free for 1 year).

If you already have an account and IAM configured to create stacks, get roles, access s3, cloudfront and some other resources you can skip this next step

## Aws account setup

Once you register, search for iam service in the main search box

- Add user
  You can create two users (or one... do as you wish)

-> dev-user
-> prod-user

- Complete the other steps for the user creation.

Don’t forget that those users will need add admin access or basic access for creating stack, get roles, access s3, cloudfront, etc.

You can add this in IAM service / Create Groups (Add both users to admin/or-whatever-you-name-it group), Add Policies.

If you feel comfortable with this, you can add `AdministratorAccess` policy to them.

## Aws cli setup

- install [aws cli](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- setup [aws cli](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-profiles)

E.g

- `aws configure --profile devuser` (follow the steps)
- `aws configure --profile produser` (follow the steps)

install cdk
npm install -g aws-cdk

## Stack setup and deploying

Make sure you are inside `STACK` folder and you are running `NODE >= v16`

- run `npm install` to install the dependencies

When running cdk for the first time you will need to bootstrap it in your AWS account.

If you followed the instructions here, you can do it by running `cdk bootstrap --profile=devuser`

_NOTE: If you get any permission errors during bootstrapping, you will need to delete the stack manually in cloudformation service and maybe s3 service as well._

At this moment you will need to run `npm run build` manually in the root folder of this project before publishing it.

Once bootstrapping is done you can run `cdk deploy —profile=devuser`(if you have a default profile you can omit the profile flag)

After deployment is done you will see the cloudformation url displayed in the console.
Use it as url for you app.

Congrats! You should have your app deployed in your infrastructure now!
