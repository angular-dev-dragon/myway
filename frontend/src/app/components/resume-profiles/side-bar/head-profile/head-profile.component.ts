import { Component, OnInit } from '@angular/core';

// import {MessageService} from 'primeng/api';
import {
  NgbModal,
  NgbModalConfig,
  ModalDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'Head-Profile',
  templateUrl: './head-profile.component.html',
  styleUrls: ['./head-profile.component.scss', '../../style/main.scss'],
})
export class HeadProfileComponent implements OnInit {
  constructor(private ms: NgbModal) {}

  ngOnInit(): void {}

  open(content: any) {
    this.ms.open(content, { centered: true, size: 'xl' });
  }
  // this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}

  // filterCountry(event: any) {
  //   //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
  //   let filtered: any[] = [];
  //   let query = event.query;

  //   for (let i = 0; i < this.countries.length; i++) {
  //     let country = this.countries[i];
  //     if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
  //       filtered.push(country);
  //     }
  //   }

  //   this.filteredCountries = filtered;
  // }














