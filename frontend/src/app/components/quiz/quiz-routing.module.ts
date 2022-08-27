import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ListQuizComponent } from './list-quiz/list-quiz.component'
import { QuizDetailsComponent } from './quiz-details/quiz-details.component'
import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component'
import { QuizResultComponent } from './quiz-result/quiz-result.component'

const routes: Routes = [
  {
    path: '',
    component: ListQuizComponent,
  },
  {
    path: 'quiz-details',
    component: QuizDetailsComponent,
  },
  {
    path: 'quiz-question',
    component: QuizQuestionsComponent,
  },
  {
    path: 'quiz-result',
    component: QuizResultComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizRoutingModule {}
