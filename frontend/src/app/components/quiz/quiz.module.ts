import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RouterModule } from '@angular/router'
import { QuizRoutingModule } from './quiz-routing.module'

import { ListQuizComponent } from './list-quiz/list-quiz.component'
import { SharedModule } from 'src/app/shared/shared.module';
import { QuizDetailsComponent } from './quiz-details/quiz-details.component'

@NgModule({
  declarations: [ListQuizComponent, QuizDetailsComponent],
  imports: [RouterModule, SharedModule],
  exports: [QuizRoutingModule],
})
export class QuizModule {}
