import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { CallGenAIAPIService } from '../../services/call-gen-aiapi.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gen-risk-scenarios',
  templateUrl: './gen-risk-scenarios.component.html',
  styleUrls: ['./gen-risk-scenarios.component.css']
})
export class GenRiskScenariosComponent {
  constructor(private fb: FormBuilder, private genAIService:CallGenAIAPIService) { }
  riskProfileForm = this.fb.group({
    name:[''],
    gender:[''],
    age:[''],
    travelOrigin:[''],
    travelDestination:[''],
    travelStops:[''],
    travelStartDate:[''],
    travelEndDate:[''],
    travelMode:[''],
    carrier:[''],
    travelPurpose:[''],
    preMedicalConditions:['']
  })

  // Build Prompt to generate risk scenarios

  reqStr="With the above information generate 20 risk scenarios for Travel Insurence Policy Underwritting.\\"
  modelSettingsStr = ",\"maxTokens\":3000,\"temperature\":0.7,\"topP\":1,\"stopSequences\":[],\"countPenalty\":{\"scale\":0},\"presencePenalty\":{\"scale\":0},\"frequencyPenalty\":{\"scale\":0}}"
  reqPrompt='';
  body='';
  modelId ="ai21.j2-ultra-v1";
  contentType ="application/json";
  accept = "*/*";
  response=''
  req='';
  prompt = '';
  respbody:any;
  respans:any;
  showProgress:boolean=false;
  requestSubmit:boolean=false;

  testreq = {
    "modelId": "ai21.j2-ultra-v1",
    "contentType": "application/json",
    "accept": "*/*",
    "body": "{\"prompt\":\"\\\"Name: Rama\\nGender: Male\\nAge: 43\\nTravel Origin: Mumbai\\nTravel Destination: New York\\nTravel Stops: Frankfurt\\nTravel Start Date: Thu Nov 09 2023 00:00:00 GMT+0530 (India Standard Time)\\nTravel End Date: Fri Nov 24 2023 00:00:00 GMT+0530 (India Standard Time)\\nTravel Mode: Flight\\\\nCarrier: Air India\\nTravel Purpose: Vacation\\nPre Medical Conditions: Diabetes\\\"\\n\\nWith the above information generate 20 risk scenarios for Travel Insurence Policy Underwritting.\",\"maxTokens\":3000,\"temperature\":0.7,\"topP\":1,\"stopSequences\":[],\"countPenalty\":{\"scale\":0},\"presencePenalty\":{\"scale\":0},\"frequencyPenalty\":{\"scale\":0}}"
}
  testrespbody:any;

  onSubmit() {    
    this.reqPrompt = "Name: " + this.riskProfileForm.value["name"] + "\\\\n" + "Gender: " + this.riskProfileForm.value["gender"] + "\\\\n" +"Age: " + this.riskProfileForm.value["age"] + "\\\\n" + "Travel Origin: " + this.riskProfileForm.value["travelOrigin"] 
    + "\\\\n" + "Travel Destination: " + this.riskProfileForm.value["travelDestination"] + "\\\\n" + "Travel Stops: " + this.riskProfileForm.value["travelStops"] 
    + "\\\\n" + "Travel Start Date: " + this.riskProfileForm.value["travelStartDate"] + "\\\\n"+ "Travel End Date: " + this.riskProfileForm.value["travelEndDate"] + "\\\\n" + "Travel Mode: " + this.riskProfileForm.value["travelMode"] 
    + "\\\\n" + "Carrier: " + this.riskProfileForm.value["carrier"] + "\\\\n" + "Travel Purpose: " + this.riskProfileForm.value["travelPurpose"] + "\\\\n" + "Pre Medical Conditions: " + this.riskProfileForm.value["preMedicalConditions"];
    
    this.prompt = "\""+this.reqPrompt +"\\\\\\\""+ "\\\\n" + "\\\\n" + this.reqStr ;

    this.body = "{\\\"prompt\\\":\\\"\\\\\\" + this.prompt + JSON.stringify(this.modelSettingsStr);

    this.req = "{\"modelId\": \"ai21.j2-ultra-v1\",\"contentType\": \"application/json\",\"accept\":\"*/*\",\"body\": \"" + this.body + "}";
    console.log(this.req);
    this.requestSubmit = true
    this.showProgress=true;
    this.getGenAIResponse(this.req);
    // console.warn(this.riskProfileForm.value);
  }

  // fill data fast for testing / commented in html
  fill(){
    this.riskProfileForm.controls['name'].setValue("Neo");
    this.riskProfileForm.controls['gender'].setValue("Male");
    this.riskProfileForm.controls['age'].setValue("26");
    this.riskProfileForm.controls['travelOrigin'].setValue("Mumbai");
    this.riskProfileForm.controls['travelDestination'].setValue("New York");
    this.riskProfileForm.controls['travelStops'].setValue("Frankfurt");
    this.riskProfileForm.controls['travelMode'].setValue("Flight");
    this.riskProfileForm.controls['carrier'].setValue("Air India");
    this.riskProfileForm.controls['travelPurpose'].setValue("Vacation");
    this.riskProfileForm.controls['preMedicalConditions'].setValue("Diabetes and Hypertension");
  }

  // Subscribe to service to get response
  getGenAIResponse(request:any):any {
    this.genAIService.getRiskScenarios(request)
        .subscribe(response => {
          if(response)
          {
            this.showProgress = false
            return this.response = JSON.parse(response["body"])["Answer"];
          }
          else{
            this.showProgress = false
            return this.response = "Some Error has occured"
          }
          
        });
  }
}
