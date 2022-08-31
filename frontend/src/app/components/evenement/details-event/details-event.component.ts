import { Component, OnInit } from '@angular/core'
import { EvenementService } from 'src/app/shared/services/evenement.service'

@Component({
  selector: 'app-details-event',
  templateUrl: './details-event.component.html',
  styleUrls: ['./details-event.component.scss'],
})
export class DetailsEventComponent implements OnInit {
  constructor(private eventService: EvenementService) {
    this.post = this.eventService.detailsEvent
  }

  ngOnInit(): void {}
  post: any = []
}
