#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { HelloLambda2Stack } from '../lib/hello_lambda-2-stack';

const app = new cdk.App();
new HelloLambda2Stack(app, 'HelloLambda2Stack');
