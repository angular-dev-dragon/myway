import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { API } from './api.service'

@Injectable({
  providedIn: 'root',
})
export class SondageService {
  listsondage: any[] = []
  allSondages: any = [
    {
      _id: { $oid: '6245a77363da22654c292349' },
      classification: [
        { translations: { fr: { __titre: 'sondage' } } },
        { translations: { fr: { __titre: 'categorie1' } } },
      ],
      translations: {
        fr: {
          __taxonomie_sondage: '',
          __designation: 'Titre Sondage',
          __ref_responsable: 'votre nom',
        },
        ar: {
          __taxonomie_sondage: '',
          __designation: '',
          __ref_responsable: '',
        },
        en: {
          __taxonomie_sondage: '',
          __designation: '',
          __ref_responsable: '',
        },
      },
      responsable: 'votre référence',
      image: '',

      date_ouverture: '2022-03-01T00:00:00.000Z',
      date_cloture: '2025-05-13T00:00:00.000Z',
      nombre_participants: 3,
      etat_objet: 'active',
      nombre_questions: '',
      etat_validation: 'en cours de publication',
      question_sondage: [
        {
          _id: { $oid: '6245a78263da22654c29234a' },
          translations: {
            fr: {
              __label_question: 'Question de test 1',
              __commentaire_associe: '',
            },
            ar: { __label_question: '', __commentaire_associe: '' },
            en: { __label_question: '', __commentaire_associe: '' },
          },
          etat_objet: 'active',
          etat_validation: '',
          reponse_sondage: [
            {
              translations: {
                fr: { __valeur_choix1: 'choix1' },
                ar: { __valeur_choix1: '' },
                en: { __valeur_choix1: '' },
              },
              _id: { $oid: '6245a78263da22654c29234b' },
              etat_objet: 'active',
              etat_validation: '',
              ref_choix: '',
              ordre: '0',
              nombre_reponse: 0,
            },
            {
              translations: {
                fr: { __valeur_choix1: 'choix 2' },
                ar: { __valeur_choix1: '' },
                en: { __valeur_choix1: '' },
              },
              _id: { $oid: '6245a78263da22654c29234c' },
              etat_objet: 'active',
              etat_validation: '',
              ref_choix: '',
              ordre: '0',
              nombre_reponse: 0,
            },
            {
              translations: {
                fr: { __valeur_choix1: 'choix 3' },
                ar: { __valeur_choix1: '' },
                en: { __valeur_choix1: '' },
              },
              _id: { $oid: '6245a78263da22654c29234d' },
              etat_objet: 'active',
              etat_validation: '',
              ref_choix: '',
              ordre: '0',
              nombre_reponse: 3,
            },
          ],
        },
        {
          _id: { $oid: '6245a78263da22654c29234a' },
          translations: {
            fr: {
              __label_question: 'Question de test 1',
              __commentaire_associe: '',
            },
            ar: { __label_question: '', __commentaire_associe: '' },
            en: { __label_question: '', __commentaire_associe: '' },
          },
          etat_objet: 'active',
          etat_validation: '',
          reponse_sondage: [
            {
              translations: {
                fr: { __valeur_choix1: 'choix1' },
                ar: { __valeur_choix1: '' },
                en: { __valeur_choix1: '' },
              },
              _id: { $oid: '6245a78263da22654c29234b' },
              etat_objet: 'active',
              etat_validation: '',
              ref_choix: '',
              ordre: '0',
              nombre_reponse: 0,
            },
            {
              translations: {
                fr: { __valeur_choix1: 'choix 2' },
                ar: { __valeur_choix1: '' },
                en: { __valeur_choix1: '' },
              },
              _id: { $oid: '6245a78263da22654c29234c' },
              etat_objet: 'active',
              etat_validation: '',
              ref_choix: '',
              ordre: '0',
              nombre_reponse: 0,
            },
            {
              translations: {
                fr: { __valeur_choix1: 'choix 3' },
                ar: { __valeur_choix1: '' },
                en: { __valeur_choix1: '' },
              },
              _id: { $oid: '6245a78263da22654c29234d' },
              etat_objet: 'active',
              etat_validation: '',
              ref_choix: '',
              ordre: '0',
              nombre_reponse: 3,
            },
          ],
        },
      ],
      __v: 0,
    },
    {
      _id: { $oid: '6245a77363da22654c292349' },
      classification: [
        { translations: { fr: { __titre: 'sondage' } } },
        { translations: { fr: { __titre: 'categorie1' } } },
      ],
      translations: {
        fr: {
          __taxonomie_sondage: '',
          __designation: 'Titre Sondage',
          __ref_responsable: 'votre nom',
        },
        ar: {
          __taxonomie_sondage: '',
          __designation: '',
          __ref_responsable: '',
        },
        en: {
          __taxonomie_sondage: '',
          __designation: '',
          __ref_responsable: '',
        },
      },
      responsable: 'votre référence',
      image: '',

      date_ouverture: '2022-03-01T00:00:00.000Z',
      date_cloture: '2022-05-13T00:00:00.000Z',
      nombre_participants: 3,
      etat_objet: 'active',
      nombre_questions: '',
      etat_validation: 'en cours de publication',
      question_sondage: [
        {
          _id: { $oid: '6245a78263da22654c29234a' },
          translations: {
            fr: {
              __label_question: 'Question de test 1',
              __commentaire_associe: '',
            },
            ar: { __label_question: '', __commentaire_associe: '' },
            en: { __label_question: '', __commentaire_associe: '' },
          },
          etat_objet: 'active',
          etat_validation: '',
          reponse_sondage: [
            {
              translations: {
                fr: { __valeur_choix1: 'choix1' },
                ar: { __valeur_choix1: '' },
                en: { __valeur_choix1: '' },
              },
              _id: { $oid: '6245a78263da22654c29234b' },
              etat_objet: 'active',
              etat_validation: '',
              ref_choix: '',
              ordre: '0',
              nombre_reponse: 0,
            },
            {
              translations: {
                fr: { __valeur_choix1: 'choix 2' },
                ar: { __valeur_choix1: '' },
                en: { __valeur_choix1: '' },
              },
              _id: { $oid: '6245a78263da22654c29234c' },
              etat_objet: 'active',
              etat_validation: '',
              ref_choix: '',
              ordre: '0',
              nombre_reponse: 0,
            },
            {
              translations: {
                fr: { __valeur_choix1: 'choix 3' },
                ar: { __valeur_choix1: '' },
                en: { __valeur_choix1: '' },
              },
              _id: { $oid: '6245a78263da22654c29234d' },
              etat_objet: 'active',
              etat_validation: '',
              ref_choix: '',
              ordre: '0',
              nombre_reponse: 3,
            },
          ],
        },
      ],
      __v: 0,
    },
    {
      _id: { $oid: '6245a77363da22654c292349' },
      classification: [
        { translations: { fr: { __titre: 'sondage' } } },
        { translations: { fr: { __titre: 'categorie1' } } },
      ],
      translations: {
        fr: {
          __taxonomie_sondage: '',
          __designation: 'Titre Sondage',
          __ref_responsable: 'votre nom',
        },
        ar: {
          __taxonomie_sondage: '',
          __designation: '',
          __ref_responsable: '',
        },
        en: {
          __taxonomie_sondage: '',
          __designation: '',
          __ref_responsable: '',
        },
      },
      responsable: 'votre référence',
      image: '',

      date_ouverture: '2022-03-01T00:00:00.000Z',
      date_cloture: '2022-05-13T00:00:00.000Z',
      nombre_participants: 3,
      etat_objet: 'active',
      nombre_questions: '',
      etat_validation: 'en cours de publication',
      question_sondage: [
        {
          _id: { $oid: '6245a78263da22654c29234a' },
          translations: {
            fr: {
              __label_question: 'Question de test 1',
              __commentaire_associe: '',
            },
            ar: { __label_question: '', __commentaire_associe: '' },
            en: { __label_question: '', __commentaire_associe: '' },
          },
          etat_objet: 'active',
          etat_validation: '',
          reponse_sondage: [
            {
              translations: {
                fr: { __valeur_choix1: 'choix1' },
                ar: { __valeur_choix1: '' },
                en: { __valeur_choix1: '' },
              },
              _id: { $oid: '6245a78263da22654c29234b' },
              etat_objet: 'active',
              etat_validation: '',
              ref_choix: '',
              ordre: '0',
              nombre_reponse: 0,
            },
            {
              translations: {
                fr: { __valeur_choix1: 'choix 2' },
                ar: { __valeur_choix1: '' },
                en: { __valeur_choix1: '' },
              },
              _id: { $oid: '6245a78263da22654c29234c' },
              etat_objet: 'active',
              etat_validation: '',
              ref_choix: '',
              ordre: '0',
              nombre_reponse: 0,
            },
            {
              translations: {
                fr: { __valeur_choix1: 'choix 3' },
                ar: { __valeur_choix1: '' },
                en: { __valeur_choix1: '' },
              },
              _id: { $oid: '6245a78263da22654c29234d' },
              etat_objet: 'active',
              etat_validation: '',
              ref_choix: '',
              ordre: '0',
              nombre_reponse: 3,
            },
          ],
        },
      ],
      __v: 0,
    },
    {
      _id: { $oid: '6245a77363da22654c292349' },
      classification: [
        { translations: { fr: { __titre: 'sondage' } } },
        { translations: { fr: { __titre: 'categorie1' } } },
      ],
      translations: {
        fr: {
          __taxonomie_sondage: '',
          __designation: 'Titre Sondage',
          __ref_responsable: 'votre nom',
        },
        ar: {
          __taxonomie_sondage: '',
          __designation: '',
          __ref_responsable: '',
        },
        en: {
          __taxonomie_sondage: '',
          __designation: '',
          __ref_responsable: '',
        },
      },
      responsable: 'votre référence',
      image: '',

      date_ouverture: '2022-03-01T00:00:00.000Z',
      date_cloture: '2022-05-13T00:00:00.000Z',
      nombre_participants: 3,
      etat_objet: 'active',
      nombre_questions: '',
      etat_validation: 'en cours de publication',
      question_sondage: [
        {
          _id: { $oid: '6245a78263da22654c29234a' },
          translations: {
            fr: {
              __label_question: 'Question de test 1',
              __commentaire_associe: '',
            },
            ar: { __label_question: '', __commentaire_associe: '' },
            en: { __label_question: '', __commentaire_associe: '' },
          },
          etat_objet: 'active',
          etat_validation: '',
          reponse_sondage: [
            {
              translations: {
                fr: { __valeur_choix1: 'choix1' },
                ar: { __valeur_choix1: '' },
                en: { __valeur_choix1: '' },
              },
              _id: { $oid: '6245a78263da22654c29234b' },
              etat_objet: 'active',
              etat_validation: '',
              ref_choix: '',
              ordre: '0',
              nombre_reponse: 0,
            },
            {
              translations: {
                fr: { __valeur_choix1: 'choix 2' },
                ar: { __valeur_choix1: '' },
                en: { __valeur_choix1: '' },
              },
              _id: { $oid: '6245a78263da22654c29234c' },
              etat_objet: 'active',
              etat_validation: '',
              ref_choix: '',
              ordre: '0',
              nombre_reponse: 0,
            },
            {
              translations: {
                fr: { __valeur_choix1: 'choix 3' },
                ar: { __valeur_choix1: '' },
                en: { __valeur_choix1: '' },
              },
              _id: { $oid: '6245a78263da22654c29234d' },
              etat_objet: 'active',
              etat_validation: '',
              ref_choix: '',
              ordre: '0',
              nombre_reponse: 3,
            },
          ],
        },
      ],
      __v: 0,
    },
    {
      _id: { $oid: '6245a87198a46c682da2eb6f' },
      classification: [
        { translations: { fr: { __titre: 'sondage' } } },
        { translations: { fr: { __titre: 'categorie1' } } },
      ],
      translations: {
        fr: {
          __taxonomie_sondage: '',
          __designation: 'Titre sondage 2',
          __ref_responsable: 'nom ',
        },
        ar: {
          __taxonomie_sondage: '',
          __designation: '',
          __ref_responsable: '',
        },
        en: {
          __taxonomie_sondage: '',
          __designation: '',
          __ref_responsable: '',
        },
      },
      responsable: 'ref4444',
      image: '',

      date_ouverture: '2022-03-09T00:00:00.000Z',
      date_cloture: '2022-03-22T00:00:00.000Z',
      nombre_participants: '0',
      etat_objet: 'active',
      nombre_questions: '',
      etat_validation: 'en cours de publication',
      question_sondage: [
        {
          _id: { $oid: '6245a88198a46c682da2eb70' },
          translations: {
            fr: {
              __label_question: 'Assumenda sit facer',
              __commentaire_associe: '',
            },
            ar: { __label_question: '', __commentaire_associe: '' },
            en: { __label_question: '', __commentaire_associe: '' },
          },
          etat_objet: 'active',
          etat_validation: '',
          reponse_sondage: [
            {
              translations: {
                fr: { __valeur_choix1: '11' },
                ar: { __valeur_choix1: '' },
                en: { __valeur_choix1: '' },
              },
              _id: { $oid: '6245a88198a46c682da2eb71' },
              etat_objet: 'active',
              etat_validation: '',
              ref_choix: '',
              ordre: '0',
              nombre_reponse: '0',
            },
            {
              translations: {
                fr: { __valeur_choix1: '22' },
                ar: { __valeur_choix1: '' },
                en: { __valeur_choix1: '' },
              },
              _id: { $oid: '6245a88198a46c682da2eb72' },
              etat_objet: 'active',
              etat_validation: '',
              ref_choix: '',
              ordre: '0',
              nombre_reponse: '0',
            },
            {
              translations: {
                fr: { __valeur_choix1: '33' },
                ar: { __valeur_choix1: '' },
                en: { __valeur_choix1: '' },
              },
              _id: { $oid: '6245a88198a46c682da2eb73' },
              etat_objet: 'active',
              etat_validation: '',
              ref_choix: '',
              ordre: '0',
              nombre_reponse: '0',
            },
          ],
        },
      ],
      __v: 0,
    },
  ]

  filter() {}
  constructor(private http: HttpClient) {
    {
      this.listsondage = this.allSondages
    }
  }

  public getSondage() {
    return this.http.get<any>(`${API}/sondage`)
  }
  public getQuestionBySondage(sondage: any) {
    return this.http.get<any>(`${API}/Question_Sondages?sondage=${sondage}`)
  }
  public getChoix(question_sondage: any) {
    return this.http.get<any>(
      `${API}/Choix?question_sondage=${question_sondage}`,
    )
  }
  public edit_sondage(id: any, editedSondage: any) {
    return this.http.put<any>(`${API}/sondage/` + `${id}`, editedSondage)
  }
  public updateChoixSondage(id: any, choix: any) {
    return this.http.put<any>(`${API}/sondage/choix/${id}`, choix)
  }
  getlist() {
    return this.listsondage
  }
}
