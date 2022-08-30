import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core'
import { CondidaInfoService } from '../../Services/condida-info/condida-info.service'
import { MetierService } from '../../services/metier.service'
import { OffreService } from '../../services/offre.service'
import { QuizService } from '../../services/quiz.service'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor(
    private quizService: QuizService,
    private metierService: MetierService,
    private offreService: OffreService,
    private candidatService: CondidaInfoService,
  ) {}
  @Input() pageName: string = ''
  ngOnInit(): void {
    console.log(this.pageName)
  }

  filter() {
    let metiertValue = this.metierBox._results || ''

    let villeFiltre = this.villeSelect?.nativeElement.value || ''
    // console.log('filtreParVille', villeFiltre)
    let regionFiltre = this.regionSelect?.nativeElement.value || ''
    // console.log('filtre par region', regionFiltre)
    let paysFiltre = this.paysSelect?.nativeElement.value || ''
    // console.log('filtre par pays', paysFiltre)
    let contratFiltre = this.contratBox?._results || ''
    // console.log('filtre par contrat', contratFiltre)
    let dateFilter = this.dateInput?.nativeElement.value || ''

    let niveauxEtFiltre = this.niveauxEtBox?._results || ''
    // console.log('filtre par niveaux etude', niveauxEtFiltre)
    let niveauxExFiltre = this.niveauxExBox?._results || ''
    // console.log('filtre par niveaux experience', niveauxExFiltre)
    let langueFiltre = this.langueBox?._results || ''
    // console.log('filtre par langues', langueFiltre)
    let secteurFiltre = this.secteurSelect?.nativeElement.value || ''
    if (this.pageName == 'quiz') {
      this.quizService.filter('', metiertValue, secteurFiltre)
    }
    if (this.pageName == 'metier') {
      this.metierService.filter('', metiertValue)
    }
    if (this.pageName == 'offre') {
      this.offreService.filter(
        '',
        secteurFiltre,
        paysFiltre,
        regionFiltre,
        villeFiltre,
        dateFilter,
        contratFiltre,
        niveauxEtFiltre,
        niveauxExFiltre,
        langueFiltre,
      )
    }
    if (this.pageName == 'candidat') {
      this.candidatService.filter(
        '',
        secteurFiltre,
        paysFiltre,
        regionFiltre,
        villeFiltre,

        niveauxEtFiltre,
        niveauxExFiltre,
        langueFiltre,
      )
    }
  }

  @ViewChild('typePoste') typePosteSelect!: any
  @ViewChild('secteur') secteurSelect!: any
  @ViewChild('ville') villeSelect!: any
  @ViewChild('region') regionSelect!: any
  @ViewChild('pays') paysSelect!: any
  @ViewChildren('contrat') contratBox!: any
  @ViewChildren('niveauxEt') niveauxEtBox!: any
  @ViewChildren('niveauxEx') niveauxExBox!: any
  @ViewChildren('langue') langueBox!: any
  @ViewChild('search') searchInput!: any
  @ViewChild('date') dateInput!: any
  @ViewChildren('typeSociete') typeSocieteBox!: any
  @ViewChildren('metier') metierBox!: any

  //searchInputValue = this.searchInput.nativeElement.value
}
