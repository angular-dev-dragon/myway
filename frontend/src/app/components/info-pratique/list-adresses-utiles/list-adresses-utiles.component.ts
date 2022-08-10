import { Component, OnInit } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-list-adresses-utiles',
  templateUrl: './list-adresses-utiles.component.html',
  styleUrls: ['./list-adresses-utiles.component.scss'],
})
export class ListAdressesUtilesComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}
  adressesUtiles: any = [
    {
      _id: { $oid: '623223e87fde65e9e542c97a' },
      commentaires_internes: [],
      translations: {
        fr: {
          __designation: 'Non qui a vel ex id',
          __descriptif:
            'Depuis les années 1950 aux États-Unis et à partir des années 1990 dans le secteur de l’aide internationale, le terme de « plaidoyer »',
          __adresse: 'Porro voluptatem Re',
          __horaire: 'Eaque proident tota',
        },
      },
      ville: '61a0a8df76b9a30b88c0e542',
      image:
        'http://localhost:3600/uploads/images/adresse_utile/image-1647505398966.jpeg',
      logo:
        'http://localhost:3600/uploads/images/adresse_utile/logo-1647505398967.jpeg',
      code_postal: 'Dignissimos tempor r',
      map_link: 'Doloribus repellendu',
      telephone: 'Odio inventore volup',
      email: 'johuxesaba@mailinator.com',
      siteweb: 'https://www.zypocuxasytuqov.in',
      fax: '+1 (295) 832-5915',
      etat_validation: 'en cours de publication',
      etat_objet: 'active',
      pays: {
        _id: { $oid: '619fb2f366f08127d0f15a60' },
        translations: {
          fr: { __titre: 'Maroc' },
          en: { __titre: '' },
          ar: { __titre: '' },
        },
        children: [
          {
            children: [],
            _id: { $oid: '619fb2f366f08127d0f15a61' },
            translations: {
              fr: { __titre: 'Tanger' },
              en: { __titre: '' },
              ar: { __titre: '' },
            },
            ordre: 0,
          },
          {
            children: [],
            _id: { $oid: '619fb2f366f08127d0f15a62' },
            translations: {
              fr: { __titre: 'Rabat' },
              en: { __titre: '' },
              ar: { __titre: '' },
            },
            ordre: 0,
          },
          {
            children: [],
            _id: { $oid: '619fb2f366f08127d0f15a63' },
            translations: {
              fr: { __titre: 'Casa' },
              en: { __titre: '' },
              ar: { __titre: '' },
            },
            ordre: 0,
          },
          {
            children: [],
            _id: { $oid: '61a0a8df76b9a30b88c0e542' },
            translations: {
              fr: { __titre: 'BM' },
              ar: { __titre: '' },
              en: { __titre: '' },
            },
            ordre: 0,
            etat_validation: '',
            etat_objet: '',
          },
          {
            children: [],
            _id: { $oid: '61a0aa7476b9a30b88c0e551' },
            translations: {
              fr: { __titre: 'Tétouane' },
              ar: { __titre: '' },
              en: { __titre: '' },
            },
            ordre: 0,
            etat_validation: '',
            etat_objet: '',
          },
          {
            children: [],
            _id: { $oid: '61a0ab5376b9a30b88c0e561' },
            translations: {
              fr: { __titre: 'Marakech' },
              ar: { __titre: '' },
              en: { __titre: '' },
            },
            ordre: 0,
            etat_validation: '',
            etat_objet: '',
          },
          {
            children: [],
            _id: { $oid: '61a0abf976b9a30b88c0e572' },
            translations: {
              fr: { __titre: 'Taza' },
              ar: { __titre: '' },
              en: { __titre: '' },
            },
            ordre: 0,
            etat_validation: '',
            etat_objet: '',
          },
        ],
        ordre: 0,
      },
      latitude: '34.02085319689207',
      longitude: '-6.8388298',
    },
    {
      _id: { $oid: '623223e87fde65e9e542c97a' },
      commentaires_internes: [],
      translations: {
        fr: {
          __designation: 'Non qui a vel ex id',
          __descriptif:
            'Depuis les années 1950 aux États-Unis et à partir des années 1990 dans le secteur de l’aide internationale, le terme de « plaidoyer »',
          __adresse: 'Porro voluptatem Re',
          __horaire: 'Eaque proident tota',
        },
      },
      ville: '61a0a8df76b9a30b88c0e542',
      image:
        'http://localhost:3600/uploads/images/adresse_utile/image-1647505398966.jpeg',
      logo:
        'http://localhost:3600/uploads/images/adresse_utile/logo-1647505398967.jpeg',
      code_postal: 'Dignissimos tempor r',
      map_link: 'Doloribus repellendu',
      telephone: 'Odio inventore volup',
      email: 'johuxesaba@mailinator.com',
      siteweb: 'https://www.zypocuxasytuqov.in',
      fax: '+1 (295) 832-5915',
      etat_validation: 'en cours de publication',
      etat_objet: 'active',
      pays: {
        _id: { $oid: '619fb2f366f08127d0f15a60' },
        translations: {
          fr: { __titre: 'Maroc' },
          en: { __titre: '' },
          ar: { __titre: '' },
        },
        children: [
          {
            children: [],
            _id: { $oid: '619fb2f366f08127d0f15a61' },
            translations: {
              fr: { __titre: 'Tanger' },
              en: { __titre: '' },
              ar: { __titre: '' },
            },
            ordre: 0,
          },
          {
            children: [],
            _id: { $oid: '619fb2f366f08127d0f15a62' },
            translations: {
              fr: { __titre: 'Rabat' },
              en: { __titre: '' },
              ar: { __titre: '' },
            },
            ordre: 0,
          },
          {
            children: [],
            _id: { $oid: '619fb2f366f08127d0f15a63' },
            translations: {
              fr: { __titre: 'Casa' },
              en: { __titre: '' },
              ar: { __titre: '' },
            },
            ordre: 0,
          },
          {
            children: [],
            _id: { $oid: '61a0a8df76b9a30b88c0e542' },
            translations: {
              fr: { __titre: 'BM' },
              ar: { __titre: '' },
              en: { __titre: '' },
            },
            ordre: 0,
            etat_validation: '',
            etat_objet: '',
          },
          {
            children: [],
            _id: { $oid: '61a0aa7476b9a30b88c0e551' },
            translations: {
              fr: { __titre: 'Tétouane' },
              ar: { __titre: '' },
              en: { __titre: '' },
            },
            ordre: 0,
            etat_validation: '',
            etat_objet: '',
          },
          {
            children: [],
            _id: { $oid: '61a0ab5376b9a30b88c0e561' },
            translations: {
              fr: { __titre: 'Marakech' },
              ar: { __titre: '' },
              en: { __titre: '' },
            },
            ordre: 0,
            etat_validation: '',
            etat_objet: '',
          },
          {
            children: [],
            _id: { $oid: '61a0abf976b9a30b88c0e572' },
            translations: {
              fr: { __titre: 'Taza' },
              ar: { __titre: '' },
              en: { __titre: '' },
            },
            ordre: 0,
            etat_validation: '',
            etat_objet: '',
          },
        ],
        ordre: 0,
      },
      latitude: '34.02085319689207',
      longitude: '-6.8388298',
    },
    {
      _id: { $oid: '623223e87fde65e9e542c97a' },
      commentaires_internes: [],
      translations: {
        fr: {
          __designation: 'Non qui a vel ex id',
          __descriptif:
            'Depuis les années 1950 aux États-Unis et à partir des années 1990 dans le secteur de l’aide internationale, le terme de « plaidoyer »',
          __adresse: 'Porro voluptatem Re',
          __horaire: 'Eaque proident tota',
        },
      },
      ville: '61a0a8df76b9a30b88c0e542',
      image:
        'http://localhost:3600/uploads/images/adresse_utile/image-1647505398966.jpeg',
      logo:
        'http://localhost:3600/uploads/images/adresse_utile/logo-1647505398967.jpeg',
      code_postal: 'Dignissimos tempor r',
      map_link: 'Doloribus repellendu',
      telephone: 'Odio inventore volup',
      email: 'johuxesaba@mailinator.com',
      siteweb: 'https://www.zypocuxasytuqov.in',
      fax: '+1 (295) 832-5915',
      etat_validation: 'en cours de publication',
      etat_objet: 'active',
      pays: {
        _id: { $oid: '619fb2f366f08127d0f15a60' },
        translations: {
          fr: { __titre: 'Maroc' },
          en: { __titre: '' },
          ar: { __titre: '' },
        },
        children: [
          {
            children: [],
            _id: { $oid: '619fb2f366f08127d0f15a61' },
            translations: {
              fr: { __titre: 'Tanger' },
              en: { __titre: '' },
              ar: { __titre: '' },
            },
            ordre: 0,
          },
          {
            children: [],
            _id: { $oid: '619fb2f366f08127d0f15a62' },
            translations: {
              fr: { __titre: 'Rabat' },
              en: { __titre: '' },
              ar: { __titre: '' },
            },
            ordre: 0,
          },
          {
            children: [],
            _id: { $oid: '619fb2f366f08127d0f15a63' },
            translations: {
              fr: { __titre: 'Casa' },
              en: { __titre: '' },
              ar: { __titre: '' },
            },
            ordre: 0,
          },
          {
            children: [],
            _id: { $oid: '61a0a8df76b9a30b88c0e542' },
            translations: {
              fr: { __titre: 'BM' },
              ar: { __titre: '' },
              en: { __titre: '' },
            },
            ordre: 0,
            etat_validation: '',
            etat_objet: '',
          },
          {
            children: [],
            _id: { $oid: '61a0aa7476b9a30b88c0e551' },
            translations: {
              fr: { __titre: 'Tétouane' },
              ar: { __titre: '' },
              en: { __titre: '' },
            },
            ordre: 0,
            etat_validation: '',
            etat_objet: '',
          },
          {
            children: [],
            _id: { $oid: '61a0ab5376b9a30b88c0e561' },
            translations: {
              fr: { __titre: 'Marakech' },
              ar: { __titre: '' },
              en: { __titre: '' },
            },
            ordre: 0,
            etat_validation: '',
            etat_objet: '',
          },
          {
            children: [],
            _id: { $oid: '61a0abf976b9a30b88c0e572' },
            translations: {
              fr: { __titre: 'Taza' },
              ar: { __titre: '' },
              en: { __titre: '' },
            },
            ordre: 0,
            etat_validation: '',
            etat_objet: '',
          },
        ],
        ordre: 0,
      },
      latitude: '34.02085319689207',
      longitude: '-6.8388298',
    },
    {
      _id: { $oid: '623223e87fde65e9e542c97a' },
      commentaires_internes: [],
      translations: {
        fr: {
          __designation: 'Non qui a vel ex id',
          __descriptif:
            'Depuis les années 1950 aux États-Unis et à partir des années 1990 dans le secteur de l’aide internationale, le terme de « plaidoyer »',
          __adresse: 'Porro voluptatem Re',
          __horaire: 'Eaque proident tota',
        },
      },
      ville: '61a0a8df76b9a30b88c0e542',
      image:
        'http://localhost:3600/uploads/images/adresse_utile/image-1647505398966.jpeg',
      logo:
        'http://localhost:3600/uploads/images/adresse_utile/logo-1647505398967.jpeg',
      code_postal: 'Dignissimos tempor r',
      map_link: 'Doloribus repellendu',
      telephone: 'Odio inventore volup',
      email: 'johuxesaba@mailinator.com',
      siteweb: 'https://www.zypocuxasytuqov.in',
      fax: '+1 (295) 832-5915',
      etat_validation: 'en cours de publication',
      etat_objet: 'active',
      pays: {
        _id: { $oid: '619fb2f366f08127d0f15a60' },
        translations: {
          fr: { __titre: 'Maroc' },
          en: { __titre: '' },
          ar: { __titre: '' },
        },
        children: [
          {
            children: [],
            _id: { $oid: '619fb2f366f08127d0f15a61' },
            translations: {
              fr: { __titre: 'Tanger' },
              en: { __titre: '' },
              ar: { __titre: '' },
            },
            ordre: 0,
          },
          {
            children: [],
            _id: { $oid: '619fb2f366f08127d0f15a62' },
            translations: {
              fr: { __titre: 'Rabat' },
              en: { __titre: '' },
              ar: { __titre: '' },
            },
            ordre: 0,
          },
          {
            children: [],
            _id: { $oid: '619fb2f366f08127d0f15a63' },
            translations: {
              fr: { __titre: 'Casa' },
              en: { __titre: '' },
              ar: { __titre: '' },
            },
            ordre: 0,
          },
          {
            children: [],
            _id: { $oid: '61a0a8df76b9a30b88c0e542' },
            translations: {
              fr: { __titre: 'BM' },
              ar: { __titre: '' },
              en: { __titre: '' },
            },
            ordre: 0,
            etat_validation: '',
            etat_objet: '',
          },
          {
            children: [],
            _id: { $oid: '61a0aa7476b9a30b88c0e551' },
            translations: {
              fr: { __titre: 'Tétouane' },
              ar: { __titre: '' },
              en: { __titre: '' },
            },
            ordre: 0,
            etat_validation: '',
            etat_objet: '',
          },
          {
            children: [],
            _id: { $oid: '61a0ab5376b9a30b88c0e561' },
            translations: {
              fr: { __titre: 'Marakech' },
              ar: { __titre: '' },
              en: { __titre: '' },
            },
            ordre: 0,
            etat_validation: '',
            etat_objet: '',
          },
          {
            children: [],
            _id: { $oid: '61a0abf976b9a30b88c0e572' },
            translations: {
              fr: { __titre: 'Taza' },
              ar: { __titre: '' },
              en: { __titre: '' },
            },
            ordre: 0,
            etat_validation: '',
            etat_objet: '',
          },
        ],
        ordre: 0,
      },
      latitude: '34.02085319689207',
      longitude: '-6.8388298',
    },
    {
      _id: { $oid: '623223e87fde65e9e542c97a' },
      commentaires_internes: [],
      translations: {
        fr: {
          __designation: 'Non qui a vel ex id',
          __descriptif:
            'Depuis les années 1950 aux États-Unis et à partir des années 1990 dans le secteur de l’aide internationale, le terme de « plaidoyer »',
          __adresse: 'Porro voluptatem Re',
          __horaire: 'Eaque proident tota',
        },
      },
      ville: '61a0a8df76b9a30b88c0e542',
      image:
        'http://localhost:3600/uploads/images/adresse_utile/image-1647505398966.jpeg',
      logo:
        'http://localhost:3600/uploads/images/adresse_utile/logo-1647505398967.jpeg',
      code_postal: 'Dignissimos tempor r',
      map_link: 'Doloribus repellendu',
      telephone: 'Odio inventore volup',
      email: 'johuxesaba@mailinator.com',
      siteweb: 'https://www.zypocuxasytuqov.in',
      fax: '+1 (295) 832-5915',
      etat_validation: 'en cours de publication',
      etat_objet: 'active',
      pays: {
        _id: { $oid: '619fb2f366f08127d0f15a60' },
        translations: {
          fr: { __titre: 'Maroc' },
          en: { __titre: '' },
          ar: { __titre: '' },
        },
        children: [
          {
            children: [],
            _id: { $oid: '619fb2f366f08127d0f15a61' },
            translations: {
              fr: { __titre: 'Tanger' },
              en: { __titre: '' },
              ar: { __titre: '' },
            },
            ordre: 0,
          },
          {
            children: [],
            _id: { $oid: '619fb2f366f08127d0f15a62' },
            translations: {
              fr: { __titre: 'Rabat' },
              en: { __titre: '' },
              ar: { __titre: '' },
            },
            ordre: 0,
          },
          {
            children: [],
            _id: { $oid: '619fb2f366f08127d0f15a63' },
            translations: {
              fr: { __titre: 'Casa' },
              en: { __titre: '' },
              ar: { __titre: '' },
            },
            ordre: 0,
          },
          {
            children: [],
            _id: { $oid: '61a0a8df76b9a30b88c0e542' },
            translations: {
              fr: { __titre: 'BM' },
              ar: { __titre: '' },
              en: { __titre: '' },
            },
            ordre: 0,
            etat_validation: '',
            etat_objet: '',
          },
          {
            children: [],
            _id: { $oid: '61a0aa7476b9a30b88c0e551' },
            translations: {
              fr: { __titre: 'Tétouane' },
              ar: { __titre: '' },
              en: { __titre: '' },
            },
            ordre: 0,
            etat_validation: '',
            etat_objet: '',
          },
          {
            children: [],
            _id: { $oid: '61a0ab5376b9a30b88c0e561' },
            translations: {
              fr: { __titre: 'Marakech' },
              ar: { __titre: '' },
              en: { __titre: '' },
            },
            ordre: 0,
            etat_validation: '',
            etat_objet: '',
          },
          {
            children: [],
            _id: { $oid: '61a0abf976b9a30b88c0e572' },
            translations: {
              fr: { __titre: 'Taza' },
              ar: { __titre: '' },
              en: { __titre: '' },
            },
            ordre: 0,
            etat_validation: '',
            etat_objet: '',
          },
        ],
        ordre: 0,
      },
      latitude: '34.02085319689207',
      longitude: '-6.8388298',
    },
  ]
  adresse: any = []
  _open(content: any, adr: any) {
    this.adresse = adr
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl' })
      .result.then(
        (result) => {},
        (reason) => {},
      )
  }
}
