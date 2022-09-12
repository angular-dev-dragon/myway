
import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FilterService } from '../../tools/services/filter/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, AfterViewInit {
  data: any

  @Input() pageName: string = '';
  @ViewChild('secteur') secteurSelect!: any;
  @ViewChild('ville') villeSelect!: any;
  @ViewChild('region') regionSelect!: any;
  @ViewChild('pays') paysSelect!: any;
  @ViewChildren('contrat') contratBox!: any;
  @ViewChildren('niveauxEt') niveauxEtBox!: any;
  @ViewChildren('niveauxEx') niveauxExBox!: any;
  @ViewChildren('langue') langueBox!: any;
  @ViewChild('date') dateInput!: any;
  @ViewChildren('typeSociete') typeSocieteBox!: any;
  @ViewChildren('metier') metierBox!: any;
  @ViewChildren('typeEvent') typeEventBox!: any;
  @ViewChild('dateDebutEvent') dateDebutInput!: any;
  @ViewChild('dateFinEvent') dateFinInput!: any;

  constructor(
    private filterService: FilterService,

  ) {



  }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {}

  filter() {
    this.data = this.filterService.getdata(this.pageName);
    // #region vhad
    console.log('dkhol n ', 'filter');
    let langueFiltre = this.langueBox?._results || [];
    let metiertValue = this.metierBox._results || [];
    let contratFiltre = this.contratBox?._results || [];
    let niveauxEtFiltre = this.niveauxEtBox?._results || [];
    let niveauxExFiltre = this.niveauxExBox?._results || [];
    let typeFiltre = this.typeSocieteBox?._results || [];
    let typeEvent = this.typeEventBox?._results || [];

    let villeFiltre = this.villeSelect?.nativeElement.value || '';
    let regionFiltre = this.regionSelect?.nativeElement.value || '';
    let paysFiltre = this.paysSelect?.nativeElement.value || '';
    let dateFilter = this.dateInput?.nativeElement.value || '';
    let secteurFiltre = this.secteurSelect?.nativeElement.value || '';

    let dateDebut = this.dateDebutInput?.nativeElement.value || '';
    let dateFin = this.dateFinInput?.nativeElement.value || '';

    if (this.pageName == 'quiz') {

      this.filterService.filter(this.data, { path: '', filterbythis: metiertValue });
      this.filterService.filter(this.data, {path: '',filterbythis: secteurFiltre,
      });
    }

    if (this.pageName == 'demande specifique') {


      this.data =this.filterService.filter(this.data, {path: '',filterbythis: secteurFiltre,     });
      this.data =this.filterService.filter(this.data, {path: '',filterbythis: paysFiltre,     });
      this.data =this.filterService.filter(this.data, {path: '',filterbythis: regionFiltre,     });
      this.data =this.filterService.filter(this.data, {path: '',filterbythis: villeFiltre,     });
      this.data =this.filterService.filter(this.data, {path: '',filterbythis: dateFilter,     });
      this.data =this.filterService.filter(this.data, {path: '',filterbythis: contratFiltre,     });
      this.data =this.filterService.filter(this.data, {path: '',filterbythis: niveauxEtFiltre,     });
      this.data =this.filterService.filter(this.data, {path: '',filterbythis: niveauxExFiltre,     });
    }
    if (this.pageName == 'candidature spontanee') {

      this.filterService.filter(this.data, {path: '',filterbythis: dateFilter });
      this.filterService.filter(this.data, {path: '',filterbythis: contratFiltre });
      this.filterService.filter(this.data, {path: '',filterbythis: niveauxEtFiltre });
      this.filterService.filter(this.data, {path: '',filterbythis: niveauxExFiltre });
      // this.filterService.filter(this.data, { path: '', filterbythis: langueFiltr  });
    }

    if (this.pageName == 'evenement') {

      this.filterService.filter(this.data, { path: '', filterbythis: typeEvent });
      this.filterService.filter(this.data, { path: '', filterbythis: dateDebut });
      this.filterService.filter(this.data, { path: '', filterbythis: dateFin });
    }

    // #endregion

    // #region offres
    if (
      this.pageName == 'offres-emploi' ||
      this.pageName == 'offres-extra' ||
      this.pageName == 'offres-alternance' ||
      this.pageName == 'offres-de-stage'
    ) {
      if (secteurFiltre != '')        {this.data = this.filterService.filter(this.data, {path: 'Secteur'         ,filterbythis: secteurFiltre, });}
      if (paysFiltre != '')           {this.data = this.filterService.filter(this.data, {path: 'Pays'            ,filterbythis: paysFiltre, });}
      if (regionFiltre != '')         {this.data = this.filterService.filter(this.data, {path: 'Region'          ,filterbythis: regionFiltre, });}
      if (villeFiltre != '')          {this.data = this.filterService.filter(this.data, {path: 'Ville'           ,filterbythis: villeFiltre, });}
      if (dateFilter != '')           {this.data = this.filterService.filter(this.data, {path: 'Date'            ,filterbythis: dateFilter, });}
      if (contratFiltre.length > 0)   {this.data = this.filterService.filter(this.data, {path: 'TypeContrat'     ,filterbythis: contratFiltre, });}
      if (niveauxEtFiltre.length > 0) {this.data = this.filterService.filter(this.data, {path: 'NiveauxEtude'     ,filterbythis: niveauxEtFiltre, });}
      if (niveauxExFiltre.length > 0) {this.data = this.filterService.filter(this.data, {path: 'NiveauxExperience',filterbythis: niveauxExFiltre, });}
      if (langueFiltre.length > 0)    {this.data = this.filterService.filter(this.data, {path: 'langue'           ,filterbythis: langueFiltre, });}
    }

    // #endregion

    if (this.pageName == 'candidats') {

      this.filterService.filter(this.data, {
        path: '',
        filterbythis: secteurFiltre,
      });
      this.filterService.filter(this.data, { path: '', filterbythis: paysFiltre });
      this.filterService.filter(this.data, { path: '', filterbythis: regionFiltre });
      this.filterService.filter(this.data, { path: '', filterbythis: villeFiltre });
      this.filterService.filter(this.data, {
        path: '',
        filterbythis: niveauxEtFiltre,
      });
      this.filterService.filter(this.data, {
        path: '',
        filterbythis: niveauxExFiltre,
      });
      this.filterService.filter(this.data, { path: '', filterbythis: langueFiltre });
    }
    if (this.pageName == 'demandes-specifiques') {

      this.filterService.filter(this.data, {
        path: '',
        filterbythis: secteurFiltre,
      });
      this.filterService.filter(this.data, { path: '', filterbythis: paysFiltre });
      this.filterService.filter(this.data, { path: '', filterbythis: regionFiltre });
      this.filterService.filter(this.data, { path: '', filterbythis: regionFiltre });
      this.filterService.filter(this.data, { path: '', filterbythis: villeFiltre });
      this.filterService.filter(this.data, { path: '', filterbythis: dateFilter });
      this.filterService.filter(this.data, {
        path: '',
        filterbythis: contratFiltre,
      });
      this.filterService.filter(this.data, {
        path: '',
        filterbythis: niveauxEtFiltre,
      });
      this.filterService.filter(this.data, {
        path: '',
        filterbythis: niveauxExFiltre,
      });
      this.filterService.filter(this.data, { path: '', filterbythis: langueFiltre });
    }
    if (this.pageName == 'condidatures-spontannes') {

      this.filterService.filter(this.data, {
        path: '',
        filterbythis: secteurFiltre,
      });
      this.filterService.filter(this.data, { path: '', filterbythis: paysFiltre });
      this.filterService.filter(this.data, { path: '', filterbythis: regionFiltre });
      this.filterService.filter(this.data, { path: '', filterbythis: villeFiltre });
      this.filterService.filter(this.data, { path: '', filterbythis: typeFiltre });
    }

    if (this.pageName == 'recruteurs') {

      this.filterService.filter(this.data, {
        path: '',
        filterbythis: secteurFiltre,
      });
      this.filterService.filter(this.data, { path: '', filterbythis: paysFiltre });
      this.filterService.filter(this.data, { path: '', filterbythis: regionFiltre });
      this.filterService.filter(this.data, { path: '', filterbythis: villeFiltre });
      this.filterService.filter(this.data, { path: '', filterbythis: typeFiltre });
    }
    if (this.pageName == 'etablissements-formation') {

      this.filterService.filter(this.data, {
        path: '',
        filterbythis: secteurFiltre,
      });
      this.filterService.filter(this.data, { path: '', filterbythis: paysFiltre });
      this.filterService.filter(this.data, { path: '', filterbythis: regionFiltre });
      this.filterService.filter(this.data, { path: '', filterbythis: villeFiltre });
      this.filterService.filter(this.data, { path: '', filterbythis: typeFiltre });
    }
    if (this.pageName == 'cabinets-recrutement') {

      this.filterService.filter(this.data, {
        path: '',
        filterbythis: secteurFiltre,
      });
      this.filterService.filter(this.data, { path: '', filterbythis: paysFiltre });
      this.filterService.filter(this.data, { path: '', filterbythis: regionFiltre });
      this.filterService.filter(this.data, { path: '', filterbythis: villeFiltre });
      this.filterService.filter(this.data, { path: '', filterbythis: typeFiltre });
    }
    if (this.pageName == 'associations-insertion-economique') {

      this.filterService.filter(this.data, {
        path: '',
        filterbythis: secteurFiltre,
      });
      this.filterService.filter(this.data, { path: '', filterbythis: paysFiltre });
      this.filterService.filter(this.data, { path: '', filterbythis: regionFiltre });
      this.filterService.filter(this.data, { path: '', filterbythis: villeFiltre });
      this.filterService.filter(this.data, { path: '', filterbythis: typeFiltre });
    }

    if (this.pageName == 'decouverte-des-metiers') {

      this.filterService.filter(this.data, {
        path: '',
        filterbythis: secteurFiltre,
      });
      this.filterService.filter(this.data, { path: '', filterbythis: paysFiltre });
      this.filterService.filter(this.data, { path: '', filterbythis: regionFiltre });
      this.filterService.filter(this.data, { path: '', filterbythis: villeFiltre });
      this.filterService.filter(this.data, { path: '', filterbythis: typeFiltre });
    }

    if (this.pageName == 'quiz') {

      this.filterService.filter(this.data, {
        path: '',
        filterbythis: secteurFiltre,
      });
      this.filterService.filter(this.data, { path: '', filterbythis: metiertValue });
    }
  }




}
