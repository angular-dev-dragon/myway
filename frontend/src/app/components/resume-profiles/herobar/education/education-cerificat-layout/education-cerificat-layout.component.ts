import { Component, OnInit } from '@angular/core';



import { DynamicDialogRef } from 'primeng/dynamicdialog';



@Component({
  selector: 'app-education-cerificat-layout',
  templateUrl: './education-cerificat-layout.component.html',
  styleUrls: ['./education-cerificat-layout.component.scss'],
})
export class EducationCerificatLayoutComponent implements OnInit {
  constructor(private ref: DynamicDialogRef) {}
  ngOnInit() {}
  save_ed_ce_froms() {
    this.ref.close();
  }
}
