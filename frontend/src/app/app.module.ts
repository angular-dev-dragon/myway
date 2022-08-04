import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MayWayModule } from './shared/may-way/may-way.module'
import { RecruiterModule } from './components/recruiter/recruiter.module'
import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    MayWayModule,
    RecruiterModule,
    SharedModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
