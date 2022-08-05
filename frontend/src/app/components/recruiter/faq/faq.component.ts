import { Component, OnInit } from '@angular/core'
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms'

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  public FaqForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.FaqForm = this.fb.group({
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
      questions: this.fb.array([
        this.fb.group({
          questionValue: [
            '',
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(30),
            ],
          ],
        }),
      ]),
    })
  }

  ngOnInit(): void {}
  questionReponse: any = [
    {
      question: 'Est-ce si compliqué de créer son entreprise ?',
      reponse:
        ' On considère généralement que la création d’entreprise est compliquée, mais le raisonnement se limite – et c’est une erreur – aux formalités de création de l’entreprise c’est-à-dire aux démarches à accomplir pour lui donner naissance et l’immatriculer. Ce formalisme est, en effet, parfois complexe.',
    },
    {
      question: "Quelle est l'adresse de Patek Philippe France ?",
      reponse: ' Patek Philippe France est situé au 10 pl Vendôme, 75001 Paris',
    },
    {
      question:
        'Quelles sont les prestations et services que propose SOS Médecins Paris19 Visites, Consultations et Téléconsultations ? ',
      reponse:
        '  SOS Médecins Paris19 Visites, Consultations et Téléconsultations propose les prestations et services suivants: 24h/24, 7j/7 / Visites à domicile / Soins techniques',
    },
    {
      question: 'Est-ce si compliqué de créer son entreprise ?',
      reponse:
        ' On considère généralement que la création d’entreprise est compliquée, mais le raisonnement se limite – et c’est une erreur – aux formalités de création de l’entreprise c’est-à-dire aux démarches à accomplir pour lui donner naissance et l’immatriculer. Ce formalisme est, en effet, parfois complexe.',
    },
    {
      question: "Quelle est l'adresse de Patek Philippe France ?",
      reponse: ' Patek Philippe France est situé au 10 pl Vendôme, 75001 Paris',
    },
    {
      question:
        'Quelles sont les prestations et services que propose SOS Médecins Paris19 Visites, Consultations et Téléconsultations ? ',
      reponse:
        '  SOS Médecins Paris19 Visites, Consultations et Téléconsultations propose les prestations et services suivants: 24h/24, 7j/7 / Visites à domicile / Soins techniques',
    },
  ]
  public sendQuestion() {
    if (this.FaqForm.valid) {
      this.FaqForm.reset()
    } else {
      this.FaqForm.markAllAsTouched()
    }
  }
  newQuestion() {
    console.log(this.questions.valid)
    if (this.questions.valid) {
      this.questions.push(
        this.fb.group({
          questionValue: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(30),
          ]),
        }),
      )
    } else {
      this.questions.markAllAsTouched()
    }
    //  console.log(this.questions)
  }

  get questions(): FormArray {
    return this.FaqForm.get('questions') as FormArray
  }
  deleteQuestion(i: any) {
    this.questions.removeAt(i)
  }
}
