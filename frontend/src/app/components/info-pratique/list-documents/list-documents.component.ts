import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-list-documents',
  templateUrl: './list-documents.component.html',
  styleUrls: ['./list-documents.component.scss'],
})
export class ListDocumentsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  documents: any[] = [
    {
      _id: { $oid: '6278dd323dfd5f5c7c9f5ca7' },
      classification: [
        {
          _id: '6002c79bcc151d2c20ac4186',
          translations: { fr: { __titre: 'Document' } },
        },
      ],
      commentaire_interne: [],
      Partager: [],
      Telechargement: [],
      translations: {
        fr: {
          __titre: 'Adipisci ut dolore v',
          __sous_titre: 'Fuga Obcaecati ut c',
          __description: 'Alias corporis molli',
          __type_doc: '',
          __auteurs: [],
          __tags: [],
        },
        ar: {
          __titre: '',
          __sous_titre: '',
          __description: '',
          __type_doc: '',
          __auteurs: [],
          __tags: [],
        },
        en: {
          __titre: '',
          __sous_titre: '',
          __description: '',
          __type_doc: '',
          __auteurs: [],
          __tags: [],
        },
      },
      image: '/uploads/document_a_telecharger/1_image-1652088113996.png',
      classe_doc: 'document à telecharger',
      date_publication: '2022-05-09T09:21:59.594Z',
      date_edition: '2022-05-09T09:21:59.594Z',
      lien_contenu: 'documents_a_telecharger',
      partageable: true,
      telechargeable: true,
      etat_objet: 'active',
      etat_validation: 'en cours de publication',
      __v: 0,
    },
    {
      _id: { $oid: '627904082e3febb48f1b8fc3' },
      classification: [
        {
          _id: '6002c79bcc151d2c20ac4186',
          translations: { fr: { __titre: 'Document' } },
        },
      ],
      commentaire_interne: [],
      Partager: [],
      Telechargement: [],
      translations: {
        fr: {
          __titre: 'Excepturi voluptas s',
          __sous_titre: 'Excepteur suscipit i',
          __description: 'Commodo ut aut ullam',
          __type_doc: '',
          __auteurs: [],
          __tags: [],
        },
        ar: {
          __titre: '',
          __sous_titre: '',
          __description: '',
          __type_doc: '',
          __auteurs: [],
          __tags: [],
        },
        en: {
          __titre: '',
          __sous_titre: '',
          __description: '',
          __type_doc: '',
          __auteurs: [],
          __tags: [],
        },
      },
      image: '/uploads/document_a_telecharger/1_image-1652098056245.webp',
      classe_doc: 'document à telecharger',
      date_publication: '2022-05-09T12:08:16.610Z',
      date_edition: '2022-05-09T12:08:16.610Z',
      lien_contenu: 'www.google.com',
      partageable: true,
      telechargeable: true,
      etat_objet: 'active',
      etat_validation: 'en cours de publication',
      __v: 0,
    },
    {
      _id: { $oid: '6279046c2e3febb48f1b8fc5' },
      classification: [
        {
          _id: '6002c79bcc151d2c20ac4186',
          translations: { fr: { __titre: 'Document' } },
        },
      ],
      commentaire_interne: [],
      Partager: [],
      Telechargement: [],
      translations: {
        fr: {
          __titre: 'Ad cupidatat optio ',
          __sous_titre: 'Rerum sint ea duis ',
          __description: 'Veniam non commodi ',
          __type_doc: '',
          __auteurs: [],
          __tags: [],
        },
        ar: {
          __titre: '',
          __sous_titre: '',
          __description: '',
          __type_doc: '',
          __auteurs: [],
          __tags: [],
        },
        en: {
          __titre: '',
          __sous_titre: '',
          __description: '',
          __type_doc: '',
          __auteurs: [],
          __tags: [],
        },
      },
      image: '/uploads/document_a_telecharger/1_image-1652098156288.png',
      classe_doc: 'document à telecharger',
      format: 'png',
      file: '110px-Water_molecule_3D.svg.png',
      date_publication: '2022-05-09T12:09:23.027Z',
      date_edition: '2022-05-09T12:09:23.027Z',
      taille: 5747,
      Chemin_associe:
        '/uploads/document_a_telecharger/1_lien_ref-1652098156289.png',
      partageable: true,
      telechargeable: true,
      etat_objet: 'active',
      etat_validation: 'en cours de publication',
      __v: 0,
    },
  ]
}
