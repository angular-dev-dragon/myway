import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-temoignage',
  templateUrl: './temoignage.component.html',
  styleUrls: ['./temoignage.component.scss'],
})
export class TemoignageComponent implements OnInit {
  public avisForm: FormGroup

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
    })
  }

  ngOnInit(): void {}
  comments: any = [
    {
      fonction: 'Testeur',
      commentaire_intervenent:
        'Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis ed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis',
      date: 'April 03, 2022',
      nom_ou_pseudo: 'Admin 1',
      img: 'http://localhost:4200/assets/images/user.png',
    },
    {
      fonction: 'Devlopper',

      commentaire_intervenent:
        'Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis',
      date: 'April 03, 2022',
      nom_ou_pseudo: 'Admin 1',
    },
    {
      fonction: 'Artisant',

      commentaire_intervenent:
        'Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis',
      date: 'April 03, 2022',
      nom_ou_pseudo: 'Admin 1',
    },
    {
      fonction: 'Livreur',

      commentaire_intervenent:
        'Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis',
      date: 'April 03, 2022',
      nom_ou_pseudo: 'Admin 1',
    },
    {
      fonction: 'Vendeur',

      commentaire_intervenent:
        'Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis',
      date: 'April 03, 2022',
      nom_ou_pseudo: 'Admin 1',
    },
  ]
  public sendAvis() {
    if (this.avisForm.valid) {
      this.avisForm.reset()
    } else {
      this.avisForm.markAllAsTouched()
    }
  }
}
