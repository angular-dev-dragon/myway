import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { RecruiterModule } from './components/recruiter/recruiter.module'
import { SharedModule } from './shared/shared.module'
import { ResumeProfilesModule } from './components/resume-profiles/resume-profiles.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RecruiterModule,
    SharedModule,
    ResumeProfilesModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
