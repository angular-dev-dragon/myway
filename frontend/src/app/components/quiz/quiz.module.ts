import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RouterModule } from '@angular/router'
import { QuizRoutingModule } from './quiz-routing.module'

import { ListQuizComponent } from './list-quiz/list-quiz.component'
import { SharedModule } from 'src/app/shared/shared.module';
import { QuizDetailsComponent } from './quiz-details/quiz-details.component';
import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component'

@NgModule({
  declarations: [ListQuizComponent, QuizDetailsComponent, QuizQuestionsComponent, QuizResultComponent],
  imports: [RouterModule, SharedModule],
  exports: [QuizRoutingModule],
})
export class QuizModule {}
