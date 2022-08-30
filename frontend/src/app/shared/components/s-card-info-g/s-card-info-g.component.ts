import { CondidaInfoService } from '../../Services/condida-info/condida-info.service';

import { MegaMenuItem, MenuItem } from 'primeng/api';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { style } from '@angular/animations';
import { SCardInfoGService } from '../../Services/s-card_info_g/s-card-info-g.service';


@Component({
  selector: 's-card-info-g',
  templateUrl: './s-card-info-g.component.html',
  styleUrls: ['./s-card-info-g.component.scss'],
})
export class SCardInfoGComponent implements OnInit {
  tabView = 5;
  items!: MenuItem[];

  home!: MenuItem;
  itemss!: MenuItem[];

  // #region filer

  collapsed = false;
  showSidebar: boolean = false;
  epingledSidebar: boolean = false;
  orientation: any = 'verticale';
  paginate: any = '';

  // #region filer var
  filter_btn: boolean = true;
  offer_filter: boolean = true;
  filter_show: boolean = true;




  info_slids :any = [];


  constructor(
    
    private data: SCardInfoGService,
    public data2: CondidaInfoService

  ) {

   this.info_slids = this.data.get_all_s_card()
  }

  ngOnInit() {}















}













