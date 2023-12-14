import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerChatbotComponent } from 'src/app/components/customer-chatbot/customer-chatbot.component';
import { EmailProcessingComponent } from 'src/app/components/email-processing/email-processing.component';
import { GenPolicyDocComponent } from 'src/app/components/gen-policy-doc/gen-policy-doc.component';
import { GenRiskScenariosComponent } from 'src/app/components/gen-risk-scenarios/gen-risk-scenarios.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { WelcomeComponent } from 'src/app/components/welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component:WelcomeComponent },
  { path: 'gen-risk-scenarios', component:GenRiskScenariosComponent },
  { path: 'gen-policy-doc', component:GenPolicyDocComponent },
  { path: 'email-processing', component:EmailProcessingComponent },
  { path: 'customer-chatbot', component:CustomerChatbotComponent },
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
