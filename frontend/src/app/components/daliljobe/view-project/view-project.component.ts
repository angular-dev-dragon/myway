import {  Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
} from '@angular/router';
import { GenericService } from 'src/app/shared/services/generic.service';
@Component({

  selector: 'app-view-project',
 styleUrls:['./view.scss'],
  templateUrl: './view-project.component.html',
})
export class ViewProjectComponent implements OnInit {
  pageName: string = '';
  p: number = 0;
  data: any = [];
  showLeftSideBar: boolean = true;
  showRightSideBar: boolean = true;
  showHeader: boolean = true;
  showTopFilter: boolean = true;
  resultData: any;
  constructor(
    public genericervice: GenericService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.url.subscribe((res) => {
      console.log(res);
    });

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.pageName = event.url.split('/')[2];
        this.pageName = this.removeAccent(this.pageName);
        console.log(this.pageName)
      }
    });
  }

  ngOnInit(): void {
    this.controlView();
    //  this.getDataFromService(this.pageName);
  }

  getDataFromService(pageName: string) {
    this.data = this.genericervice.get(pageName);
  }

  // #region view conrollers
  controlView() {
    if (
      this.pageName == 'condidat' ||
      this.pageName == 'recruteur' ||
      this.pageName == 'quiz' ||
      this.pageName == 'metier' ||
      this.pageName == 'evenement' ||
      this.pageName == 'demande specifique' ||
      this.pageName == 'candidature spontanee' ||
      this.pageName == 'offre'
    ) {
      this.showLeftSideBar = true;
      this.showHeader = true;
      this.showTopFilter = true;
      this.showRightSideBar = false;
    } else if (
      this.pageName == 'conseils pratique' ||
      this.pageName == 'temoignage' ||
      this.pageName == 'rubrique' ||
      this.pageName == 'sondage' ||
      this.pageName == 'liens utiles' ||
      this.pageName == 'forums' ||
      this.pageName == 'blogeurs' ||
      this.pageName == 'adresses utiles' ||
      this.pageName == 'documents'
    ) {
      this.showLeftSideBar = false;
      this.showHeader = true;
      this.showTopFilter = true;
      this.showRightSideBar = false;
    } else if (this.pageName == 'undfind') {
      this.showLeftSideBar = false;
      this.showHeader = false;
      this.showTopFilter = false;
      this.showRightSideBar = false;
    }
  }
  // #endregion
  // #region REMODULE

  removeAccent = function (s: any) {
    var r = s.toLowerCase();
    r = r.replace(new RegExp('offres'), 'offre');
    r = r.replace(new RegExp('candidats'), 'candidat');
    r = r.replace(new RegExp('demandes-specifiques'), 'demande specifique');
    r = r.replace(
      new RegExp('condidatures-spontannes'),
      'candidature spontanee'
    );
    r = r.replace(new RegExp('recruteurs'), 'recruteur');
    r = r.replace(new RegExp('rubrique-details'), 'rubrique');

    r = r.replace(new RegExp('-', 'g'), ' ');
    r = r.replace(new RegExp('_', 'g'), ' ');

    r = r.replace(new RegExp('[àáâãäå]', 'g'), 'a');
    r = r.replace(new RegExp('æ', 'g'), 'ae');
    r = r.replace(new RegExp('ç', 'g'), 'c');''
    r = r.replace(new RegExp('[èéêë]', 'g'), 'e');
    r = r.replace(new RegExp('[ìíîï]', 'g'), 'i');
    r = r.replace(new RegExp('ñ', 'g'), 'n');
    r = r.replace(new RegExp('[òóôõö]', 'g'), 'o');
    r = r.replace(new RegExp('œ', 'g'), 'oe');
    r = r.replace(new RegExp('[ùúûü]', 'g'), 'u');
    r = r.replace(new RegExp('[ýÿ]', 'g'), 'y');
    return r;
  };
  // #endregion

  orientation: string = '';
  filtredData(value: any) {
    this.data = value;
  }

  getOrientaion(value: any) {
    console.log(value);

    this.orientation = value;
  }
}

// quiz
// metier
// offre
// demande specifique
// candidature spontanee
// recruteur
// candidat
// evenement
// conseils pratique
// adresses utiles
// liens utiles
// documents
// forums
// blogeurs
