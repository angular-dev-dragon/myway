import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { GenericService } from 'src/app/shared/services/generic.service'
@Component({
  selector: 'app-view-project',
  styleUrls: ['./view.scss'],
  templateUrl: './view-project.component.html',
})
export class ViewProjectComponent implements OnInit {
  pageName: string = ''
  p: number = 0
  data: any = []
  showLeftSideBar: boolean = true
  showRightSideBar: boolean = true
  showHeader: boolean = true
  showTopFilter: boolean = true
  resultData: any
  constructor(
    public genericervice: GenericService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.activatedRoute.url.subscribe((res) => {
      console.log(res)
    })

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.pageName = event.url.split('/')[1]
        this.pageName = this.removeAccent(this.pageName)

        console.log(this.pageName)
      }
    })
  }

  ngOnInit(): void {
    this.controlView()
    //  this.getDataFromService(this.pageName);
  }

  getDataFromService(pageName: string) {
    this.data = this.genericervice.get(pageName)
  }

  // #region view conrollers
  controlView() {
    if (
      this.pageName == 'condidat' ||
      this.pageName == 'demande specifique' ||
      this.pageName == 'candidature spontanee' ||
      this.pageName == 'offres emploi' ||
      this.pageName == 'offres de stage' ||
      this.pageName == 'offres alternance' ||
      this.pageName == 'offres extra' ||
      this.pageName == 'recruteur' ||
      this.pageName == 'associations insertion economique' ||
      this.pageName == 'etablissements formation' ||
      this.pageName == 'cabinets recrutement' ||
      this.pageName == 'guides emploi' ||
      // this.pageName == '' ||
      // this.pageName == '' ||
      // this.pageName == '' ||
      this.pageName == 'quiz' ||
      this.pageName == 'metier' ||
      this.pageName == 'evenement'
    ) {
      this.showLeftSideBar = true
      this.showHeader = true
      this.showTopFilter = true
      this.showRightSideBar = false
    } else if (
      this.pageName == 'temoignage' ||
      this.pageName == 'soft skills' ||
      this.pageName == 'conseils pratique' ||
      this.pageName == 'hard skills' ||
      this.pageName == 'sondage' ||
      this.pageName == 'liens utiles' ||
      this.pageName == 'forums' ||
      this.pageName == 'blogeurs' ||
      this.pageName == 'adresses utiles' ||
      this.pageName == 'documents' ||
      this.pageName == 'legislations et textes lois' ||
      // this.pageName == '' ||
      // this.pageName == '' ||
      // this.pageName == '' ||
      // this.pageName == '' ||
      this.pageName == ''
    ) {
      this.showLeftSideBar = false
      this.showHeader = true
      this.showTopFilter = true
      this.showRightSideBar = false
    } else if (this.pageName == 'undfind') {
      this.showLeftSideBar = false
      this.showHeader = false
      this.showTopFilter = false
      this.showRightSideBar = false
    }
  }

  removeAccent = function (s: any) {
    var r = s.toLowerCase()
    r = r.replace(new RegExp('candidats'), 'candidat')
    r = r.replace(new RegExp('demandes-specifiques'), 'demande specifique')
    r = r.replace(
      new RegExp('condidatures-spontannes'),
      'candidature spontanee',
    )

    r = r.replace(new RegExp('offres-emploi'), 'offres emploi')
    r = r.replace(new RegExp('offres-de-stage'), 'offres de stage')
    r = r.replace(new RegExp('offres-alternance'), 'offres alternance')
    r = r.replace(new RegExp('offres-extra'), 'offres extra')

    r = r.replace(
      new RegExp('associations-insertion-economique'),
      'associations insertion economique',
    )
    r = r.replace(new RegExp('cabinets-recrutement'), 'cabinets recrutement')
    r = r.replace(
      new RegExp('etablissements-formation'),
      'etablissements formation',
    )

    //

    //  Législations et textes de lois

    r = r.replace(new RegExp('guides-emploi'), 'guides emploi')
    r = r.replace(
      new RegExp('legislations-et-textes-lois'),
      'legislations et textes lois',
    )
    r = r.replace(new RegExp(''), '')
    r = r.replace(new RegExp(''), '')
    r = r.replace(new RegExp(''), '')
    r = r.replace(new RegExp(''), '')
    r = r.replace(new RegExp(''), '')
    r = r.replace(new RegExp(''), '')

    r = r.replace(new RegExp('recruteurs'), 'recruteur')
    r = r.replace(new RegExp('soft-skills'), 'soft skills')
    r = r.replace(new RegExp('hard-skills'), 'hard skills')
    r = r.replace(new RegExp('conseils-pratique'), 'conseils pratique')
    r = r.replace(new RegExp('-', 'g'), ' ')
    r = r.replace(new RegExp('_', 'g'), ' ')
    return r
  }

  orientation: string = ''
  filtredData(value: any) {
    this.data = value
  }

  getOrientaion(value: any) {
    console.log(value)

    this.orientation = value
  }
}
