import * as cdk from "aws-cdk-lib";
import { CodePipeline } from "aws-cdk-lib/pipelines";
import { Construct } from "constructs";

export class AwsCiCdProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
  }
}
