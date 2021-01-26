import * as cdk from '@aws-cdk/core';
import {Bucket} from '@aws-cdk/aws-s3'
import {BucketDeployment, Source} from '@aws-cdk/aws-s3-deployment';
import * as cloudfront from '@aws-cdk/aws-cloudfront';
import * as origins from '@aws-cdk/aws-cloudfront-origins';

export class HelloWebsite3Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    const MyBucket = new Bucket(this,"WebsiteBucket",{
      versioned: true,
    })

    const distribution = new cloudfront.Distribution(this,"CF-Distrubution",{
      defaultBehavior: {
        origin: new origins.S3Origin(MyBucket),
      },
      defaultRootObject: "index.html"
    })

    new cdk.CfnOutput(this,"CF-Distribution-DomainName",{
      value: distribution.domainName,
    })

    new BucketDeployment(this,"BucketDeployment-Resource",{
      sources: [Source.asset("./website")],
      destinationBucket: MyBucket,
      distribution,
      distributionPaths: ["/*"],
    })


  }
}
