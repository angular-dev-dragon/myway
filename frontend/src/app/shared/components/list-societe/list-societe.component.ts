import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core'

@Component({
  selector: 'app-list-societe',
  templateUrl: './list-societe.component.html',
  styleUrls: ['./list-societe.component.scss'],
})
export class ListSocieteComponent implements OnInit {
  @Input() link: any = ''
  @Input() pageName: any = ''

  @Input() dataList: any = [
    {
      logo:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/3195090/logo.png?1587552503',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/5310523/index.png?1640179035',
      title: 'Total Energies',
      type: 'Start Up',
      salaries: '',
      caption: 'Une Compagnie intégrée multi-énergies',
      secteur: 'Informatique',
    },
    {
      logo:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/4537715/logo.png?1622715420',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/4548600/index.png?1623058769',
      title: 'Aramco S.A',
      type: 'Grande Societe',
      salaries: '',
      caption: 'Une Compagnie intégrée multi-énergies',
      secteur: 'Agriculture',
    },
    {
      logo:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/8124/logo.png?1469002464',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/6192405/index.png?1659520006',
      title: 'Patronas',
      type: 'Multinational',
      salaries: '',
      caption: 'Une Compagnie intégrée multi-énergies',
      secteur: 'Informatique',
    },
    {
      logo:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/1007848/logo.png?1558457886',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/5027463/index.png?1634721315',
      title: 'Total Energies',
      type: 'Multinational',
      salaries: '',
      caption: 'Une Compagnie intégrée multi-énergies',
      secteur: 'Électronique',
    },
    {
      logo:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/69883/logo.png?1621953434',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/6179891/index.png?1659017908',
      title: 'Total Energies',
      type: 'Start Up',
      salaries: '',
      caption: 'Une Compagnie intégrée multi-énergies',
      secteur: 'Informatique',
    },
    {
      logo:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/3195090/logo.png?1587552503',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/5310523/index.png?1640179035',
      title: 'Total Energies',
      type: 'Grande Societe',
      salaries: '',
      caption: 'Une Compagnie intégrée multi-énergies',
      secteur: 'Santé',
    },
    {
      logo:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/3195090/logo.png?1587552503',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/5310523/index.png?1640179035',
      title: 'Total Energies',
      type: 'Grande Societe',
      salaries: '',
      caption: 'Une Compagnie intégrée multi-énergies',
      secteur: 'Santé',
    },
  ]
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`)
  listRecruteur: any = []
  constructor() {}
  p: any = ''
  ngOnInit(): void {}

  sort(type: any) {
    this.listRecruteur.sort((a: any, b: any) =>
      a[type].toLowerCase() > b[type].toLowerCase() ? 1 : -1,
    )
  }
  sortbyDate() {
    this.listRecruteur.sort((a: any, b: any) => (a.Date < b.Date ? 1 : -1))
  }
  showSidebar: boolean = false

  showFilter() {
    this.showSidebar = !this.showSidebar
  }
}
