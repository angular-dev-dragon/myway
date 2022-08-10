import { ViewportScroller } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-list-liens-utiles',
  templateUrl: './list-liens-utiles.component.html',
  styleUrls: ['./list-liens-utiles.component.scss'],
})
export class ListLiensUtilesComponent implements OnInit {
  constructor(private modalService: NgbModal) {}
  title = ''
  detailLien: any

  ngOnInit() {}
  lienUtilPost: any
  _open(content: any, lienUtile: any) {
    this.lienUtilPost = lienUtile

    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic-title',
        size: 'lg',
        centered: true,
      })
      .result.then(
        (result) => {},
        (reason) => {},
      )
  }
  lienUtiles: any = [
    {
      commentaires_internes: [],
      translations: {
        fr: {
          __designation: 'Enim velit molestias Désignation',
          __descriptif:
            'Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni ',
          __services: [
            'Lorem Ips   opositionum dolor sit amet, consectetur adipiscing',
            'Lorem Ips opositionum dolor sit amet, consectetur',
            'Etiam dolor sit amet, consectetur adipiscing',
            'Etiam dolor sit amet, consectetur adipiscing',
          ],
        },
      },
      valeur_lien: 'www.google.com/searchnt',
      etat_validation: 'en cours de publication',
      etat_objet: 'active',
      image:
        'http://localhost:3600/uploads/images/lien_utile/image-1647446003251.jpg',
    },
    {
      commentaires_internes: [],
      translations: {
        fr: {
          __designation: 'Enim velit molestias Désignation',
          __descriptif:
            'Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni ',
          __services: [],
        },
      },
      valeur_lien: 'www.google.com/searchnt',
      etat_validation: 'en cours de publication',
      etat_objet: 'active',
      image:
        'http://localhost:3600/uploads/images/lien_utile/image-1647446003251.jpg',
    },
    {
      commentaires_internes: [],
      translations: {
        fr: {
          __designation: 'Enim velit molestias Désignation',
          __descriptif:
            'Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni ',
          __services: [],
        },
      },
      valeur_lien: 'www.google.com/searchnt',
      etat_validation: 'en cours de publication',
      etat_objet: 'active',
      image:
        'http://localhost:3600/uploads/images/lien_utile/image-1647446003251.jpg',
    },
    {
      commentaires_internes: [],
      translations: {
        fr: {
          __designation: 'Enim velit molestias Désignation',
          __descriptif:
            'Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni ',
          __services: [],
        },
      },
      valeur_lien: 'www.google.com/searchnt',
      etat_validation: 'en cours de publication',
      etat_objet: 'active',
      image:
        'http://localhost:3600/uploads/images/lien_utile/image-1647446003251.jpg',
    },
    {
      commentaires_internes: [],
      translations: {
        fr: {
          __designation: 'Enim velit molestias Désignation',
          __descriptif:
            'Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni ',
          __services: [],
        },
      },
      valeur_lien: 'www.google.com/searchnt',
      etat_validation: 'en cours de publication',
      etat_objet: 'active',
      image:
        'http://localhost:3600/uploads/images/lien_utile/image-1647446003251.jpg',
    },
  ]
}
