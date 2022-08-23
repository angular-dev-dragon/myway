import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'

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
      poste: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+212-?)|0)?[0-9]{10}$'),
        Validators.minLength(10),
      ]),
      cv: new FormControl('', [Validators.required]),
      lettreMotivation: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
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
    console.log(event.target.files)
    if (event.target.files) this.cvFile = event.target.files[0].name
    //this.currentInput = event.target.files[i].name
    console.log(this.cvFile)
  }
  onLettrteSelected(event: any) {
    console.log(event.target.files)
    if (event.target.files) this.lettreFile = event.target.files[0].name
    //this.currentInput = event.target.files[i].name
    console.log(this.lettreFile)
  }
}
