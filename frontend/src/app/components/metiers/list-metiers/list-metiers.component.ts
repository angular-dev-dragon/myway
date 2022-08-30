import {
  Component,
  OnInit,
  ViewChildren,
  ViewChild,
  Input,
} from '@angular/core'
import { MetierService } from 'src/app/shared/services/metier.service'

@Component({
  selector: 'app-list-metiers',
  templateUrl: './list-metiers.component.html',
  styleUrls: ['./list-metiers.component.scss'],
})
export class ListMetiersComponent implements OnInit {
  @Input() Image = ''

  paginate: any = ''
  allOffres: any
  constructor(public metierService: MetierService) {}

  ngOnInit(): void {}

  sort(type: any) {
    this.metierService.listMetiers.sort((a: any, b: any) =>
      a[type].toLowerCase() > b[type].toLowerCase() ? 1 : -1,
    )
  }
}
