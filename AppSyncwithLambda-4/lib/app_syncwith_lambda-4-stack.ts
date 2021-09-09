import * as cdk from '@aws-cdk/core';
import * as appsync from '@aws-cdk/aws-appsync';
import * as LMF from '@aws-cdk/aws-lambda';

export class AppSyncwithLambda4Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const appsyncServer = new appsync.GraphqlApi(this, 'Appsync', {
      name: 'AppsyncServer',
      schema: appsync.Schema.fromAsset('graphql/schema.graphql'),
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.API_KEY
        }
      }
    });

    new cdk.CfnOutput(this, "GraphqlAPI", {
      value: appsyncServer.graphqlUrl
    });

    new cdk.CfnOutput(this, "API KEY", {
      value: appsyncServer.apiKey || '',
    })

    const LambdaFunction = new LMF.Function(this, 'LambdaFunctionFor GraphQL', {
      runtime: LMF.Runtime.NODEJS_10_X,
      handler: 'students.handler',
      code: LMF.Code.fromAsset('lambda')
    })

    const lambdaDataSourse = appsyncServer.addLambdaDataSource("LambdaFunctionDS",LambdaFunction)

    lambdaDataSourse.createResolver({
      typeName: 'Query',
      fieldName: 'students',
    })

  }
}
