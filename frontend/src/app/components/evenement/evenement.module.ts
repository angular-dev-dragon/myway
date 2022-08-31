import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from 'src/app/shared/shared.module'
import { EvenementRoutingModule } from './evenement-routing.module'
import { ListEvenementsComponent } from './list-evenements/list-evenements.component';
import { DetailsEventComponent } from './details-event/details-event.component'

@NgModule({
  declarations: [ListEvenementsComponent, DetailsEventComponent],
  imports: [SharedModule, RouterModule],
  exports: [EvenementRoutingModule],
})
export class EvenementModule {}
