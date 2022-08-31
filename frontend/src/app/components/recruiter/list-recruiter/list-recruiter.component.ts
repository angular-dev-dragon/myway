import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core'
import { RecruteurService } from 'src/app/shared/services/recruteur.service'

@Component({
  selector: 'app-list-recruiter',
  templateUrl: './list-recruiter.component.html',
  styleUrls: ['./list-recruiter.component.scss'],
})
export class ListRecruiterComponent implements OnInit {
  constructor(public recruteurService: RecruteurService) {}
  p: any = ''
  ngOnInit(): void {}

  sort(type: any) {
    this.recruteurService.listRecruteur.sort((a: any, b: any) =>
      a[type].toLowerCase() > b[type].toLowerCase() ? 1 : -1,
    )
  }
  sortbyDate() {
    this.recruteurService.listRecruteur.sort((a: any, b: any) =>
      a.Date < b.Date ? 1 : -1,
    )
  }
  showSidebar: boolean = false

  showFilter() {
    this.showSidebar = !this.showSidebar
  }
}
