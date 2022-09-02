import { Component, OnInit } from '@angular/core'
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'

@Component({
  selector: 'app-details-metier',
  templateUrl: './details-metier.component.html',
  styleUrls: ['./details-metier.component.scss'],
})
export class DetailsMetierComponent implements OnInit {
  //détails
  details: any = {
    Titre: 'Développeur',
    Poste: 'Développeur full-stack',
    TypeContrat: 'CDI',
    NomEntreprise: 'Smart Automation technologies',
    TypeEntreprise: 'StartUp',
    Image: '',
    Ville: 'Tanger',
    Region: 'Tanger-Tetouan-ElHoceima',
    Secteur: 'Informatique',
    PerspectiveEmploi: 'excellentes',
    Competences: ['HTML', 'CSS', 'Javascript'],
    NiveauxEt: 'Bac+5',
    NiveauxEx: '2 à 5 ans',
    Langues: ['Espagnol', 'Arabe'],
    Salaire: '4000 Dh',
    NombresPoste: '5',
    Adresse: ' Rue el Zrektouni, Imm wahba Et.4 N°9 Tanger',
    Description: [
      {
        Titre: '',
        Texte:
          'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il na pas fait que survivre cinq siècles, mais sest aussi adapté à la bureautique informatique, sans que son contenu nen soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.',
        List: [],
      },
    ],
    Missions: [
      {
        Titre: '',
        Texte: 'Votre mission autant que développeur :',
        List: [
          'Réaliser les développements Back et Front (.net framework & .net core) pour des applications internes.',
          'Participer aux chantiers de rénovation et migration vers des technos de pointe',
          'Assurer la maintenance évolutive et curative des applications existantes.',
        ],
      },
    ],
    ProfilRecherche: [
      {
        Titre: 'Profil recherché :',
        Texte: '',
        List: [
          'Niveau bac + 3/4',
          'Diplôme des sciences de l’information',
          '5 ans d’expérience',
        ],
      },
    ],
    Criteres: [
      {
        Titre: 'Poste proposé :',
        Texte: 'Au sein du pôle Technique, vous aurez pour mission :',
        List: [
          'Réaliser les développements Back et Front (.net framework & .net core) pour des applications internes.',
          'Participer aux chantiers de rénovation et migration vers des technos de pointe',
          'Assurer la maintenance évolutive et curative des applications existantes.',
        ],
      },
      {
        Titre: 'Profil recherché :',
        Texte: '',
        List: [
          'Niveau bac + 3/4',
          'Diplôme des sciences de l’information',
          '5 ans d’expérience',
        ],
      },
    ],
  }
  Det_Ent: any = {
    NomEntreprise: 'Smart Automation Technologies',
    Secteur: 'Informatique',
    SiteInternet: 'www.SatTanger.ma',
    Description:
      "Une société de développement informatique spécialisée dans la création de sites web, de logiciels, et qui intervient également chez vous dans le cadre d'études de projets et d'audit. une société de développement informatique spécialisée dans la création de sites web, de logiciels, et qui intervient également chez vous dans le cadre d'études de projets et d'audit.",
  }
  public postulezForm: FormGroup
  N_Etude: any[]
  secteur: any[]
  salutation: any[]
  value8: any
  FaqForm: any
  constructor(private fb: FormBuilder) {
    this.postulezForm = this.fb.group({
      salutation: new FormControl('', [Validators.required]),
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
      dateNaissance: new FormControl('', [Validators.required]),

      telephone: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+212-?)|0)?[0-9]{10}$'),
        Validators.minLength(10),
      ]),

      email: new FormControl('', [Validators.required, Validators.email]),

      metier: new FormControl('', [Validators.required]),

      niveauEtu: new FormControl('', [Validators.required]),

      niveauExp: new FormControl('', [Validators.required]),

      note: new FormControl('', [Validators.required]),

      salaire: new FormControl('', [Validators.required]),

      securite: new FormControl('', [Validators.required]),
    })
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
    this.N_Etude = [
      { name: 'Qualification avant bac' },
      { name: 'Bac' },
      { name: 'Bac+1' },
      { name: 'Bac+2' },
      { name: 'Bac+3' },
      { name: 'Bac+4' },
      { name: 'Bac+5' },
    ]
    this.secteur = [
      { name: 'Agriculture' },
      { name: 'Électronique' },
      { name: 'Informatique' },
      { name: 'Santé' },
      { name: 'Textile' },
    ]
    this.salutation = [{ name: 'Mme' }, { name: 'Mlle' }, { name: 'Mr' }]
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
    //
  }

  get questions(): FormArray {
    return this.FaqForm.get('questions') as FormArray
  }
  deleteQuestion(i: any) {
    this.questions.removeAt(i)
  }
  sendPostule() {
    if (this.postulezForm.valid) {
    } else {
      this.postulezForm.markAllAsTouched()
    }
  }
}
