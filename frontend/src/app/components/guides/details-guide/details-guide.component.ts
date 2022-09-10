import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import { GuidesEmploiService } from 'src/app/shared/services/guides-emploi.service'

@Component({
  selector: 'app-details-guide',
  templateUrl: './details-guide.component.html',
  styleUrls: ['./details-guide.component.scss'],
})
export class DetailsGuideComponent implements OnInit {
  guide: any = {}
  constructor(
    private route: ActivatedRoute,
    private guideService: GuidesEmploiService,
    private router: Router,
  ) {
    console.log('test')

    this.route.params.subscribe((params) => {
      // console.log(params) //log the entire params object
      //console.log(params['id']) //log the value of id
      if (params['idGuide']) {
        this.guide = this.guideService.getSubById(
          params['id'],
          params['idGuide'],
        )
        if (this.guide.description == '') {
          if (this.guide.children[0].type == 'faq') {
            this.router.navigate(['/guides-emploi/faq'])
          } else if (this.guide.children[0].type == 'post') {
            this.router.navigate(['/guides-emploi/details-guide/article/1'])
          }
        }
      } else {
        this.guide = this.guideService.getlistById(params['id'])
        console.log('entred to else')
      }
      console.log(this.guide) //log the;
    })
  }

  ngOnInit(): void {}
}
