import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { GenericService } from '../../services/generic.service'

@Component({
  selector: 'app-card-guide',
  templateUrl: './card-guide.component.html',
  styleUrls: ['./card-guide.component.scss'],
})
export class CardGuideComponent implements OnInit {
  @Input() pageName: string = ''

  constructor(
    private route: ActivatedRoute,
    private router: Router,

    public genericService: GenericService,
  ) {
    console.log('pageName in guide Card', this.pageName)

    // this.route.params.subscribe((params) => {
    //   console.log(params) //log the entire params object
    //   console.log(params['id']) //log the value of id
    //   if (params['idGuide']) {
    //     //   this.guide = this.guideService.getSubById(
    //     //     params['id'],
    //     //     params['idGuide'],
    //     //   )
    //     // }
    //   }
    // })
  }
  ngOnInit(): void {
    let idGuide = this.genericService.get(this.pageName)?.getlist()[0]?.id
    console.log('🚀 ~ ------------------ idGuide', idGuide)
    this.router.navigate(['/guides-emploi/details-guide/', idGuide])
  }
}
