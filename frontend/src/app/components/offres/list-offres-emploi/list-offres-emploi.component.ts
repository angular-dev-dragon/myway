import { Component, Input, OnInit } from '@angular/core'
import { OffreService } from 'src/app/shared/services/offre.service'

@Component({
  selector: 'app-list-offres-emploi',
  templateUrl: './list-offres-emploi.component.html',
  styleUrls: ['./list-offres-emploi.component.scss'],
})
export class ListOffresEmploiComponent implements OnInit {
  constructor(public offreService: OffreService) {}

  ngOnInit(): void {}
}
