import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {












  date: any;
  online: boolean = false;

  selectedCountryAdvanced!: any[];
  filteredCountries!: any[];
  selectedCity: any;
  city: any;
  profileImg: string | undefined;
  profileImgo: string | undefined;






  public contact_Form: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) {
    this.contact_Form = this.fb.group({
      platform: new FormControl('', [Validators.required]),
      user_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150),
      ]),
    });
  }
  ngOnInit() { }

  save_contact_from() {
    if (this.contact_Form.valid) {
      console.log('this.contact_Form', this.contact_Form);
    } else {
      this.contact_Form.markAllAsTouched();
      console.log('not valid');
    }
  }
}
