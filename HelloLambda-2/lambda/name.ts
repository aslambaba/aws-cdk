import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  
    return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain" },
        body: `Hello Aslam Baba, CDK! You've hit ${event.path}\n`
    };

}