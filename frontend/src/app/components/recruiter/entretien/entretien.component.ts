import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-entretien',
  templateUrl: './entretien.component.html',
  styleUrls: ['./entretien.component.scss'],
})
export class EntretienComponent implements OnInit {
  public entretienForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.entretienForm = this.fb.group({
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

      telephone: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+212-?)|0)?[0-9]{10}$'),
        Validators.minLength(10),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),

      noteEntretien: new FormControl('', [Validators.required]),
      difficulte: new FormControl('', [Validators.required]),
      recommandation: new FormControl('', [Validators.required]),

      note: new FormControl('', [Validators.required]),
      salaire: new FormControl('', [Validators.required]),
      securite: new FormControl('', [Validators.required]),
    })
  }
  sendEntretien() {
    if (this.entretienForm.valid) {
      console.log('this.entretienForm', this.entretienForm)
    } else {
      this.entretienForm.markAllAsTouched()
    }
  }

  ngOnInit(): void {}
  entretien: any = {
    noteEntretien: 3.5,
    difficulte: 2.5,
    recommandation: 3,
    note: 4.5,
    salaire: 4,
    securite: 4.5,
  }
}
