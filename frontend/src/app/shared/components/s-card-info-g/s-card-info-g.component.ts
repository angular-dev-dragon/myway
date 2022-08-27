
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 's-card-info-g',
  templateUrl: './s-card-info-g.component.html',
  styleUrls: ['./s-card-info-g.component.scss'],
})
export class SCardInfoGComponent implements OnInit {
  tabView = 5;
  items!: MenuItem[];

  home!: MenuItem;
  itemss!: MenuItem[];

  // #region filer

  collapsed = false;
  showSidebar: boolean = false;
  epingledSidebar: boolean = false;
  orientation: any = 'verticale';
  paginate: any = '';

  // #region filer var
  filter_btn: boolean = true;
  offer_filter: boolean = true;
  condida_filter: boolean = false;
  company_filter: boolean = false;
  filter_show: boolean = false;
  filter_show_all: boolean = false;

  recriter_list: any[] = [
    {
      logo: 'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/3195090/logo.png?1587552503',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/5310523/index.png?1640179035',
      title: 'Total Energies',
      type: 'Grande Societe',
      salaries: '',
      caption: 'Une Compagnie intégrée multi-énergies',
    },
    {
      logo: 'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/4537715/logo.png?1622715420',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/4548600/index.png?1623058769',
      title: 'Total Energies',
      type: 'Grande Societe',
      salaries: '',
      caption: 'Une Compagnie intégrée multi-énergies',
    },
    {
      logo: 'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/8124/logo.png?1469002464',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/6192405/index.png?1659520006',
      title: 'Total Energies',
      type: 'Grande Societe',
      salaries: '',
      caption: 'Une Compagnie intégrée multi-énergies',
    },
    {
      logo: 'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/1007848/logo.png?1558457886',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/5027463/index.png?1634721315',
      title: 'Total Energies',
      type: 'Grande Societe',
      salaries: '',
      caption: 'Une Compagnie intégrée multi-énergies',
    },
    {
      logo: 'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/69883/logo.png?1621953434',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/6179891/index.png?1659017908',
      title: 'Total Energies',
      type: 'Grande Societe',
      salaries: '',
      caption: 'Une Compagnie intégrée multi-énergies',
    },
    {
      logo: 'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/3195090/logo.png?1587552503',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/5310523/index.png?1640179035',
      title: 'Total Energies',
      type: 'Grande Societe',
      salaries: '',
      caption: 'Une Compagnie intégrée multi-énergies',
    },
    {
      logo: 'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/3195090/logo.png?1587552503',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/5310523/index.png?1640179035',
      title: 'Total Energies',
      type: 'Grande Societe',
      salaries: '',
      caption: 'Une Compagnie intégrée multi-énergies',
    },
  ];
  // #region  start_dabe
  info_slids = [
    // #region card-w1-h2-v-hot

    // {
    //   name: 'show 2',
    //   id: 'd342',
    //   detail: {
    //     filter: false,
    //     row: [
    //       {
    //         colum: 4,
    //         cards_we_need: [
    //           {
    //             name: 'card-w1-h2-v-hot',
    //             id: 'id45235',
    //             title: 'hii is the tilet',
    //             title_style: {
    //                   color: "#3ff",
    //                   textDecoration: "none",
    //             },
    //             p: 'ducimu expedita ad ratione temporibus',
    //             img: {
    //               src: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg',
    //               width: '100%',
    //               height: '200px',
    //               alt: 'thi is blabla',
    //             },
    //             hot: {
    //               one: '20%',
    //               tow: 'off',
    //               border: '#1fe4f5 2px solid',
    //             },
    //             border: '#3ff 1px solid',
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
    // #endregion

    {
      name: 'show 2',
      id: 'd342',
      detail: {
        filter: false,
        row: [
          {
            colum: 6,
            cards_we_need: [
              {
                name: 'card-w1-h1-v2',
                id: 'pk',
                info: [
                  {
                    logo: 'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/3195090/logo.png?1587552503',
                    imageBg:
                      'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/5310523/index.png?1640179035',
                    title: 'Total Energies',
                    type: 'Grande Societe',
                    salaries: '',
                    caption: 'Une Compagnie intégrée multi-énergies',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  ];
  // #endregion
  // #endregion
  // #region filtter databes
  offres: any = [
    {
      Intitule: 'Développeur1',
      TypeContrat: 'CDI',
      Poste:
        ' Développeur Front-End Développeur Front-End Développeur Front-End',
      TypePoste: 'Emploi',
      NomEntreprise: 'Jumia',
      TypeEntreprise: 'StartUp',
      Image: '',
      Ville: 'Tanger',
      Secteur: 'Informatique',
      Date: '2023-02-02',
      Competences: 'HTML',
      Pays: 'Maroc',
      NiveauxEtude: 'Bac',
      NiveauxExperience: 'entre 3 et 4',
      langue: 'Français',
    },
    {
      Intitule: 'Ingénieur génie civil et minier ',
      TypeContrat: 'Anapec',
      Poste: 'technicien en mécanique et électrique mécanique et électrique',
      TypePoste: 'Stage',
      NomEntreprise: 'Smart automation technologies',
      TypeEntreprise: 'StartUp',
      Image: '',
      Ville: 'Tétouan',
      Secteur: 'Informatique',
      Date: '2022-02-02',
      Competences: 'HTML',
      Pays: 'Maroc',
      NiveauxEtude: 'Bac',
      NiveauxExperience: 'entre 3 et 4',
      langue: 'Français',
    },
    {
      Intitule: 'développeur3',
      TypeContrat: 'CDD',
      Poste: 'Développeur Front-End',
      TypePoste: 'Alternance',
      NomEntreprise: 'Jumia',
      TypeEntreprise: 'StartUp',
      Image: '',
      Ville: 'Tanger',
      Secteur: 'Informatique',
      Date: '2000-02-02',
      Competences: 'HTML',
      Pays: 'Algérie',
      NiveauxEtude: 'Bac',
      NiveauxExperience: 'entre 1 et 2',
      langue: 'Espagnol',
    },
    {
      Intitule: 'Développeur',
      TypeContrat: 'A discuter',
      NomEntreprise: 'Jumia',
      Poste: 'Développeur Back-End',
      TypePoste: 'extra',
      TypeEntreprise: 'StartUp',
      Image: '',
      Ville: 'Tétouan',
      Secteur: 'Textile',
      Date: '2022-05-02',
      Competences: 'HTML',
      Pays: 'Maroc',
      NiveauxEtude: 'qualification avant bac',
      NiveauxExperience: 'entre 1 et 2',
      langue: 'Arabe',
    },
    {
      Intitule: 'Développeur4',
      TypeContrat: 'CDI',
      NomEntreprise: 'Jumia',
      TypeEntreprise: 'StartUp',
      Poste: 'Développeur Back-End',
      TypePoste: 'Emploi',
      Image: '',
      Ville: 'Tanger',
      Secteur: 'Électronique',
      Date: '2022-02-02',
      Competences: 'HTML',
      Pays: 'Algérie',
      NiveauxEtude: 'qualification avant bac',
      NiveauxExperience: "moins d'un ans",
      langue: 'Espagnol',
    },
  ];

  // #endregion
  allOffres: any;

  @ViewChild('typePoste') typePosteSelect!: any;
  @ViewChild('secteur') secteurSelect!: any;
  @ViewChild('ville') villeSelect!: any;
  @ViewChild('region') regionSelect!: any;
  @ViewChild('pays') paysSelect!: any;
  @ViewChildren('contrat') contratBox!: any;
  @ViewChildren('niveauxEt') niveauxEtBox!: any;
  @ViewChildren('niveauxEx') niveauxExBox!: any;
  @ViewChildren('langue') langueBox!: any;
  @ViewChild('search') searchInput!: any;
  @ViewChild('date') dateInput!: any;

  // #endregion

  constructor(config: NgbPopoverConfig) {
    this.allOffres = this.offres;
    config.placement = 'end';
    config.triggers = 'hover';
  }

  ngOnInit() {}

  // #region fitter fuctioanlity
  showfilter() {
    this.filter_show = !this.filter_show;
  }
  filter() {
    this.offres = this.allOffres;
    let villeFiltre = this.villeSelect.nativeElement.value;
    // console.log('filtreParVille', villeFiltre)
    let regionFiltre = this.regionSelect.nativeElement.value;
    // console.log('filtre par region', regionFiltre)
    let paysFiltre = this.paysSelect.nativeElement.value;
    // console.log('filtre par pays', paysFiltre)
    let contratFiltre = this.contratBox._results;
    // console.log('filtre par contrat', contratFiltre)

    let niveauxEtFiltre = this.niveauxEtBox._results;
    // console.log('filtre par niveaux etude', niveauxEtFiltre)
    let niveauxExFiltre = this.niveauxExBox._results;
    // console.log('filtre par niveaux experience', niveauxExFiltre)
    let langueFiltre = this.langueBox._results;
    // console.log('filtre par langues', langueFiltre)
    let secteurFiltre = this.secteurSelect.nativeElement.value;
    // console.log('filtre par secteurs', secteurFiltre)

    let searchFiltre = this.searchInput.nativeElement.value;
    console.log('filtre par search', searchFiltre);
    let dateFiltre = this.dateInput.nativeElement.value;
    // console.log('filtre par date', dateFiltre)

    if (searchFiltre != '') {
      this.offres = this.offres.filter((offre: any) => {
        return offre.Intitule.toLowerCase().includes(
          searchFiltre.toLowerCase()
        );
      });
    }
    if (paysFiltre != '') {
      this.offres = this.offres.filter((offre: any) => {
        return offre.Pays == paysFiltre;
      });
    } else if (regionFiltre != '') {
      this.offres = this.offres.filter((offre: any) => {
        return offre.Region == regionFiltre;
      });
    } else if (villeFiltre != '') {
      this.offres = this.offres.filter((offre: any) => {
        return offre.Ville == villeFiltre;
      });
    } else if (secteurFiltre != '') {
      this.offres = this.offres.filter((offre: any) => {
        return offre.Secteur == secteurFiltre;
      });
    }
    if (dateFiltre != '') {
      this.offres = this.offres.filter((offre: any) => {
        return offre.Date == dateFiltre;
      });
    }
    this.checkboxFiltre(contratFiltre, 'TypeContrat');
    this.checkboxFiltre(niveauxEtFiltre, 'NiveauxEtude');
    this.checkboxFiltre(niveauxExFiltre, 'NiveauxExperience');
    this.checkboxFiltre(langueFiltre, 'langue');
  }

  checkboxFiltre(CheckboxList: any, label: any) {
    let newList2;
    let newList3: any = this.offres;
    let isFirstTime: Boolean = true;
    CheckboxList.map((filtre: any) => {
      if (filtre.nativeElement.checked) {
        if (isFirstTime == true) {
          isFirstTime = false;
          newList3 = [];
        }
        newList2 = this.offres;
        newList2 = newList2.filter((offre: any) => {
          return offre[label] == filtre.nativeElement.value;
        });

        newList2.map((list: any) => {
          newList3.push(list);
        });
      }
    });
    this.offres = newList3;
  }
  changeview(or: any) {
    this.orientation = or;
  }
  sort(type: any) {
    this.offres.sort((a: any, b: any) =>
      a[type].toLowerCase() > b[type].toLowerCase() ? 1 : -1
    );
  }
  sortbyDate() {
    this.offres.sort((a: any, b: any) => (a.Date < b.Date ? 1 : -1));
  }

  showFilter() {
    this.showSidebar = !this.showSidebar;
  }
  // #endregion
}












