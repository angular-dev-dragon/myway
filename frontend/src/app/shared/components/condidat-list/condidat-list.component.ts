import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { filter } from 'rxjs';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-condidat-list',
  templateUrl: './condidat-list.component.html',
  styleUrls: ['./condidat-list.component.scss']
})
export class CondidatListComponent implements OnInit {
  @Input() link = '';
  @Input() condidatsList: any = [];
  collapsed = false;
  showSidebar: boolean = false;
  epingledSidebar: boolean = false;
  orientation: any = 'verticale';
  paginate: any = '';

  allallcondidats: any;
  constructor(config: NgbPopoverConfig) {
    this.allallcondidats = this.condidatsList;
    config.placement = 'end';
    config.triggers = 'hover';
  }

  ngOnInit(): void {}

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

  filter() {
    this.condidatsList = this.allallcondidats;
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
      this.condidatsList = this.condidatsList.filter((offre: any) => {
        return offre.Intitule.toLowerCase().includes(
          searchFiltre.toLowerCase()
        );
      });
    }
    if (paysFiltre != '') {
      this.condidatsList = this.condidatsList.filter((offre: any) => {
        return offre.Pays == paysFiltre;
      });
    } else if (regionFiltre != '') {
      this.condidatsList = this.condidatsList.filter((offre: any) => {
        return offre.Region == regionFiltre;
      });
    } else if (villeFiltre != '') {
      this.condidatsList = this.condidatsList.filter((offre: any) => {
        return offre.Ville == villeFiltre;
      });
    } else if (secteurFiltre != '') {
      this.condidatsList = this.condidatsList.filter((offre: any) => {
        return offre.Secteur == secteurFiltre;
      });
    }
    if (dateFiltre != '') {
      this.condidatsList = this.condidatsList.filter((offre: any) => {
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
    let newList3: any = this.condidatsList;
    let isFirstTime: Boolean = true;
    CheckboxList.map((filtre: any) => {
      if (filtre.nativeElement.checked) {
        if (isFirstTime == true) {
          isFirstTime = false;
          newList3 = [];
        }
        newList2 = this.condidatsList;
        newList2 = newList2.filter((offre: any) => {
          return offre[label] == filtre.nativeElement.value;
        });

        newList2.map((list: any) => {
          newList3.push(list);
        });
      }
    });
    this.condidatsList = newList3;
  }
  changeview(or: any) {
    this.orientation = or;
  }
  sort(type: any) {
    this.condidatsList.sort((a: any, b: any) =>
      a[type].toLowerCase() > b[type].toLowerCase() ? 1 : -1
    );
  }
  sortbyDate() {
    this.condidatsList.sort((a: any, b: any) => (a.Date < b.Date ? 1 : -1));
  }

  showFilter() {
    this.showSidebar = !this.showSidebar;
  }
}
