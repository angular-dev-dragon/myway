import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DocumentDetailsComponent } from './document-details/document-details.component'
import { ListAdressesUtilesComponent } from './list-adresses-utiles/list-adresses-utiles.component'
import { ListDocumentsComponent } from './list-documents/list-documents.component'
import { ListLiensUtilesComponent } from './list-liens-utiles/list-liens-utiles.component'

const routes: Routes = [
  {
    path: 'list-liens-utiles',
    component: ListLiensUtilesComponent,
  },
  {
    path: 'list-adresses-utiles',
    component: ListAdressesUtilesComponent,
  },
  {
    path: 'list-documents-a-telecharger',
    component: ListDocumentsComponent,
  },
  {
    path: 'document-details',
    component: DocumentDetailsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPratiquesRoutingModule {}
