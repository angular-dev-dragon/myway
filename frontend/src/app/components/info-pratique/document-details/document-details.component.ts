import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { DocumentService } from 'src/app/shared/services/document.service'

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.scss'],
})
export class DocumentDetailsComponent implements OnInit {
  document: any = {}

  constructor(
    private route: ActivatedRoute,
    private documentService: DocumentService,
  ) {
    console.log('test')

    this.route.params.subscribe((params) => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id

      this.document = this.documentService.getItemById(params['id'])

      console.log(this.document)
    })
  }
  ngOnInit(): void {}
  // {"_id":{"$oid":"6278dd323dfd5f5c7c9f5ca7"},"classification":[{"_id":"6002c79bcc151d2c20ac4186","translations":{"fr":{"__titre":"Document"}}}],"commentaire_interne":[],"Partager":[],"Telechargement":[],"translations":{"fr":{"__titre":"Adipisci ut dolore v","__sous_titre":"Fuga Obcaecati ut c","__description":"Alias corporis molli","__type_doc":"","__auteurs":[],"__tags":[]},"ar":{"__titre":"","__sous_titre":"","__description":"","__type_doc":"","__auteurs":[],"__tags":[]},"en":{"__titre":"","__sous_titre":"","__description":"","__type_doc":"","__auteurs":[],"__tags":[]}},"image":"/uploads/document_a_telecharger/1_image-1652088113996.png","classe_doc":"document à telecharger","date_publication":{"$date":"2022-05-09T09:21:59.594Z"},"date_edition":{"$date":"2022-05-09T09:21:59.594Z"},"lien_contenu":"documents_a_telecharger","partageable":true,"telechargeable":true,"etat_objet":"active","etat_validation":"en cours de publication","__v":0}
}
