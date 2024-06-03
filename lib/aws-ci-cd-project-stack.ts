import * as cdk from "aws-cdk-lib";
import {
  CodeBuildStep,
  CodePipeline,
  CodePipelineSource,
  ShellStep,
} from "aws-cdk-lib/pipelines";
import { Construct } from "constructs";
import { PipelineStage } from "./PipelineStage";

export class AwsCiCdProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create AWS CodePipeline stack
    const pipeline = new CodePipeline(this, "PipelineAutomation", {
      pipelineName: "PipelineAutomation",
      synth: new ShellStep("Synth", {
        input: CodePipelineSource.gitHub(
          "karthikdurai-kd/Pipeline-Automation",
          "main"
        ),
        commands: ["npm ci", "npm run build", "npx cdk synth"],
      }),
    });

    // Creating test stage
    const testStage = pipeline.addStage(
      new PipelineStage(this, "PipelineTestStage", {
        stageName: "test",
      })
    );

    // Unit Testing "PipelineTestStage" before the deployment
    testStage.addPre(
      new CodeBuildStep("unit test", {
        commands: ["npm ci", "npm test"],
      })
    );
  }
}
