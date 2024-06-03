import { Stage, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { LambdaStack } from "./LambdaStack";

export class PipelineStage extends Stage {
  constructor(scope: Construct, id: string, props: StageProps) {
    super(scope, id, props);

    // What we are doing here is we are creating a LambdaStack using AWS CodePipeline. That is we write the code and push it to github and from there it is built by AWS CodePipeline. Previously we will manually do "CDK Deploy" but now once we push the code to github, it built by AWS CodePipeline
    new LambdaStack(this, "LambdaStack", {
      stageName: props.stageName,
    });
  }
}
