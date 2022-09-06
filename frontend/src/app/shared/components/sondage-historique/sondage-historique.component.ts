import { SondageService } from './../../services/sondage.service';
import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-sondage-historique',
  templateUrl: './sondage-historique.component.html',
  styleUrls: ['./sondage-historique.component.scss'],
})
export class SondageHistoriqueComponent implements OnInit {
  @Input() sondage: any;
  @Input() routerlink: any = '';
  public Sondage: any[] = [];
  isValide: boolean = false;
  post: boolean = false;
  incre: any;
  public stopReaction: Boolean = true;
  i: number = 0;
  j: number = 0;
  sondages: any = [];
  constructor(public sondageService: SondageService) {}
  sondageAll: any = [];
  sondageHistoriqueAll: any = [];

  ngOnInit() {
    //this.sondageService.getSondage_S().subscribe((res:any) => {
    let res: any = this.sondages;

    let date = new Date();
    var today = new Date().toISOString().slice(0, 10);

    //
    if (res.length) {
      for (let i in res) {
        //
        if (res[i].date_cloture.slice(0, 10) < today) {
          this.sondageService.allSondages.push(res[i]);
        } else this.Sondage.push(res[i]);
        {
          this.sondageAll = this.Sondage;
        }
      }
      this.sondageAll = [...this.Sondage];
      this.sondageHistoriqueAll = [...this.sondageService.allSondages];

      if (this.Sondage.length) this.Sondage.reverse();
      if (this.sondageService.allSondages.length) this.sondageService.allSondages.reverse();
    }
    // const sondage: any = res;
    // this.Sondage = sondage;

    //current sondage
    //
    //
    // this.currentSondage = this.Sondage.pop();
    //
    //
    // this.sondageHistorique = this.Sondage.reverse()
    //
  }
  bgColor(i: any, j: any) {
    let myStyles = {
      width:
        (this.sondage.question_sondage[i].reponse_sondage[j].nombre_reponse /
          this.sondage.nombre_participants) *
          100 +
        '%',
      'background-color': 'rgb(63 96 109)',
    };
    return myStyles;
  }
  public reponse: any;
  increment(id: any) {
    // this.reponse.nombre_reponse += 1;
    // //
    // this.sondageService.updateChoix_S(id,this.reponse).subscribe(res => {
    //   //  ;
    // })
  }

  disable() {
    this.isValide = !this.isValide;
    this.stopReaction = !this.stopReaction;
  }
  choix: any = '';
  answers: any = [];

  currentSondage: any;
  choisir(currentS: any, choix: any, i: any, j: any) {
    this.choix = choix;
    this.i = i;
    this.j = j;
    this.currentSondage = this.Sondage.find((s) => s._id == currentS._id);
    this.currentSondage.question_sondage[this.i].reponse_sondage[
      this.j
    ].nombre_reponse += 1;

    this.answers[i] =
      this.currentSondage.question_sondage[i].reponse_sondage[j]?._id;
  }
  enregistrer(currentS: any) {}
  public mobileSidebar: boolean = false;
  showFilter: boolean = false;
  filterAvancee = false;

  filter_value: string = '';
  filter_value_date_debut: string = '0';
  filter_value_date_fin: string = '';
  emptyResult = false;
  noResult = true;
  searchMode = false;
}
