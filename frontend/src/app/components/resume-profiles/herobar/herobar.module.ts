import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementComponent } from './achievement/achievement.component';

import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { LayoutComponent } from './layout/layout.component';
import { CertificatComponent } from '../herobar/certificat/certificat.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AchievementFromComponent } from './achievement/achievement-from/achievement-from.component';
import { EducationFromComponent } from './education/education-from/education-from.component';
import { ExperienceFromComponent } from './experience/experience-from/experience-from.component';
import { HobbiesFromComponent } from './hobbies/hobbies-from/hobbies-from.component';

@NgModule({
  declarations: [
    AchievementComponent,

    ExperienceComponent,
    EducationComponent,
    HobbiesComponent,
    LayoutComponent,
    CertificatComponent,
    AchievementFromComponent,
    EducationFromComponent,
    ExperienceFromComponent,
    HobbiesFromComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [LayoutComponent],
})
export class HerobarModule {}
