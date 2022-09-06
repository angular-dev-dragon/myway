import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DetailsForumComponent } from './details-forum/details-forum.component'
import { DetailsThemeComponent } from './details-theme/details-theme.component'
import { ListForumComponent } from './list-forum/list-forum.component'
import { SondageComponent } from './sondage/sondage.component'
import { TemoignageComponent } from '../../shared/components/temoignage/temoignage.component'

const routes: Routes = [
  {
    path: 'list-forum',
    component: ListForumComponent,
  },
  {
    path: 'details-forum/:id',
    component: DetailsForumComponent,
  },
  {
    path: 'details-theme',
    component: DetailsThemeComponent,
  },
  {
    path: 'temoignage',
    component: TemoignageComponent,
  },
  {
    path: 'sondage',
    component: SondageComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspaceCommunautaireRoutingModule {}
