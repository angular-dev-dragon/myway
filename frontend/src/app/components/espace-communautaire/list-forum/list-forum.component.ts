import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-list-forum',
  templateUrl: './list-forum.component.html',
  styleUrls: ['./list-forum.component.scss'],
})
export class ListForumComponent implements OnInit {
  forums: any = []
  constructor() {
    this.forums = [
      {
        _id: { $oid: '624476758b2b471608e6eaee' },
        commentaire_interne: [],

        designation: 'Désignation Forum Forum',
        descriptif:
          'Description du Forum Désignation Forum Désignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum Forum',
        responsable: 'Nom du résponsable',
        taxonomie_forum: '',

        ref_responsable: 'Référence résponsable',
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
            responsable_theme: 'Nom du résponsable',

            nbre_participants: 0,
            ref_responsable_theme: 'Réference résponsable',
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
      },
      {
        _id: { $oid: '624476758b2b471608e6eaee' },
        commentaire_interne: [],

        designation: 'Désignation Forum Forum',
        descriptif:
          'Description du Forum Désignation Forum Désignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum Forum',
        responsable: 'Nom du résponsable',
        taxonomie_forum: '',

        ref_responsable: 'Référence résponsable',
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
            responsable_theme: 'Nom du résponsable',

            nbre_participants: 0,
            ref_responsable_theme: 'Réference résponsable',
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
      },
      {
        _id: { $oid: '624476758b2b471608e6eaee' },
        commentaire_interne: [],

        designation: 'Désignation Forum Forum',
        descriptif:
          'Description du Forum Désignation Forum Désignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum Forum',
        responsable: 'Nom du résponsable',
        taxonomie_forum: '',

        ref_responsable: 'Référence résponsable',
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
            responsable_theme: 'Nom du résponsable',

            nbre_participants: 0,
            ref_responsable_theme: 'Réference résponsable',
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
      },
      {
        _id: { $oid: '624476758b2b471608e6eaee' },
        commentaire_interne: [],

        designation: 'Désignation Forum Forum',
        descriptif:
          'Description du Forum Désignation Forum Désignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum ForumDésignation Forum Forum',
        responsable: 'Nom du résponsable',
        taxonomie_forum: '',

        ref_responsable: 'Référence résponsable',
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
            responsable_theme: 'Nom du résponsable',

            nbre_participants: 0,
            ref_responsable_theme: 'Réference résponsable',
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
      },
    ]
  }
  nbrTheme: number = 0
  nbrParticipants: number = 0
  nbrEchanges: number = 0
  ngOnInit(): void {
    this.forums.map((forum: any) => {
      this.nbrParticipants = 0
      this.nbrEchanges = 0
      forum.theme.map((theme: any) => {
        this.nbrParticipants = this.nbrParticipants + theme.nbre_participants
        this.nbrEchanges = this.nbrEchanges + theme.nbre_echanges
      })
      console.log(forum.theme.length)

      forum.nbrParticipants = this.nbrParticipants
      forum.nbrEchanges = this.nbrEchanges
      forum.nbrTheme = forum.theme.length
    })
  }
}
