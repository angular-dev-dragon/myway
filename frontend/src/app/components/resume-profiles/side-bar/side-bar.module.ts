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
import { HeaderProfileFromComponent } from './head-profile/header-profile-from/header-profile-from.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { AboutFormComponent } from './about/about-form/about-form.component';
import { ExpectationsFormComponent } from './expectations/expectations-form/expectations-form.component';
import { LangougeFormComponent } from './langouge/langouge-form/langouge-form.component';
import { SkillsFormComponent } from './skills/skills-form/skills-form.component';



@NgModule({
  declarations: [
    ExpectationsComponent,
    HeadProfileComponent,
    SkillsComponent,
    LangougeComponent,
    ContactComponent,
    AboutComponent,
    LayoutComponent,
    HeaderProfileFromComponent,
    ContactFormComponent,
    AboutFormComponent,
    ExpectationsFormComponent,
    LangougeFormComponent,
    SkillsFormComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [LayoutComponent],
})
export class SideBarModule {}
