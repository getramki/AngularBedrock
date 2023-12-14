import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { AppMaterialModule } from './modules/app-material/app-material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { GenRiskScenariosComponent } from './components/gen-risk-scenarios/gen-risk-scenarios.component';
import { GenPolicyDocComponent } from './components/gen-policy-doc/gen-policy-doc.component';
import { EmailProcessingComponent } from './components/email-processing/email-processing.component';
import { CustomerChatbotComponent } from './components/customer-chatbot/customer-chatbot.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ToolbarComponent,
    GenRiskScenariosComponent,
    GenPolicyDocComponent,
    EmailProcessingComponent,
    CustomerChatbotComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
