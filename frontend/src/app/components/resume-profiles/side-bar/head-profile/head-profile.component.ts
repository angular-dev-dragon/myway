import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CountriesInfoService } from '../../../../shared/Services/Countries-info/countries-info.service';
// import {MessageService} from 'primeng/api';


@Component({
  selector: 'Head-Profile',
  templateUrl: './head-profile.component.html',
  styleUrls: ['./head-profile.component.scss', '../../style/main.scss'],
})
export class HeadProfileComponent implements OnInit {
  date: any;
  online: boolean = false;

  selectedCountryAdvanced!: any[];
  filteredCountries!: any[];
  selectedCity: any;
  city: any;
  profileImg: string | undefined;
  profileImgo: string | undefined;

  public headerProfileForm: FormGroup;
  constructor(
    private c: NgbModalConfig,
    private ms: NgbModal,
    private fb: FormBuilder,
    private Countriesinfo: CountriesInfoService // private messageService: MessageService
  ) {
    this.headerProfileForm = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z \u0600-\u06FF]+$'),
      ]),
      fileImg: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z \u0600-\u06FF]+$'),
      ]),
      prenom: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z \u0600-\u06FF]+$'),
      ]),
      onlineCheckbtn: new FormControl(this.online, []),
      telephone: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+212-?)|0)?[0-9]{10}$'),
        Validators.minLength(10),
      ]),
      ctiy_inpute: new FormControl('', [
        Validators.required,
        Validators.maxLength(1000),
        Validators.minLength(2),
      ]),
      zip_code_input: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
        Validators.minLength(3),
      ]),
      State_input: new FormControl('', [
        Validators.required,
        Validators.maxLength(1000),
        Validators.minLength(2),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      borthDate: new FormControl('', [Validators.required]),
      countery: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit() {
    this.Countriesinfo.getCountries().subscribe((res) => {
      this.city = res;
    });
  }
  open(content: any) {
    this.ms.open(content, { centered: true, size: 'xl' });
  }
  sendEntretien() {
    if (this.headerProfileForm.valid) {
      console.log('this.headerProfileForm', this.headerProfileForm);
    } else {
      this.headerProfileForm.markAllAsTouched();
      console.log('not valid');
    }
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














