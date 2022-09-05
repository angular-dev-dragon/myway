import { GenericService } from 'src/app/shared/services/generic.service';
import { Component, Input, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-temoignage',
  templateUrl: './temoignage.component.html',
  styleUrls: ['./temoignage.component.scss'],
})
export class TemoignageComponent implements OnInit {
  public avisForm: FormGroup;
  @Input() pageName = '';
  @Input() data:any= [];

  constructor(private fb: FormBuilder) {
    this.avisForm = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z \u0600-\u06FF]+$'),
      ]),
      prenom: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z \u0600-\u06FF]+$'),
      ]),

      reference: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      telephone: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+212-?)|0)?[0-9]{10}$'),
        Validators.minLength(10),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      avis: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }

  ngOnInit(): void {}

  public sendAvis() {
    if (this.avisForm.valid) {
      this.avisForm.reset();
    } else {
      this.avisForm.markAllAsTouched();
    }
  }
}
