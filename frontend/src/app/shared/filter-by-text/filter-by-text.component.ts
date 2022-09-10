import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { GenericService } from '../services/generic.service';
import { FilterService } from '../tools/services/filter/filter.service';


@Component({
  selector: 'app-filter-by-text',
  templateUrl: './filter-by-text.component.html',
  styleUrls: ['./filter-by-text.component.scss'],
})
export class FilterByTextComponent implements OnInit, AfterViewInit {
  path: string | string [] = '';
  data: any;
  @Input() pageName: string = '';
  @ViewChild('search') searchInput!: any;

  constructor(
    private filterService: FilterService,
    private genericService: GenericService
  ) {}

  ngAfterViewInit(): void {
   this.data = this.filterService.getdata(this.pageName);
  }

  ngOnInit(): void {}

  filterByText() {
    this.data = this.filterService.getdata(this.pageName);

    let search = this.searchInput?.nativeElement.value || '';




        this.pageName == 'offres-emploi'? (this.path = ['Intitule', 'Poste'])
      : this.pageName == 'offres-de-stage'? (this.path = ['Intitule', 'Poste'])
      : this.pageName == 'offres-alternance'? (this.path = ['Intitule', 'Poste'])
      : this.pageName == 'offres-extra' ? (this.path = ['Intitule', 'Poste'])
      : this.pageName == 'conseils-pratique'? (this.path = ['titre', 'sousTitre'])
      : this.pageName == 'actualites-emploi'? (this.path = ['titre', 'sousTitre'])
      : this.pageName == 'soft-skills'? (this.path = ['titre', 'sousTitre'])
      : this.pageName == 'hard-skills'? (this.path = ['titre', 'sousTitre'])
      : this.pageName == 'legislations-et-textes-lois' ? (this.path = ['titre', 'sousTitre'])
      : this.pageName == 'candidats'? (this.path = ['info.name.first_name', 'info.name.last_name'])
      : this.pageName == 'quiz'? (this.path = ['titre', 'domaine'])
      : this.pageName == 'demandes-specifiques' ? (this.path = ['Poste'])
      : this.pageName == 'forums'? (this.path = ['designation'])
      : this.pageName == 'sondage'? (this.path = ['translations.fr.__designation'])
      : this.pageName == 'temoignage' ? (this.path = ['nom_ou_pseudo', 'fonction'])
      : this.pageName == 'condidatures-spontannes'? (this.path = ['title', 'secteur'])
      : this.pageName == 'recruteurs'? (this.path = ['title', 'secteur'])
      : this.pageName == 'etablissements-formation'? (this.path = ['title', 'secteur'])
      : this.pageName == 'cabinets-recrutement'? (this.path = ['title', 'secteur'])
      : this.pageName == 'associations-insertion-economique'? (this.path = ['title', 'secteur'])
      : this.pageName == 'bloggers'? (this.path = ['nom', 'Secteur'])
      : this.pageName == 'decouverte-des-metiers'? (this.path = ['Intitule', 'Secteur'])
      : this.pageName == 'metiers-pour-vous' ? (this.path = ['Intitule', 'Secteur'])
      : this.pageName == 'adresses-utiles'? (this.path = ['translations.fr.__designation'])
      : this.pageName == 'liens-utiles'? (this.path = ['translations.fr.__designation'])
      : this.pageName == 'documents'? (this.path = ['translations.fr.__titre', 'translations.fr.__sous_titre'])
      // : this.pageName == 'guides-emploi'? (this.path = [])
      : this.pageName == 'evenement'? (this.path = ['titre', 'TypeEvenement'])
      : (this.path = '');






    if (search != '' || this.path != '') {
      this.data = this.filterService.filter(this.data, {
        path: this.path,
        filterbythis: search,
      });
    }
  }
}

