import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from 'src/app/shared/shared.module'

import { ListLiensUtilesComponent } from './list-liens-utiles/list-liens-utiles.component'
import { ListAdressesUtilesComponent } from './list-adresses-utiles/list-adresses-utiles.component'
import { InfoPratiquesRoutingModule } from './info-pratique-routing.module';
import { ListDocumentsComponent } from './list-documents/list-documents.component';
import { DocumentDetailsComponent } from './document-details/document-details.component'

@NgModule({
  declarations: [ListLiensUtilesComponent, ListAdressesUtilesComponent, ListDocumentsComponent, DocumentDetailsComponent],
  imports: [SharedModule, RouterModule],
  exports: [InfoPratiquesRoutingModule],
})
export class InfoPratiqueModule {}
