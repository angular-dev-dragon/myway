import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class EvenementService {
  constructor() {
    this.listEvents = this.allEvents;
  }
  listEvents: any = [];
  ngOnInit(): void {}
  allEvents: any = [
    {
      image: 'assets/images/',
      titre: 'Evenement Test 1',
      dateDebut: '2022-07-02',
      heureDebut: '10:00',
      dateFin: '2022-10-20',
      heureFin: '15:30',
      TypeEvenement: 'Presentiel',
      organisateur: 'Test Organisateur',
    },

    {
      image:
        'https://www.sqli.com/sites/default/files/styles/xs_thumbnail_teaser/public/2021-12/SQLI-marketing_2021_Bridgestone-Square.jpg?h=cd2a7045&itok=k4P1Rjtd',

      titre: 'Evenement Test 1',
      dateDebut: '2022-08-10',
      heureDebut: '10:00',
      dateFin: '2022-12-15',
      heureFin: '15:30',
      TypeEvenement: 'En Ligne',
      organisateur: 'Test Organisateur',
    },
    {
      image:
        'https://www.sqli.com/sites/default/files/styles/xs_thumbnail_teaser/public/2021-12/lausanne-tourism-teaser-image.jpg?h=1e66e246&itok=oIdMhXB3',
      titre: 'Promoting Lausanne’s Tourism and Development',

      dateDebut: '2022-05-07',
      heureDebut: '12:00',
      dateFin: '2022-08-15',
      heureFin: '15:30',
      TypeEvenement: 'En Ligne',
      organisateur: 'Test Organisateur',
    },
    // {
    //   titre: "Titre de l'article",
    //   sousTitre: "Sous titre de l'article",
    //   resume: "Titre de l'article",
    //   etiquette: 'Tag',
    //   motsCles: ['motCle', 'motCle2'],
    // },
    // {
    //   titre: 'Seasalt & SQLI make a perfect fit for digital fashion',
    //   sousTitre: "Sous titre de l'article",
    //   resume: "Titre de l'article",
    //   etiquette: 'Tag',
    //   motsCles: ['motCle', 'motCle2'],
    //   image:
    //     'https://www.sqli.com/sites/default/files/styles/xs_thumbnail_teaser/public/2021-12/SQLI-marketing_2021_Bridgestone-Square.jpg?h=cd2a7045&itok=k4P1Rjtd',
    // },
    // {
    //   titre: 'Promoting Lausanne’s Tourism and Development',
    //   sousTitre: "Sous titre de l'article",
    //   resume: "Titre de l'article",
    //   etiquette: 'Tag',
    //   motsCles: ['motCle', 'motCle2'],
    //   image:
    //     'https://www.sqli.com/sites/default/files/styles/xs_thumbnail_teaser/public/2021-12/lausanne-tourism-teaser-image.jpg?h=1e66e246&itok=oIdMhXB3',
    // },
    // {
    //   titre: "Titre de l'article",
    //   sousTitre: "Sous titre de l'article",
    //   resume: "Titre de l'article",
    //   etiquette: 'Tag',
    //   motsCles: ['motCle', 'motCle2'],
    // },
  ];

  detailsEvent: any = {
    image:
      'https://www.corpo-events.fr/wp-content/uploads/2017/10/organiser-son-%C3%A9v%C3%A9nement.jpg',
    titre: 'Evenement Test 1',

    TypeEvenement: 'Presentiel',
    organisateur: 'Test Organisateur',
    _id: '622b2f713ffa4e31e920a0a8',
    commentaire_interne: [],
    translations: {
      fr: {
        __categorie: '',
        __ref_evenement: 'ref0215451574',
        __presentiel: '61efcf62e1d62a26340922e6',
        __designation: 'Evenement Test 1',
        __description:
          'Description debat Description debat Description debat Description debat Description debat Description debat Description debat Description debat Description debat Description debat Description debat Description debat Description debat Description debat ',
        __programme: '1- Salutation\n2- Description du debat\n3-Finale',
        __coordonnees_geog_lieux_event: '15 rue moraye Tanger',
        __coordonnees_numeriques_associees: '063322114455',
        __organisateurs_nom_description_coord: "Hicham's Company",
        __personnes_a_contacter_nom_prenom_fonction_tel_email:
          'lofegepi@mailinator.com',
        __indication_particuliere: 'Indication Particuliére',
      },
    },
    sur_invitation_seulement: '',
    nbre_max_place_assises: '50',
    nbre_max_participants_en_ligne: '20',
    systeme_informatique_utilise_si_en_ligne: '',
    lien_pour_inscription: 'www.lien-inscription.com',
    lien_pour_participer: 'www.lien-participation.com',
    lien_pour_suivre_en_direct: 'www.lien-live.com',
    nbre_reels_participants: '30',
    nbre_reel_participants_en_ligne: '10',
    etat_objet: 'active',
    etat_validation: 'en cours de publication',
    class: 'debate',
    date_debut: '2021-12-12',
    date_fin: '2022-08-19',
    heureFin: '15:30',
    heureDebut: '10:00',

    heure_debut: null,
    acteurs_event: [
      {
        _id: { $oid: '622ccfa06926682fc1175b76' },
        translations: {
          fr: {
            __nom: 'Est nihil aut exerci',
            __prenom: 'Voluptatum qui venia',
            __fonction: 'Molestiae non non de',
            __role: 'Voluptatum id vel sa',
            __presentation: 'Nostrum sit rem veri',
          },
          ar: {
            __nom: '',
            __prenom: '',
            __fonction: '',
            __role: '',
            __presentation: '',
          },
          en: {
            __nom: '',
            __prenom: '',
            __fonction: '',
            __role: '',
            __presentation: '',
          },
        },
        etat_objet: 'active',
        etat_validation: '',
        image:
          'http://localhost:3600/uploads/images/evenement/image-1647103904804.png',
      },
    ],
    type_event: {
      _id: '601e7810e6a8251908c00616',
      translations: { fr: { __titre: 'Débat' } },
    },
  };

  filter(typeEvent: any, dateDebut: any, dateFin: any) {
    this.listEvents = this.allEvents;

    if (dateDebut != '') {
      this.listEvents = this.listEvents.filter((event: any) => {
        return event.dateDebut > dateDebut ? -1 : 1;
      });
    } else if (dateFin != '') {
      this.listEvents = this.listEvents.filter((event: any) => {
        return event.dateFin < dateFin ? -1 : 1;
      });
    }

    this.checkboxFiltre(typeEvent, 'TypeEvenement');
  }

  checkboxFiltre(CheckboxList: any, label: any) {
    let newList2;
    let newList3: any = this.listEvents;
    let isFirstTime: Boolean = true;
    CheckboxList.map((filtre: any) => {
      if (filtre.nativeElement.checked) {
        if (isFirstTime == true) {
          isFirstTime = false;
          newList3 = [];
        }

        newList2 = this.listEvents;
        newList2 = newList2.filter((offre: any) => {
          return offre[label] == filtre.nativeElement.value;
        });

        newList2.map((list: any) => {
          newList3.push(list);
        });
      }
    });
    this.listEvents = newList3;
  }

  getAllInfo() {
    return this.allEvents;
  }
}
