import * as cdk from "aws-cdk-lib";
import {
  CodePipeline,
  CodePipelineSource,
  ShellStep,
} from "aws-cdk-lib/pipelines";
import { Construct } from "constructs";

export class AwsCiCdProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create AWS CodePipeline stack
    new CodePipeline(this, "PipelineAutomation", {
      pipelineName: "PipelineAutomation",
      synth: new ShellStep("Synth", {
        input: CodePipelineSource.gitHub(
          "karthikdurai-kd/Pipeline-Automation",
          "main"
        ),
        commands: ["npm ci", "npx cdk synth"],
      }),
    });
  }
}
