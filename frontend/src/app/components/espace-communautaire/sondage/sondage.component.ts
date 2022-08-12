import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-sondage',
  templateUrl: './sondage.component.html',
  styleUrls: ['./sondage.component.scss'],
})
export class SondageComponent implements OnInit {
  public Sondage: any[] = []
  isValide: boolean = false
  post: boolean = false
  incre: any
  public stopReaction: Boolean = true
  i: number = 0
  j: number = 0
  sondageHistorique: any = []
  sondages: any = []
  constructor() {
    this.sondages = [
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
  }
  sondageAll: any = []
  sondageHistoriqueAll: any = []

  ngOnInit() {
    //this.sondageService.getSondage_S().subscribe((res:any) => {
    let res: any = this.sondages

    let date = new Date()
    var today = new Date().toISOString().slice(0, 10)

    // console.log('Sondage', res,today,res[0].date_cloture.slice(0, 10))
    if (res.length) {
      for (let i in res) {
        //  console.log(res[i].date_cloture,"===>",res[i].date_cloture.slice(0, 10) < today)
        if (res[i].date_cloture.slice(0, 10) < today) {
          this.sondageHistorique.push(res[i])
        } else this.Sondage.push(res[i])
        {
          this.sondageAll = this.Sondage
        }
      }
      this.sondageAll = [...this.Sondage]
      this.sondageHistoriqueAll = [...this.sondageHistorique]

      if (this.Sondage.length) this.Sondage.reverse()
      if (this.sondageHistorique.length) this.sondageHistorique.reverse()
    }
    // const sondage: any = res;
    // this.Sondage = sondage;

    //current sondage
    // console.log('Sondage', this.Sondage)
    // console.log('Sondage', this.sondageHistorique)
    // this.currentSondage = this.Sondage.pop();
    // console.log('CSondage', this.currentSondage)
    //
    // this.sondageHistorique = this.Sondage.reverse()
    //console.log('HSondage', this.sondageHistorique)
  }

  public reponse: any
  increment(id: any) {
    // this.reponse.nombre_reponse += 1;
    // //console.log(id)
    // this.sondageService.updateChoix_S(id,this.reponse).subscribe(res => {
    //   //console.log(res);
    // })
  }

  disable() {
    this.isValide = !this.isValide
    this.stopReaction = !this.stopReaction
  }
  choix: any = ''
  answers: any = []

  currentSondage: any
  choisir(currentS: any, choix: any, i: any, j: any) {
    this.choix = choix
    this.i = i
    this.j = j
    this.currentSondage = this.Sondage.find((s) => s._id == currentS._id)
    this.currentSondage.question_sondage[this.i].reponse_sondage[
      this.j
    ].nombre_reponse += 1

    this.answers[i] = this.currentSondage.question_sondage[i].reponse_sondage[
      j
    ]?._id
  }
  enregistrer(currentS: any) {}
  public mobileSidebar: boolean = false
  showFilter: boolean = false
  filterAvancee = false

  filter_value: string = ''
  filter_value_date_debut: string = '0'
  filter_value_date_fin: string = ''
  emptyResult = false
  noResult = true
  searchMode = false
}
