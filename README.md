# Build your Angular App to build prompts for Generative AI Service Amazon Bedrock
You can build an Angular App as a front end to build prompts and query the Amazon Bedrock Generative AI service to get relevant answers.
This code repo for is a demonstration to build the App and access the Bedrock service through API Gateway and Lambda.
___
### Scenario
Insurance companies have to estimate and evaluate risk scenarios before underwritting any policy and it is a complicated task given the vast amount of data which needs to be taken into account, analyze it and generate risk scenarios. This is a good use case for using Generative AI technology. In this code a prompt is build with the given user inputs and it is sent to Amazon Bedrock Service to generate the Risk Scenarios.
___
### Structure of this repo
This repo contain two folders aws-backend and angular-frontend
* aws-backend  - Python Code for Lambda fuction which quiries Amazon Bedrock and get response in lambda folder
* aws-backend  - generate-risk-scenarios.yaml file which is a SAM Template to deploy Lambda Functions and API on Amazon API gateway which acts as front for lambda.
* angular-frontend - Angular code to build prompt in angular components, angular service to call the backend API and dispplay the reponse. Angular Material is used for styling. Material and Routing modules are in modules folder in the app folder of Angular src directory.
___
### Prerequisites
AWS Account and IAM user with necessary permissions for creating Lambda, aws cli, SAM cli, configure IAM user with necessary programmatic permissions.
In you AWS Account you need to apply and get access to the foundation model 'Jurassic-2 Ultra' in Amazon Bedrock service. You can also try with other text generating models by changing the code in Lambda function.

* Install and configure Angular CLI, NodeJS and npm. You can follow respective guides from their websites.

Please install and configure above before going further

* You can incur charges in your AWS Account by following this steps below.
* The code will deploy in us-west-2 region, change it where ever necessary if deploying in another region.
___
### Deploy
After downloading the repo in the terminal Change Directory to repo directory and follow the steps for

* The default Boto3 library version supplied with Lambda python 3.11 runtime environment is not supporting Amazon Bedrock at the time of publishing this repo, so you have to download latest version of Boto3 from https://pypi.org/project/boto3/ and add it as a Layer to Lambda after deploying it. I have used version Boto3-1-28-75 which is in SAM template.

* Deploy the SAM template. You can follow the guide here https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started-hello-world.html

* Or Manually Create the Lambda function and create a layer and add it to Lambda function

* Make sure Lambda has necessary role with permissions to access Amazon Bedrock.
___
### Running you Angular App
You can run Angular App locally or deploy with Amazon Amplify by following the guide here https://docs.amplify.aws/angular/start/getting-started/introduction/ .
Before you run the Angular App you need to modify the code with API Gateway End Point Invoke URL which you get after deploying the SAM Template.
Modify the code at line 10 in the call-gen-aiapi.service.ts file under src -> app -> services directory.

<pre><code>private genRiskScenariosUrl = 'Replace-With-API-Gateway-Endpoint';</pre></code>

In the terminal under angular-fronend directory run the following command

<pre><code>npm install</pre></code>

After all packages are installed run

<pre><code>ng serve</pre></code>

You can access you Angular app here
<pre><code>http://localhost:4200/</pre></code>

___
### Future Improvements
This repo can be further improved to build more prompts for various other scenarios like Insurance Policy Generation, ChatBot, etc and options to choose other foundation models.

* Make sure you dont expose your API Gateway endpoint and secure it with Cognito and impliment throtelling in production scenarios.