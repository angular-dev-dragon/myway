import { Component, OnInit } from '@angular/core'
import { CondidatureSpontaneeService } from 'src/app/shared/services/condidature-spontanee.service'

@Component({
  selector: 'app-list-condidatures-spontanees',
  templateUrl: './list-condidatures-spontanees.component.html',
  styleUrls: ['./list-condidatures-spontanees.component.scss'],
})
export class ListCondidaturesSpontaneesComponent implements OnInit {
  constructor(
    public condidatureSpontaneeService: CondidatureSpontaneeService,
  ) {}

  ngOnInit(): void {}
}
