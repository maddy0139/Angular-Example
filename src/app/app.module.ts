import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, en_US, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import zh from '@angular/common/locales/zh';
import { ProfileComponent } from './components/employee/profile/profile.component';
import { AddressComponent } from './components/employee/address/address.component';
import { EmploymentDetailsComponent } from './components/employee/employment-details/employment-details.component';
import { EducationComponent } from './components/employee/education/education.component';
import { ExperienceComponent } from './components/employee/experience/experience.component';
import { SkillsComponent } from './components/employee/skills/skills.component';
import { DocumentAndIdsComponent } from './components/employee/document-and-ids/document-and-ids.component';
import { ReportingStructureComponent } from './components/employee/reporting-structure/reporting-structure.component';
import { ConfigService } from './services/ConfigService';
import { DesignationComponent } from 'src/app/components/designation/designation.component';
import { JwtInterceptor } from 'src/app/services/jwt.interceptor';

const appInitializerFn = (appConfig: ConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  }
};

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ForgotpassComponent,
    ProfileComponent,
    AddressComponent,
    EmploymentDetailsComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    DocumentAndIdsComponent,
    ReportingStructureComponent,
    DesignationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [ConfigService]
    },
    { provide: NZ_I18N, useValue: en_US },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
