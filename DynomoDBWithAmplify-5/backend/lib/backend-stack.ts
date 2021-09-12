import * as cdk from '@aws-cdk/core';
import * as appsync from '@aws-cdk/aws-appsync';
import * as lambda from '@aws-cdk/aws-lambda';
import * as DynomoDb from '@aws-cdk/aws-dynamodb';

export class BackendStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const AppSyncServer = new appsync.GraphqlApi(this, "GraphQLServer", {
      name: 'AppSyncServer',
      schema: appsync.Schema.fromAsset('schema/schema.graphql'),
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.API_KEY
        }
      }
    })

    new cdk.CfnOutput(this, "GraphQLUrl",{
      value: AppSyncServer.graphqlUrl
    })

    new cdk.CfnOutput(this, "GraphqlAPI",{
      value: AppSyncServer.apiKey || ''
    })

    const LambdaFunction = new lambda.Function(this,"LogicFunction",{
      runtime: lambda.Runtime.NODEJS_10_X,
      handler: 'logics.handler',
      code: lambda.Code.fromAsset('lambda')
    })


    const DataSource = AppSyncServer.addLambdaDataSource("Lambda DataSource", LambdaFunction)

    const Table = new DynomoDb.Table(this, 'SchoolTable', {
      partitionKey:{
        name: 'StudentId',
        type: DynomoDb.AttributeType.STRING
      }
    })

    Table.grantFullAccess(LambdaFunction)

    LambdaFunction.addEnvironment("TableName",Table.tableName)


    AppSyncServer.createResolver({
      typeName: 'Query',
      fieldName: 'GetStudents'
    })    

    DataSource.createResolver({
      typeName: 'Mutation',
      fieldName: 'AddStudent'
    })

  }
}
