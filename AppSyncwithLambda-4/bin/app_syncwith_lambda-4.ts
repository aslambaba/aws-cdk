#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AppSyncwithLambda4Stack } from '../lib/app_syncwith_lambda-4-stack';

const app = new cdk.App();
new AppSyncwithLambda4Stack(app, 'AppSyncwithLambda4Stack');
