import { Component, Input, OnInit } from '@angular/core'

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { DynamicDialogRef } from 'primeng/dynamicdialog'
import { CountriesInfoService } from '../../../../../shared/Services/Countries-info/countries-info.service'
@Component({
  selector: 'header-profile-from',
  templateUrl: './header-profile-from.component.html',
  styleUrls: [
    './header-profile-from.component.scss',
    '../../../style/main.scss',
  ],
})
export class HeaderProfileFromComponent implements OnInit {
  @Input() img: string = ''
  date: any
  online: boolean = false

  selectedCountryAdvanced!: any[]
  filteredCountries!: any[]
  selectedCity: any
  city: any
  profileImg: string | undefined
  profileImgo: string | undefined

  public header_profile_form: FormGroup
  constructor(
    private fb: FormBuilder,
    private Countriesinfo: CountriesInfoService,
    private ref: DynamicDialogRef,
  ) {
    this.header_profile_form = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z \u0600-\u06FF]+$'),
      ]),
      // fileImg: new FormControl('', [
      //   Validators.required,
      //   Validators.pattern('^[a-zA-Z \u0600-\u06FF]+$'),
      // ]),
      prenom: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z \u0600-\u06FF]+$'),
      ]),
      // onlineCheckbtn: new FormControl(this.online, []),
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
      job_filde_hero_input: new FormControl('', [
        Validators.required,
        Validators.maxLength(1000),
        Validators.minLength(2),
      ]),
      job_filde_sub_input: new FormControl('', [
        Validators.required,
        Validators.maxLength(1000),
        Validators.minLength(2),
      ]),
      job_filde_sub_child_input: new FormControl('', [
        Validators.required,
        Validators.maxLength(1000),
        Validators.minLength(2),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      borthDate: new FormControl('', [Validators.required]),
      countery: new FormControl('', [Validators.required]),
    })
  }
  ngOnInit() {
    this.Countriesinfo.getCountries().subscribe((res) => {
      this.city = res
    })
  }

  save_header_profile_from() {
    if (this.header_profile_form.valid) {
      this.ref.close()
    } else {
      this.header_profile_form.markAllAsTouched()
    }
  }
}

// private ref: DynamicDialogRef
//  this.ref.close();
