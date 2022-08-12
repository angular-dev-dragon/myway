import { DatePipe } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-details-theme',
  templateUrl: './details-theme.component.html',
  styleUrls: ['./details-theme.component.scss'],
})
export class DetailsThemeComponent implements OnInit {
  constructor(public modalService: NgbModal) {
    this.participation = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      nom: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-z A-Z \u0600-\u06FF]+$'),
      ]),
      titre: new FormControl(''),
      indicateur: new FormControl(''),
    })
  }
  public participation: FormGroup

  date: any
  datePipe: DatePipe = new DatePipe('en-US')
  nowDate = new Date().getTime()
  diffDate: any = 0
  disableBtn: any = true
  ngOnInit(): void {
    this.date = this.datePipe.transform(this.nowDate, 'yyyy-MM-dd')
    let dateFinTheme = this.theme.date_cloture

    this.diffDate = Date.parse(dateFinTheme) - Date.parse(this.date)
    this.diffDate >= 0 ? (this.disableBtn = false) : (this.disableBtn = true)
    console.log(
      '🚀 ~ file: details-forum.component.ts ~ line 142 ~ DetailsForumComponent ~ this.formSevice.getTheme_By_Id ~ this.diffDate',
      this.disableBtn,
    )
  }
  theme: any = {
    commentaire_interne: [],

    designation_theme: 'Désignation Theme',
    descriptif_theme:
      'Description Thème Description Thème Description ThèmeDescription Thème Description Thème Description Thème Description Thème Description Thème Description Thème',
    responsable_theme: 'Nom  résponsable theme',

    nbre_participants: 0,
    ref_responsable_theme: 'Référence résponsable theme',
    nbre_theme: '0',
    nbre_echanges: 0,
    date_ouverture: '2022-03-08',
    date_cloture: '2022-03-30',
    etat_validation: 'valide',
    etat_objet: 'active',
    image_theme:
      'http://localhost:3600/uploads/images/forum/image_theme-1647861571820.jpg',
  }

  public sendParticipation() {
    if (this.participation.valid) {
      // let content = {
      //   translations: {
      //     [this.embryoService.lang]: {
      //       __titre_Participation: this.participation.value.titre,
      //       __nom_participant: this.participation.value.nom,
      //       __Indicateur: this.participation.value.indicateur,
      //       __message_Participation: this.participation.value.message,
      //     },
      //   },
      //   id_theme: this.theme._id,
      //   etat_objet: 'active',
      //   etat_validation: 'en cours de creation',
      //   email_participant: this.participation.value.email,
      //   date_Heure_Participation: new Date(),
      // }
      // this.formSevice.post_participation(content).subscribe((data) => {
      //   this.participations_theme.push(data.doc)
      //   if (this.listMail.indexOf(data.doc.email_participant) == -1)
      //     ++this.theme.nbre_participants
      //   ++this.theme.nbre_echanges
      // })
      this.participation.reset()
    } else {
      this.participation.markAllAsTouched()
    }
  }

  open(content: any) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    })
  }
  incrementerPartage() {}
  participations_theme: any[] = []

  forum = {
    _id: undefined,
    translations: {
      fr: {
        __designation: '',
        __descriptif: '',
        __responsable: '',
        __taxonomie_forum: '',
      },
      ar: {
        __designation: '',
        __descriptif: '',
        __responsable: '',
        __taxonomie_forum: '',
      },

      en: {
        __designation: '',
        __descriptif: '',
        __responsable: '',
        __taxonomie_forum: '',
      },
    },
    nbre_membres_actifs: '',
    nbre_global_membres: '',
    nbre_theme: '0',
    nbre_echanges: '0',
    ref_responsable: '',
    image_forum: '',
    date_ouverture: new Date(),
    date_cloture: new Date(),
    commentaires_internes: [],
    etat_validation: '',
    etat_objet: '',
    theme: [],
  }
}
