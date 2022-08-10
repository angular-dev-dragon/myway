import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpectationsComponent } from './expectations/expectations.component';
import { HeadProfileComponent } from './head-profile/head-profile.component';
import { SkillsComponent } from './skills/skills.component';
import { LangougeComponent } from './langouge/langouge.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';



@NgModule({
  declarations: [
    ExpectationsComponent,
    HeadProfileComponent,
    SkillsComponent,
    LangougeComponent,
    ContactComponent,
    AboutComponent,
    PersonalInformationComponent,
    LayoutComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [LayoutComponent],
})
export class SideBarModule {}
