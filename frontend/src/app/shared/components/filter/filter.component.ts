import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core'
import { CondidaInfoService } from '../../Services/condida-info/condida-info.service'
import { CondidatureSpontaneeService } from '../../services/condidature-spontanee.service'
import { DemandeSpecifiqueService } from '../../services/demande-specifique.service'
import { MetierService } from '../../services/metier.service'
import { OffreService } from '../../services/offre.service'
import { QuizService } from '../../services/quiz.service'
import { RecruteurService } from '../../services/recruteur.service'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
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
  @ViewChildren('typeSociete') typeSocieteBox!: any;
  @ViewChildren('metier') metierBox!: any;
  orientation: any = 'verticale';
  constructor(
    private quizService: QuizService,
    private metierService: MetierService,
    private offreService: OffreService,
    private candidatService: CondidaInfoService,
    private demandeSpecifiqueService: DemandeSpecifiqueService,
    private condidatureSpontaneeService: CondidatureSpontaneeService,
    private recurteurService: RecruteurService
  ) {}
  @Input() pageName: string = 'sort';
  @Input() pfilterType: string = 'detail';
  sort_by_name: string = 'sort';
  sort_by_date: string = 'sort';

  ngOnInit(): void {
    console.log(this.pageName);
  }

  sortByName(i: string) {
    this.sort_by_name = i;
  }
  sortByDate(i: string) {
    this.sort_by_date = i;
  }
  changeview(or: any) {
    this.orientation = or;
  }

  filter() {
    let sort_by_name = this.sort_by_name;
    let sort_by_date = this.sort_by_date;
    let nameFilter = this.searchInput.nativeElement.value || '';
    let metiertValue = this.metierBox._results || '';
    let villeFiltre = this.villeSelect?.nativeElement.value || '';
    // console.log('filtreParVille', villeFiltre)
    let regionFiltre = this.regionSelect?.nativeElement.value || '';
    // console.log('filtre par region', regionFiltre)
    let paysFiltre = this.paysSelect?.nativeElement.value || '';
    // console.log('filtre par pays', paysFiltre)
    let contratFiltre = this.contratBox?._results || '';
    // console.log('filtre par contrat', contratFiltre)
    let dateFilter = this.dateInput?.nativeElement.value || '';

    let niveauxEtFiltre = this.niveauxEtBox?._results || '';
    // console.log('filtre par niveaux etude', niveauxEtFiltre)
    let niveauxExFiltre = this.niveauxExBox?._results || '';
    // console.log('filtre par niveaux experience', niveauxExFiltre)
    let langueFiltre = this.langueBox?._results || '';
    // console.log('filtre par langues', langueFiltre)

    let secteurFiltre = this.secteurSelect?.nativeElement.value || '';

    let typeFiltre = this.typeSocieteBox?._results || '';

    if (this.pageName == 'quiz') {
      this.quizService.filter(nameFilter, metiertValue, secteurFiltre);
    }
    if (this.pageName == 'metier') {
      this.metierService.filter(nameFilter, metiertValue);
    }

    if (this.pageName == 'offre') {
      this.offreService.filter(
        nameFilter,
        secteurFiltre,
        paysFiltre,
        regionFiltre,
        villeFiltre,
        dateFilter,
        contratFiltre,
        niveauxEtFiltre,
        niveauxExFiltre,
        langueFiltre,
        sort_by_name,
        sort_by_date
      );
    }
    if (this.pageName == 'demande specifique') {
      this.demandeSpecifiqueService.filter(
        nameFilter,
        secteurFiltre,
        paysFiltre,
        regionFiltre,
        villeFiltre,
        dateFilter,
        contratFiltre,
        niveauxEtFiltre,
        niveauxExFiltre
      );
    }
    if (this.pageName == 'candidature spontanee') {
      this.condidatureSpontaneeService.filter(
        nameFilter,
        secteurFiltre,
        paysFiltre,
        regionFiltre,
        villeFiltre,
        typeFiltre
      );
    }

    if (this.pageName == 'recruteur') {
      this.recurteurService.filter(
        nameFilter,
        secteurFiltre,
        paysFiltre,
        regionFiltre,
        villeFiltre,
        typeFiltre
      );
    }
    if (this.pageName == 'candidat') {
      this.candidatService.filter(
        nameFilter,
        secteurFiltre,
        paysFiltre,
        regionFiltre,
        villeFiltre,
        niveauxEtFiltre,
        niveauxExFiltre,
        langueFiltre
      );
    }
  }
}
