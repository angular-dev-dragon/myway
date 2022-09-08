import { Component, OnInit } from '@angular/core'
import { GuideService } from '../../services/guide.service'

@Component({
  selector: 'app-card-guide',
  templateUrl: './card-guide.component.html',
  styleUrls: ['./card-guide.component.scss'],
})
export class CardGuideComponent implements OnInit {
  constructor(public guideService: GuideService) {}

  ngOnInit(): void {}
}
