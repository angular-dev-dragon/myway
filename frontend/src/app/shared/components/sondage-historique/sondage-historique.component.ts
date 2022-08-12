import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-sondage-historique',
  templateUrl: './sondage-historique.component.html',
  styleUrls: ['./sondage-historique.component.scss'],
})
export class SondageHistoriqueComponent implements OnInit {
  @Input() sondage: any
  colors = ['warn', 'primary', 'accent']
  constructor() {}

  ngOnInit(): void {}
  bgColor(i: any, j: any) {
    let myStyles = {
      width:
        (this.sondage.question_sondage[i].reponse_sondage[j].nombre_reponse /
          this.sondage.nombre_participants) *
          100 +
        '%',
      'background-color': 'rgb(63 96 109)',
    }
    return myStyles
  }
}
