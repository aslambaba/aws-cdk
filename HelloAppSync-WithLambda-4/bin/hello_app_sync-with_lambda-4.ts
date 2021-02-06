#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { HelloAppSyncWithLambda4Stack } from '../lib/hello_app_sync-with_lambda-4-stack';

const app = new cdk.App();
new HelloAppSyncWithLambda4Stack(app, 'HelloAppSyncWithLambda4Stack');
