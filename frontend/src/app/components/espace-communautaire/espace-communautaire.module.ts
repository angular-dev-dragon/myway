import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from 'src/app/shared/shared.module'
import { EspaceCommunautaireRoutingModule } from './espace-communautaire-routing.module';
import { ListForumComponent } from './list-forum/list-forum.component';
import { DetailsForumComponent } from './details-forum/details-forum.component';
import { DetailsThemeComponent } from './details-theme/details-theme.component';

import { SondageComponent } from './sondage/sondage.component'

@NgModule({
  declarations: [
    ListForumComponent,
    DetailsForumComponent,
    DetailsThemeComponent,
  
    SondageComponent
  ],
  imports: [SharedModule, RouterModule],
  exports: [EspaceCommunautaireRoutingModule],
})
export class EspaceCommunautaireModule {}
