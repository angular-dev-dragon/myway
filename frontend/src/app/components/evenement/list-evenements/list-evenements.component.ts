import { Component, OnInit } from '@angular/core'
import { EvenementService } from 'src/app/shared/services/evenement.service'

@Component({
  selector: 'app-list-evenements',
  templateUrl: './list-evenements.component.html',
  styleUrls: ['./list-evenements.component.scss'],
})
export class ListEvenementsComponent implements OnInit {
  constructor(public evenementService: EvenementService) {}
  paginate: number = 0
  ngOnInit(): void {}

  resultData: any = []
  orientation: string = ''
  filtredData(value: any) {
    this.resultData = value
  }

  getOrientaion(value: any) {
    this.orientation = value
  }
}
