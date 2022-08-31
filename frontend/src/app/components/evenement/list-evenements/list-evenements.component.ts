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
  sort(type: any) {
    this.evenementService.listEvents.sort((a: any, b: any) =>
      a[type].toLowerCase() > b[type].toLowerCase() ? 1 : -1,
    )
  }
  sortbyDate() {
    this.evenementService.listEvents.sort((a: any, b: any) =>
      a.Date < b.Date ? 1 : -1,
    )
  }
}
