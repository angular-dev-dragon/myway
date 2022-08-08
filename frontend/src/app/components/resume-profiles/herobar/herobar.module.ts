import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementComponent } from './achievement/achievement.component';

import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { LayoutComponent } from './layout/layout.component';
import { CertificatComponent } from '../herobar/certificat/certificat.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AchievementComponent,

    ExperienceComponent,
    EducationComponent,
    HobbiesComponent,
    LayoutComponent,
    CertificatComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [LayoutComponent],
})
export class HerobarModule {}
