import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CountriesInfoService } from '../../../../shared/Services/Countries-info/countries-info.service';



@Component({
  selector: 'Head-Profile',
  templateUrl: './head-profile.component.html',
  styleUrls: ['./head-profile.component.scss', '../../style/main.scss'],
})
export class HeadProfileComponent implements OnInit {
  date: any;
  online: boolean = false;
  profileImg: string | undefined;
  selectedCountryAdvanced!: any[];
  filteredCountries!: any[];
  selectedCity: any;
  city: any;

  public headerProfileForm: FormGroup;
  constructor(
    private c: NgbModalConfig,
    private ms: NgbModal,
    private fb: FormBuilder,
    private Countriesinfo: CountriesInfoService
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
      email: new FormControl('', [Validators.required, Validators.email]),
      borthDate: new FormControl('', [
        Validators.required,
        // Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}$'),
      ]),

      countery: new FormControl('', [Validators.required]),
      // difficulte: new FormControl('', [Validators.required]),
      // recommandation: new FormControl('', [Validators.required]),

      // note: new FormControl('', [Validators.required]),
      // salaire: new FormControl('', [Validators.required]),
      // securite: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
   this.Countriesinfo.getCountries().subscribe(res => {
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
}













