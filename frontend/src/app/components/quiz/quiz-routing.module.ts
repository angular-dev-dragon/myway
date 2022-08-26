import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ListQuizComponent } from './list-quiz/list-quiz.component'
import { QuizDetailsComponent } from './quiz-details/quiz-details.component'

const routes: Routes = [
  {
    path: '',
    component: ListQuizComponent,
  },
  {
    path: 'quiz-details',
    component: QuizDetailsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizRoutingModule {}
