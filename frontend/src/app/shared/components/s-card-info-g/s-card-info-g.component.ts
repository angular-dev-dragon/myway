
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 's-card-info-g',
  templateUrl: './s-card-info-g.component.html',
  styleUrls: ['./s-card-info-g.component.scss']
})
export class SCardInfoGComponent implements OnInit {



  constructor() {}
  tabView = 5;
  items!: MenuItem[];

  home!: MenuItem;
  itemss!: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: 'Computer' },
      { label: 'Notebook' },
      { label: 'Accessories' },
      { label: 'Backpacks' },
      { label: 'Item' },
    ];

    this.home = { icon: 'pi pi-home' };

    this.itemss = [
      {
        label: 'File',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [{ label: 'Project' }, { label: 'Other' }],
          },
          { label: 'Open' },
          { label: 'Quit' },
        ],
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
        ],
      },
    ];
  }
}
