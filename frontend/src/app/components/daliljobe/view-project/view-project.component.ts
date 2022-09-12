import { Component, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { GenericService } from 'src/app/shared/services/generic.service'
import { FilterService } from 'src/app/shared/tools/services/filter/filter.service'

@Component({
  selector: 'app-view-project',
  styleUrls: ['./view.scss'],
  templateUrl: './view-project.component.html',
})
export class ViewProjectComponent implements OnInit {
  orientation: string = ''
  pageName: string = ''
  p: number = 0
  data: any = []
  showLeftSideBar: boolean = true
  showRightSideBar: boolean = true
  showHeader: boolean = true
  showTopFilter: boolean = true
  showInLeftSideBar: boolean = true
  resultData: any

  constructor(
    public filterService: FilterService,
    public genericervice: GenericService,
    private router: Router,
  ) {
    this.router.events.subscribe((event) => {
      //console.log('test function');
      if (event instanceof NavigationEnd) {
        this.pageName = event.url.split('/')[1];
        console.log('page name', this.pageName)


        this.genericervice.get(this.pageName);
        this.resultData = this.genericervice.reusltdata;

        

      }

    });
  }

  ngAfterViewInit() {
    console.log('after view init')
  }

  ngOnInit(): void {
    this.controlView()
  }

  getDataFromService(pageName: string) {
    this.data = this.genericervice.get(pageName)
  }

  controlView() {
    if (
      this.pageName == 'offres-emploi' ||
      this.pageName == 'offres-de-stage' ||
      this.pageName == 'offres-alternance' ||
      this.pageName == 'offres-extra' ||
      ///////////////////////////////////////////
      this.pageName == 'candidats' ||
      this.pageName == 'demandes-specifiques' ||
      this.pageName == 'condidatures-spontannes' ||
      ///////////////////////////////////////////
      this.pageName == 'recruteurs' ||
      this.pageName == 'associations-insertion-economique' ||
      this.pageName == 'etablissements-formation' ||
      this.pageName == 'cabinets-recrutement' ||
      ///////////////////////////////////////////
      this.pageName == 'decouverte-des-metiers' ||
      this.pageName == 'metiers-pour-vous' ||
      this.pageName == 'quiz' ||
      ///////////////////////////////////////////

      //////////////////////////////
      this.pageName == 'evenement'
    ) {
      this.showLeftSideBar = true
      this.showHeader = true
      this.showTopFilter = true
      this.showRightSideBar = false
      this.showInLeftSideBar = false
      console.log(this.showLeftSideBar)
    } else if (
      this.pageName == 'soft-skills' ||
      this.pageName == 'hard-skills' ||
      // //////////////////////////////
      this.pageName == 'conseils-pratique' ||
      this.pageName == 'legislations-et-textes-lois' ||
      this.pageName == 'liens-utiles' ||
      this.pageName == 'adresses-utiles' ||
      this.pageName == 'documents' ||
      // //////////////////////////////
      this.pageName == 'actualites-emploi' ||
      // //////////////////////////////
      this.pageName == 'temoignage' ||
      this.pageName == 'sondage' ||
      this.pageName == 'forums' ||
      this.pageName == 'bloggers'
    ) {
      this.showLeftSideBar = false
      this.showHeader = true
      this.showTopFilter = true
      this.showRightSideBar = false
      this.showInLeftSideBar = false
    } else if (this.pageName == 'undfind') {
      this.showLeftSideBar = false
      this.showHeader = false
      this.showTopFilter = false
      this.showRightSideBar = false
      this.showInLeftSideBar = false
    } else if (this.pageName == 'undfind') {
      this.showLeftSideBar = false
      this.showHeader = false
      this.showTopFilter = false
      this.showRightSideBar = false
      this.showInLeftSideBar = false
    } else if (this.pageName == 'guides-emploi') {
      this.showLeftSideBar = true
      this.showHeader = true
      this.showTopFilter = false
      this.showRightSideBar = false
      this.showInLeftSideBar = false
    }
  }

  filtredData(value: any) {
    this.data = value
  }

  getOrientaion(value: any) {
    this.orientation = value
  }
}
