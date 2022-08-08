import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss', '../layouts/layouts.component.scss'],
})
export class TestComponent implements OnInit {
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content: any) {
    this.modalService.open(
      content,

      {
        size: 'xl',
        scrollable: true,
        modalDialogClass: 'dark-modal transparent-bg',
        centered: true,
        
      }
    );
  }

  ngOnInit(): void {}
  // showconect() {
  //   this.conect = true;
  // }
  // open(content) {
  //   this.modalService.open(content);
  // }
}
