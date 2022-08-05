import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-details-recruiter',
  templateUrl: './details-recruiter.component.html',
  styleUrls: ['./details-recruiter.component.scss'],
})
export class DetailsRecruiterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  recruiter: any = {
    logo:
      'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/3195090/logo.png?1587552503',
    imageBg:
      'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/5310523/index.png?1640179035',
    title: 'Total Energies',
    type: 'Grande Societe',
    salaries: '',
    caption: 'Une Compagnie intégrée multi-énergies',
  }
  items: any = [
    {
      label: 'Presentation',
      icon: 'pi pi-fw pi-home',
      routerLink: ['presentation'],
    },
    { label: 'faq', icon: 'pi pi-fw pi-calendar', routerLink: ['faq'] },
    { label: 'Avis', icon: 'pi pi-fw pi-pencil', routerLink: ['avis'] },
    { label: 'Documentation', icon: 'pi pi-fw pi-file' },
    { label: 'Settings', icon: 'pi pi-fw pi-cog' },
  ]
}
