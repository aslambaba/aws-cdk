#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { HelloCdk1Stack } from '../lib/hello_cdk-1-stack';

const app = new cdk.App();
new HelloCdk1Stack(app, 'HelloS3Stack');

//The First Stack is about to make a S3 bucket in Aws using cdk-cli.