import { NgModule } from '@angular/core'

import { RouterModule } from '@angular/router'

import { ResumeProfilesRoutingModule } from './resume-profiles-routing.module'

import { SharedModule } from 'src/app/shared/shared.module'
import { LayoutsComponent } from './layouts/layouts.component'
import { TestComponent } from './test/test.component'
import { HerobarModule } from './herobar/herobar.module'
import { SideBarModule } from './side-bar/side-bar.module'
import { AssistantBarModule } from './assistant-bar/assistant-bar.module'
import { UrlPathNavComponent } from './url-path-nav/url-path-nav.component'

@NgModule({
  declarations: [LayoutsComponent, TestComponent, UrlPathNavComponent],
  imports: [
    SharedModule,
    RouterModule,
    HerobarModule,
    SideBarModule,
    AssistantBarModule,
  ],

  exports: [ResumeProfilesRoutingModule],
})
export class ResumeProfilesModule {}
