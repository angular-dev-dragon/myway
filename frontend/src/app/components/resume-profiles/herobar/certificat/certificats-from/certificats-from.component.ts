import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'certificats-from',
  templateUrl: './certificats-from.component.html',
  styleUrls: ['./certificats-from.component.scss']
})
export class CertificatsFromComponent implements OnInit {
public certificat_form: FormGroup;

  constructor(private fb: FormBuilder, private ref: DynamicDialogRef){
    this.certificat_form = this.fb.group({
      //   langouge_form_langouge_name_input: new FormControl('', [
      //     Validators.required,
      //   ]),
    });
  }
  ngOnInit(): void {
  }
save_certificat_form(){
  if (this.certificat_form.valid) {
    console.log('this.ceducation_from', this.certificat_form);
    this.ref.close();
  } else {
    this.certificat_form.markAllAsTouched();
    console.log('not valid');
  }
}}
