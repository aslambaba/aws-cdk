#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { HelloWebsite3Stack } from '../lib/hello_website-3-stack';

const app = new cdk.App();
new HelloWebsite3Stack(app, 'HelloWebsite3Stack');
