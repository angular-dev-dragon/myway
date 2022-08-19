
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { filter } from 'rxjs';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-c-list',
  templateUrl: './c-list.component.html',
  styleUrls: ['./c-list.component.scss']
})
export class CListComponent implements OnInit {




  paginate: any = '';
  condidatsList: any;
  allcondidates: any;
  offres: any;
  niveauxExBox: any;
  contratBox: any;
  villeSelect: any;
  regionSelect: any;
  paysSelect: any;
  allOffres: any;
  langueBox: any;
  secteurSelect: any;
  dateInput: any;
  searchInput: any;
  orientation: any;
  constructor() {
    this.condidatsList = [
      {
        avalilaible: true,
        img: 'https://avatars.githubusercontent.com/u/71600486?v=4',
        name: 'Ahmed Aoulad Amar',
        age: '25',
        address: 'tanger/morococ',
        tital_job: 'web developer',
        years_of_ex: '2 years',
        ed_lavel: 'bac + 3',
        tag: ['web', 'developer'],
      },
      {
        avalilaible: false,
        img: 'https://www.bootdey.com/img/Content/avatar/avatar2.png',
        name: 'ahmed aoulad amr',
        age: '25',
        address: 'tanger/morococ',
        tital_job: 'web developer',
        years_of_ex: '2 years',
        ed_lavel: 'bac + 3',
        tag: ['web', 'developer'],
      },
      {
        avalilaible: true,
        img: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
        name: 'ahmed aoulad amr',
        age: '25',
        address: 'tanger/morococ',
        tital_job: 'web developer',
        years_of_ex: '2 years',
        ed_lavel: 'bac + 3',
        tag: ['web', 'developer'],
      },
      {
        avalilaible: true,
        img: 'https://www.bootdey.com/img/Content/avatar/avatar4.png',
        name: 'ahmed aoulad amr',
        age: '25',
        address: 'tanger/morococ',
        tital_job: 'web developer',
        years_of_ex: '2 years',
        ed_lavel: 'bac + 3',
        tag: ['web', 'developer'],
      },
      {
        avalilaible: true,
        img: 'https://www.bootdey.com/img/Content/avatar/avatar5.png',
        name: 'ahmed aoulad amr',
        age: '25',
        address: 'tanger/morococ',
        tital_job: 'web developer',
        years_of_ex: '2 years',
        ed_lavel: 'bac + 3',
        tag: ['web', 'developer'],
      },
      {
        avalilaible: true,
        img: 'https://www.bootdey.com/img/Content/avatar/avatar6.png',
        name: 'ahmed aoulad amr',
        age: '25',
        address: 'tanger/morococ',
        tital_job: 'web developer',
        years_of_ex: '2 years',
        ed_lavel: 'bac + 3',
        tag: ['web', 'developer'],
      },
      {
        avalilaible: true,
        img: 'https://www.bootdey.com/img/Content/avatar/avatar7.png',
        name: 'ahmed aoulad amr',
        age: '25',
        address: 'tanger/morococ',
        tital_job: 'web developer',
        years_of_ex: '2 years',
        ed_lavel: 'bac + 3',
        tag: ['web', 'developer'],
      },
      {
        avalilaible: true,
        img: 'https://www.bootdey.com/img/Content/avatar/avatar8.png',
        name: 'ahmed aoulad amr',
        age: '25',
        address: 'tanger/morococ',
        tital_job: 'web developer',
        years_of_ex: '2 years',
        ed_lavel: 'bac + 3',
        tag: ['web', 'developer'],
      },
      {
        avalilaible: true,
        img: 'https://www.bootdey.com/img/Content/avatar/avatar9.png',
        name: 'ahmed aoulad amr',
        age: '25',
        address: 'tanger/morococ',
        tital_job: 'web developer',
        years_of_ex: '2 years',
        ed_lavel: 'bac + 3',
        tag: ['web', 'developer'],
      },
      {
        avalilaible: true,
        img: 'https://www.bootdey.com/img/Content/avatar/avatar10.png',
        name: 'ahmed aoulad amr',
        age: '25',
        address: 'tanger/morococ',
        tital_job: 'web developer',
        years_of_ex: '2 years',
        ed_lavel: 'bac + 3',
        tag: ['web', 'developer'],
      },
      {
        avalilaible: true,
        img: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
        name: 'ahmed aoulad amr',
        age: '25',
        address: 'tanger/morococ',
        tital_job: 'web developer',
        years_of_ex: '2 years',
        ed_lavel: 'bac + 3',
        tag: ['web', 'developer'],
      },
      {
        avalilaible: true,
        img: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
        name: 'ahmed aoulad amr',
        age: '25',
        address: 'tanger/morococ',
        tital_job: 'web developer',
        years_of_ex: '2 years',
        ed_lavel: 'bac + 3',
        tag: ['web', 'developer'],
      },
      {
        avalilaible: true,
        img: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
        name: 'ahmed aoulad amr',
        age: '25',
        address: 'tanger/morococ',
        tital_job: 'web developer',
        years_of_ex: '2 years',
        ed_lavel: 'bac + 3',
        tag: ['web', 'developer'],
      },
      {
        avalilaible: true,
        img: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
        name: 'ahmed aoulad amr',
        age: '25',
        address: 'tanger/morococ',
        tital_job: 'web developer',
        years_of_ex: '2 years',
        ed_lavel: 'bac + 3',
        tag: ['web', 'developer'],
      },
      {
        avalilaible: true,
        img: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
        name: 'ahmed aoulad amr',
        age: '25',
        address: 'tanger/morococ',
        tital_job: 'web developer',
        years_of_ex: '2 years',
        ed_lavel: 'bac + 3',
        tag: ['web', 'developer'],
      },
      {
        avalilaible: true,
        img: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
        name: 'ahmed aoulad amr',
        age: '25',
        address: 'tanger/morococ',
        tital_job: 'web developer',
        years_of_ex: '2 years',
        ed_lavel: 'bac + 3',
        tag: ['web', 'developer'],
      },
      {
        avalilaible: true,
        img: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
        name: 'ahmed aoulad amr',
        age: '25',
        address: 'tanger/morococ',
        tital_job: 'web developer',
        years_of_ex: '2 years',
        ed_lavel: 'bac + 3',
        tag: ['web', 'developer'],
      },
      {
        avalilaible: true,
        img: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
        name: 'ahmed aoulad amr',
        age: '25',
        address: 'tanger/morococ',
        tital_job: 'web developer',
        years_of_ex: '2 years',
        ed_lavel: 'bac + 3',
        tag: ['web', 'developer'],
      },
    ];
  }

  ngOnInit(): void {}

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

    let niveauxEtFiltre = this.niveauxExBox._results;
    // console.log('filtre par niveaux etude', niveauxEtFiltre)
    let niveauxExFiltre = this.niveauxExBox._results;
    // console.log('filtre par niveaux experience', niveauxExFiltre)
    let langueFiltre = this.langueBox._results;
    // console.log('filtre par langues', langueFiltre)
    let secteurFiltre = this.secteurSelect.nativeElement.value;
    // console.log('filtre par secteurs', secteurFiltre)
    let searchFiltre = this.searchInput.nativeElement.value;
    // console.log('filtre par search', searchFiltre)
    let dateFiltre = this.dateInput.nativeElement.value;
    console.log('filtre par date', dateFiltre);

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
}
