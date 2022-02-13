import {
  App,
  Stack,
  StackProps,
  aws_s3,
  aws_cloudfront,
  aws_cloudfront_origins,
  CfnOutput,
  aws_s3_deployment
} from 'aws-cdk-lib';
import { InitCommand } from 'aws-cdk-lib/aws-ec2';

export class StackStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    const appBucket = new aws_s3.Bucket(this, 'AppBucket', {
      versioned: true,
      cors: [
        {
          allowedMethods: [aws_s3.HttpMethods.GET],
          allowedOrigins: ['http://localhost:8080'], // change this line accordingly
          allowedHeaders: ['*']
        }
      ]
    });

    const distribution = new aws_cloudfront.Distribution(this, 'AppsDistribution', {
      defaultBehavior: {
        origin: new aws_cloudfront_origins.S3Origin(appBucket)
      },
      defaultRootObject: 'main.es.js'
      // domainNames: [''] use this to add your own domain instead of cloudfront url
    });

    // outputs the cloudfront name in the console when deploying
    new CfnOutput(this, 'DistributionDomainName', {
      value: distribution.domainName
    });

    new aws_s3_deployment.BucketDeployment(this, 'DeployApp', {
      sources: [aws_s3_deployment.Source.asset('../dist')],
      destinationBucket: appBucket,
      distribution,
      distributionPaths: ['/*']
    });
  }
}
