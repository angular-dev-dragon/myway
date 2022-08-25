import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { RecruiterModule } from './components/recruiter/recruiter.module'
import { SharedModule } from './shared/shared.module'
import { ResumeProfilesModule } from './components/resume-profiles/resume-profiles.module'
import { OffresModule } from './components/offres/offres.module'

import { InfoPratiqueModule } from './components/info-pratique/info-pratique.module'
import { RubriquePostModule } from './components/rubrique-article/rubrique-post.module'
import { EspaceCommunautaireModule } from './components/espace-communautaire/espace-communautaire.module'
import { ListBlogeurComponent } from './components/blog/list-blogeur/list-blogeur.component'

import { CompetencesModule } from './components/competences/competences.module'
import { MetiersModule } from './components/metiers/metiers.module'

@NgModule({
  declarations: [AppComponent, ListBlogeurComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RecruiterModule,
    SharedModule,
    ResumeProfilesModule,
    MetiersModule,
    OffresModule,
   

    InfoPratiqueModule,
    RubriquePostModule,
    EspaceCommunautaireModule,
    CompetencesModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
