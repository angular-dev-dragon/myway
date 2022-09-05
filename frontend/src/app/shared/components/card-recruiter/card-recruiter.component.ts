import { Component, Input, OnInit } from '@angular/core'
import { GenericService } from '../../services/generic.service'

@Component({
  selector: 'app-card-recruiter',
  templateUrl: './card-recruiter.component.html',
  styleUrls: ['./card-recruiter.component.scss'],
})
export class CardRecruiterComponent implements OnInit {

  @Input() imageBg = ''
  @Input() logo = ''
  @Input() title = ''
  @Input() type = ''
  @Input() salaries = ''
  @Input() caption = ''
  @Input() id = ''
  @Input() pageName = ''
  @Input() link: any = ''


  constructor(public genericService: GenericService) {}

  ngOnInit(): void {}
}
