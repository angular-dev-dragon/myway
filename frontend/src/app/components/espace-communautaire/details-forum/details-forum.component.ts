import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-details-forum',
  templateUrl: './details-forum.component.html',
  styleUrls: ['./details-forum.component.scss'],
})
export class DetailsForumComponent implements OnInit {
  forumCloturer: any = true
  date: any
  //datePipe: DatePipe = new DatePipe('en-US')
  nowDate = new Date().getTime()
  diffDate: any = 0
  constructor() {}

  forum: any = {
    _id: { $oid: '624476758b2b471608e6eaee' },
    commentaire_interne: [],

    designation: 'Désignation Forum Forum',
    descriptif:
      'Description du Forum Désignation Forum Désignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum Forum',
    responsable: 'Nom réspo',
    taxonomie_forum: '',

    ref_responsable: 'Réf00125',
    date_ouverture: '2022-03-07',
    date_cloture: '2022-03-31',
    etat_validation: 'en cours de publication',
    etat_objet: 'active',
    image_forum:
      'http://localhost:3600/uploads/images/forum/image_forum-1647861519425.jpg',
    __v: 0,
    theme: [
      {
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
      },
      {
        commentaire_interne: [],
        _id: { $oid: '624476708b2b471608e6eaed' },
        designation_theme: 'Désignation Theme 2',
        descriptif_theme:
          'Description Thème Désignation Theme 2 Description Thème Désignation Theme 2 Description Thème Désignation Theme 2 Description Thème Désignation Theme 2 Description Thème Désignation Theme 2 Description Thème Désignation Theme 2 Description Thème Désignation Theme 2 Description Thème Désignation Theme 2 ',
        responsable_theme: 'Nom réspo',

        nbre_participants: 0,
        ref_responsable_theme: 'ref001',
        nbre_theme: '0',
        nbre_echanges: 0,
        date_ouverture: '2021-03-01',
        date_cloture: '2022-10-29',
        etat_validation: 'valide',
        etat_objet: 'active',
        image_theme:
          'http://localhost:3600/uploads/images/forum/image_theme-1648653936565.jpg',
      },
    ],
  }
  ngOnInit(): void {
    //   this.date = this.datePipe.transform(this.nowDate, 'yyyy-MM-dd')
    //   let dateFinForum = this.forum.date_cloture
    //   this.diffDate = Date.parse(dateFinForum) - Date.parse(this.date)
    //   this.diffDate >= 0
    //     ? (this.forumCloturer = false)
    //     : (this.forumCloturer = true)
  }
}
