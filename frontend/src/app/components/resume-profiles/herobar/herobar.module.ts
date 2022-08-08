import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementComponent } from './achievement/achievement.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { LayoutComponent } from './layout/layout.component';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AchievementComponent,
    PersonalInformationComponent,
    ExperienceComponent,
    EducationComponent,
    HobbiesComponent,
    LayoutComponent,
  ],
  imports: [CommonModule,SharedModule],
  exports: [LayoutComponent],
})
export class HerobarModule {}
