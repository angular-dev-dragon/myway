import { LangougeComponent } from './../../../components/resume-profiles/side-bar/langouge/langouge.component';

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
  @ViewChild('date') dateInput!: any;
  @ViewChild('dateDebutEvent') dateDebutInput!: any;
  @ViewChild('dateFinEvent') dateFinInput!: any;



  @ViewChildren('typeSociete') typeSocieteBox!: any;
  @ViewChildren('contrat') contratBox!: any;
  @ViewChildren('niveauxEt') niveauxEtBox!: any;
  @ViewChildren('niveauxEx') niveauxExBox!: any;
  @ViewChildren('typeEvent') typeEventBox!: any;
  @ViewChildren('metier') metierBox!: any;
  @ViewChildren('langue') langueBox!: any;


  constructor(private filterService: FilterService) {}
  ngAfterViewInit(): void { }
  ngOnInit(): void{ }

  filter() {
    this.data = this.filterService.getdata(this.pageName);
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


    if (
      this.pageName == 'evenement') {
      if (typeEvent.length > 0)    { this.data = this.filterService.filter(this.data, { path: 'TypeEvenement', filterbythis: typeEvent }); }
       if (dateDebut != '')        {this.data = this.filterService.filter(this.data, { path: 'dateDebut', filterbythis: dateDebut });}
       if (dateFin != '')          {this.data = this.filterService.filter(this.data, { path: 'dateFin', filterbythis: dateFin });}
    }
    if (
      this.pageName == 'offres-emploi' ||
      this.pageName == 'offres-extra' ||
      this.pageName == 'offres-alternance' ||
      this.pageName == 'offres-de-stage' ||
      this.pageName == 'demandes-specifiques'
    ) {
      if (secteurFiltre != '')        {this.data = this.filterService.filter(this.data, {path: 'Secteur'         ,filterbythis: secteurFiltre});}
      if (paysFiltre != '')           {this.data = this.filterService.filter(this.data, {path: 'Pays'            ,filterbythis: paysFiltre});}
      if (regionFiltre != '')         {this.data = this.filterService.filter(this.data, {path: 'Region'          ,filterbythis: regionFiltre});}
      if (villeFiltre != '')          {this.data = this.filterService.filter(this.data, {path: 'Ville'           ,filterbythis: villeFiltre });}
      if (dateFilter != '')           {this.data = this.filterService.filter(this.data, {path: 'Date'            ,filterbythis: dateFilter});}
      if (contratFiltre.length > 0)   {this.data = this.filterService.filter(this.data, {path: 'TypeContrat'     ,filterbythis: contratFiltre,});}
      if (niveauxEtFiltre.length > 0) {this.data = this.filterService.filter(this.data, {path: 'NiveauxEtude'     ,filterbythis: niveauxEtFiltre});}
      if (niveauxExFiltre.length > 0) {this.data = this.filterService.filter(this.data, {path: 'NiveauxExperience',filterbythis: niveauxExFiltre});}
      if (langueFiltre.length > 0)    {this.data = this.filterService.filter(this.data, {path: 'langue'           ,filterbythis: langueFiltre });}
    }
    if (this.pageName == 'candidats') {
       if (secteurFiltre != '')          {this.data = this.filterService.filter(this.data, { path: '',filterbythis: secteurFiltre});}
       if (paysFiltre != '')             {this.data = this.filterService.filter(this.data, { path: '', filterbythis: paysFiltre});}
       if (regionFiltre != '')           {this.data = this.filterService.filter(this.data, { path: '', filterbythis: regionFiltre});}
       if (villeFiltre != '')            {this.data = this.filterService.filter(this.data, { path: '', filterbythis: villeFiltre});}
       if (niveauxEtFiltre.length > 0)   {this.data = this.filterService.filter(this.data, { path:  '', filterbythis: niveauxEtFiltre});}
       if (niveauxExFiltre.length > 0)   {this.data = this.filterService.filter(this.data, { path: '', filterbythis: niveauxExFiltre});}
       if (langueFiltre.length > 0)      {this.data = this.filterService.filter(this.data, { path: '', filterbythis: langueFiltre});}
    }

    if (
      this.pageName == 'recruteurs' ||
      this.pageName == 'condidatures-spontannes' ||
      this.pageName == 'etablissements-formation'||
      this.pageName == 'cabinets-recrutement'||
      this.pageName == 'associations-insertion-economique'
    ) {

       if (secteurFiltre != '')          {this.data = this.filterService.filter(this.data, { path: 'secteur',filterbythis: secteurFiltre});}
       if (paysFiltre != '')             {this.data = this.filterService.filter(this.data, { path: 'Pays', filterbythis: paysFiltre });}
       if (regionFiltre != '')           {this.data = this.filterService.filter(this.data, { path: 'Region', filterbythis: regionFiltre});}
       if (villeFiltre != '')            {this.data = this.filterService.filter(this.data, { path: 'Ville', filterbythis: villeFiltre});}
       if (typeFiltre.length > 0)        {this.data = this.filterService.filter(this.data, { path: 'type', filterbythis: typeFiltre});}
    }


    if (
      this.pageName == 'decouverte-des-metiers' ||
      this.pageName == 'quiz'
    ) {
       if (secteurFiltre != '')            {this.data = this.filterService.filter(this.data, { path: 'secteur',filterbythis: secteurFiltre});}
      if (metiertValue.length > 0) { this.data = this.filterService.filter(this.data, { path: ['metier' ] , filterbythis: metiertValue});}
    }














  }










































}
