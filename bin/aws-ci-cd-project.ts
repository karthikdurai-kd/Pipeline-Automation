#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { AwsCiCdProjectStack } from "../lib/aws-ci-cd-project-stack";

const app = new cdk.App();
new AwsCiCdProjectStack(app, "AwsCiCdProjectStack", {});

app.synth();
