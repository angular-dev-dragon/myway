import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { API } from './api.service'

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  listdocuments: any[]
  constructor(private http: HttpClient) {
    this.listdocuments = this.alldocuments
  }

  getDocuments() {
    return this.http.get<any[]>(`${API}/doc/document`)
  }

  getDocument_byid(docId: any) {
    return this.http.get(`${API}/doc/document/${docId}`)
  }

  alldocuments: any[] = [
    {
      id: '6278dd323dfd54747f5c7c9f5ca7',
      classification: [
        {
          id: '6002c79bcc151d2c20ac4186',
          translations: { fr: { titre: 'Document' } },
        },
      ],
      commentaire_interne: [],
      Partager: [],
      Telechargement: [],
      translations: {
        fr: {
          titre: 'Titre Du Document',
          sous_titre: 'Sous Titre Du Document',
          description:
            'Alias corporis mdate_editionolli lorem duis   et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et accusamus et',
          type_doc: '',
          auteurs: [],
          tags: [],
        },
        ar: {
          titre: '',
          sous_titre: '',
          description: '',
          type_doc: '',
          __auteurs: [],
          tags: [],
        },
        en: {
          titre: '',
          sous_titre: '',
          description: '',
          type_doc: '',
          __auteurs: [],
          tags: [],
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
      format: 'pdf',
      taille: 1284,

      etat_validation: 'en cours de publication',
      nbrTelechargement: 2,

      __v: 0,
    },
    {
      id: '6279044747082e3febb48f1b8fc3',
      classification: [
        {
          id: '6002c79bcc151d2c20ac4186',
          translations: { fr: { titre: 'Document' } },
        },
      ],
      commentaire_interne: [],
      Partager: [],
      Telechargement: [],
      translations: {
        fr: {
          titre: 'Excepturi voluptas s',
          sous_titre: 'Excepteur suscipit i',
          description:
            'DatePipe is executed only when it detects a pure change to the input value. A pure change is either a change to a primitive input value (such as String, Number, Boolean, or Symbol), or a changed object reference (such as Date, Array, Function, or Object). Note that mutating a Date object does not cause the pipe to be rendered again. To ensure that the pipe is executed, you must create a new Date object.  the en-US locale data comes with Angular. To localize dates in another language, you must import the corresponding locale data. See the I18n guide for more information. The time zone of the formatted value can be specified either by passing it in as the second parameter of the pipe, or by setting the default through the DATE_PIPE_DEFAULT_TIMEZONE injection token. The value that is passed in as the second parameter takes precedence over the one defined using the injection token.',
          type_doc: '',
          auteurs: [],
          tags: [],
        },
        ar: {
          titre: '',
          sous_titre: '',
          description: '',
          type_doc: '',
          __auteurs: [],
          tags: [],
        },
        en: {
          titre: '',
          sous_titre: '',
          description: '',
          type_doc: '',
          __auteurs: [],
          tags: [],
        },
      },
      image: '/uploads/document_a_telecharger/1_image-1652098056245.webp',
      classe_doc: 'document à telecharger',
      date_publication: '2022-05-09T12:08:16.610Z',
      date_edition: '2022-05-09T12:08:16.610Z',
      lien_contenu: 'www.google.com',
      partageable: true,
      format: 'mp4',

      taille: 789654,
      telechargeable: true,
      etat_objet: 'active',
      etat_validation: 'en cours de publication',
      __v: 0,
    },
    {
      id: '62790474746c2e3febb48f1b8fc5',
      classification: [
        {
          id: '6002c79bcc151d2c20ac4186',
          translations: { fr: { titre: 'Document' } },
        },
      ],
      commentaire_interne: [],
      Partager: [],
      Telechargement: [],
      translations: {
        fr: {
          titre: 'Ad cupidatat optio ',
          sous_titre: 'Rerum sint ea duis ',
          description: 'Veniam non commodi ',
          type_doc: '',
          __auteurs: [],
          tags: [],
        },
        ar: {
          titre: '',
          sous_titre: '',
          description: '',
          type_doc: '',
          __auteurs: [],
          tags: [],
        },
        en: {
          titre: '',
          sous_titre: '',
          description: '',
          type_doc: '',
          __auteurs: [],
          tags: [],
        },
      },
      image: '/uploads/document_a_telecharger/1_image-1652098156288.png',
      classe_doc: 'document à telecharger',
      format: 'png',
      file: '110px-Water_molecule_3D.svg.png',
      date_publication: '2022-05-09T12:09:23.027Z',
      date_edition: '2022-05-09T12:09:23.027Z',
      taille: 789,
      nbrTelechargement: 3,

      Chemin_associe:
        '/uploads/document_a_telecharger/1_lien_ref-1652098156289.png',
      partageable: true,
      telechargeable: true,
      etat_objet: 'active',
      etat_validation: 'en cours de publication',
      __v: 0,
    },
    {
      id: '6278d4747774d323dfd5f5c7c9f5ca7',
      classification: [
        {
          id: '6002c79bcc151d2c20ac4186',
          translations: { fr: { titre: 'Document' } },
        },
      ],
      commentaire_interne: [],
      Partager: [],
      Telechargement: [],
      translations: {
        fr: {
          titre: 'Adipisci ut dolore v',
          sous_titre: 'Fuga Obcaecati ut c',
          description: 'Alias corporis mdate_editionolli',
          type_doc: '',
          auteurs: [],
          tags: [],
        },
        ar: {
          titre: '',
          sous_titre: '',
          description: '',
          type_doc: '',
          __auteurs: [],
          tags: [],
        },
        en: {
          titre: '',
          sous_titre: '',
          description: '',
          type_doc: '',
          __auteurs: [],
          tags: [],
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
      nbrTelechargement: 10,
      __v: 0,
    },
    {
      id: '6275454904082e3febb48f1b8fc3',
      classification: [
        {
          id: '6002c79bcc151d2c20ac4186',
          translations: { fr: { titre: 'Document' } },
        },
      ],
      commentaire_interne: [],
      Partager: [],
      Telechargement: [],
      translations: {
        fr: {
          titre: 'Excepturi voluptas s',
          sous_titre: 'Excepteur suscipit i',
          description: 'Commodo ut aut ullam',
          type_doc: '',
          __auteurs: [],
          tags: [],
        },
        ar: {
          titre: '',
          sous_titre: '',
          description: '',
          type_doc: '',
          __auteurs: [],
          tags: [],
        },
        en: {
          titre: '',
          sous_titre: '',
          description: '',
          type_doc: '',
          __auteurs: [],
          tags: [],
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
      nbrTelechargement: 7,
      taille: 25963,

      __v: 0,
    },
    {
      id: '627545409046c2e3febb48f1b8fc5',
      classification: [
        {
          id: '6002c79bcc151d2c20ac4186',
          translations: { fr: { titre: 'Document' } },
        },
      ],
      commentaire_interne: [],
      Partager: [],
      Telechargement: [],
      translations: {
        fr: {
          titre: 'Ad cupidatat optio ',
          sous_titre: 'Rerum sint ea duis ',
          description: 'Veniam non commodi ',
          type_doc: '',
          __auteurs: [],
          tags: [],
        },
        ar: {
          titre: '',
          sous_titre: '',
          description: '',
          type_doc: '',
          __auteurs: [],
          tags: [],
        },
        en: {
          titre: '',
          sous_titre: '',
          description: '',
          type_doc: '',
          __auteurs: [],
          tags: [],
        },
      },
      image: '/uploads/document_a_telecharger/1_image-1652098156288.png',
      classe_doc: 'document à telecharger',
      format: 'png',
      file: '110px-Water_molecule_3D.png',
      date_publication: '2022-05-09T12:09:23.027Z',
      date_edition: '2022-05-09T12:09:23.027Z',
      taille: 5747,
      Chemin_associe:
        '/uploads/document_a_telecharger/1_lien_ref-1652098156289.png',
      partageable: true,
      telechargeable: true,
      etat_objet: 'active',
      etat_validation: 'en cours de publication',
      nbrTelechargement: 8,

      __v: 0,
    },
  ]

  getlist() {
    return this.listdocuments
  }
  getItemById(id: string) {
    this.listdocuments = this.alldocuments
    let detailsDocument = this.alldocuments.find((doc: any) => doc.id == id)
    return detailsDocument
  }
}
