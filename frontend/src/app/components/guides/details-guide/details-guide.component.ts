import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { GuideService } from 'src/app/shared/services/guide.service'

@Component({
  selector: 'app-details-guide',
  templateUrl: './details-guide.component.html',
  styleUrls: ['./details-guide.component.scss'],
})
export class DetailsGuideComponent implements OnInit {
  guide: any = {}
  constructor(
    private route: ActivatedRoute,
    private guideService: GuideService,
  ) {
    console.log('test')

    this.route.params.subscribe((params) => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      if (params['idGuide']) {
        this.guide = this.guideService.getSubById(
          params['id'],
          params['idGuide'],
        )
      } else {
        this.guide = this.guideService.getlistById(params['id'])
      }
      console.log(this.guide) //log the;
    })
  }

  ngOnInit(): void {}
}
