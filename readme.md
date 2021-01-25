# Welcome to AWS CDK Deployments.

There we will learn how we deplay our resources in AWS using
aws-cdk. So, for that firstly we need some intsallation.

- AWS-CLI
- AWS-CDK
- Typescipty (We use typescript in this repo)

Then we have to configure your AWS, For that run:

aws configure -> (There put your user credentials)

After all these installation on your system. You Need to run a command on your terminal wether it's linux or vscode.

- Make a Directory then,

cdk init app --language typescript
or
clone my repository or particular project.

#### Within that Directory Run:

```
npm run build -> (For Build TypeScript)
cdk synth -> (Synth to check your auto generated yaml file)
cdk deploy -> (Deploy your stacks on AWS)

```