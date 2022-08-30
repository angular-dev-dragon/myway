import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-details-demandes-specifiques',
  templateUrl: './details-demandes-specifiques.component.html',
  styleUrls: ['./details-demandes-specifiques.component.scss'],
})
export class DetailsDemandesSpecifiquesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  demande: any = {
    membre: {
      nom: 'Hicham',
      prenom: 'Berdouki',
      fonction: 'Mean Stack Developper',
      service: 'Departement It',
      email: 'testEamil@gmail.com',
      telephone: '0600223366',
      nbBlog: 12,
      rating: 4,
      id: '341324',

      resume:
        'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.',
    },

    Titre: 'Développeur',
    Poste: 'Développeur full-stack',
    TypeContrat: 'Anapec',
    TypePoste: 'Stage Alternance',

    Image: '',
    Ville: 'Tanger',
    Region: 'Tanger-Tetouan-ElHoceima',
    Secteur: 'Informatique',
    Date_pub: '2022-02-02',
    Date_pos: '2022-02-02',
    Competences: ['HTML', 'CSS', 'Javascript'],
    NiveauxEt: 'Bac+5',
    NiveauxEx: '2 à 5 ans',
    Langues: 'Espagnol',
    Salaire: '4000 Dh',
    NombresPoste: '5',
    Adresse: 'Tanger',
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
        Texte: 'Au sein du pôle Technique, vous aurez pour mission :',
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
}
