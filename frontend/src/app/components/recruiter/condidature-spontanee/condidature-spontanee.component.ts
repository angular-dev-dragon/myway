import { Component, OnInit } from '@angular/core'
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms'

@Component({
  selector: 'app-condidature-spontanee',
  templateUrl: './condidature-spontanee.component.html',
  styleUrls: ['./condidature-spontanee.component.scss'],
})
export class CondidatureSpontaneeComponent implements OnInit {
  public CondidatureForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.CondidatureForm = this.fb.group({
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

      ville: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      pays: new FormControl('', [Validators.required]),
      poste: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+212-?)|0)?[0-9]{10}$'),
        Validators.minLength(10),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),

      cv: new FormControl('', [Validators.required]),
      niveauExperience: new FormControl('', [Validators.required]),
      disponibility: new FormControl('', [Validators.required]),
      secteur: new FormControl('', [Validators.required]),
      domaine: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      ecole: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      diplome: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      specialite: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      posteOccupe: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      anneeObtention: new FormControl('', [Validators.required]),

      lettreMotivation: new FormControl('', [Validators.required]),
      langue: new FormControl('', [Validators.required]),

      niveauLangue: new FormControl('', [Validators.required]),

      message: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      langues: this.fb.array([
        this.fb.group({
          langue: [
            '',
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(30),
            ],
          ],
          niveau: new FormControl('', [Validators.required]),
        }),
      ]),
    })
  }

  ngOnInit(): void {}
  public sendAvis() {
    if (this.CondidatureForm.valid) {
      this.CondidatureForm.reset()
    } else {
      this.CondidatureForm.markAllAsTouched()
    }
  }
  cvFile: any = ''
  lettreFile: any = ''

  onCvSelected(event: any) {
    if (event.target.files) this.cvFile = event.target.files[0].name
    //this.currentInput = event.target.files[i].name
  }
  onLettrteSelected(event: any) {
    if (event.target.files) this.lettreFile = event.target.files[0].name
    //this.currentInput = event.target.files[i].name
  }

  get langues(): FormArray {
    return this.CondidatureForm.get('langues') as FormArray
  }
  newLangue() {
    //
    if (this.langues.valid) {
      this.langues.push(
        this.fb.group({
          langue: [
            '',
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(30),
            ],
          ],
          niveau: new FormControl('', [Validators.required]),
        }),
      )
    } else {
      this.langues.markAllAsTouched()
    }
    //
  }
  deleteLangue(i: any) {
    this.langues.removeAt(i)
    this.listInputs.splice(i, 1)
  }

  listInputs: any = []
}
