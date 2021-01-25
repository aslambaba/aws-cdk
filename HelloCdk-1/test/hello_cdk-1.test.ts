import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as HelloCdk1 from '../lib/hello_cdk-1-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new HelloCdk1.HelloCdk1Stack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
