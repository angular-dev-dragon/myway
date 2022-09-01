import { Component, OnInit } from '@angular/core'
import { RubriqueService } from 'src/app/shared/services/rubrique.service'

@Component({
  selector: 'app-details-rubrique',
  templateUrl: './details-rubrique.component.html',
  styleUrls: ['./details-rubrique.component.scss'],
})
export class DetailsRubriqueComponent implements OnInit {
  constructor(public rubriqueService: RubriqueService) {}

  ngOnInit(): void {}

  resultData: any = []
  orientation: string = ''
  filtredData(value: any) {
    this.resultData = value
  }

  getOrientaion(value: any) {
    console.log(value)

    this.orientation = value
  }
}
