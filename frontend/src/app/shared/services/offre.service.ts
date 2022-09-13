import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { of } from 'rxjs';
import { API } from './api.service'

@Injectable({
  providedIn: 'root',
})
export class OffreService {
  constructor(private http: HttpClient) {
    this.listOffres = this.allOffres;
  }

  allOffres: any = [
    {
      id: '1',
      Intitule: 'AHMED',
      TypeContrat: 'CDI',
      Poste:
        ' Développeur Front-End Développeur Front-End Développeur Front-End',
      TypePoste: 'Emploi',
      NomEntreprise: 'Jumia',
      TypeEntreprise: 'StartUp',
      Image: '',
      ville: 'Tanger',
      Secteur: 'Informatique',
      Date: '2023-02-02',
      Competences: 'HTML',
      Pays: 'Maroc',
      NiveauxEtude: 'Bac',
      NiveauxExperience: 'entre 3 et 4',
      langue: 'Français',
      Region: 'Tanger-Tetouan',
    },
    {
      id: '2',
      Intitule: 'Ingénieur génie civil et minier ',
      TypeContrat: 'Anapec',
      Poste: 'technicien en mécanique et électrique mécanique et électrique',
      TypePoste: 'Stage',
      NomEntreprise: 'Smart automation technologies',
      TypeEntreprise: 'StartUp',
      Image: '',
      ville: 'Tétouan',
      Secteur: 'Informatique',
      Date: '2022-02-02',
      Competences: 'HTML',
      Pays: 'Maroc',
      NiveauxEtude: 'Bac',
      NiveauxExperience: 'entre 3 et 4',
      langue: 'Français',
      Region: 'Tanger-Tetouan',
    },
    {
      id: '3',
      Intitule: 'développeur3',
      TypeContrat: 'CDD',
      Poste: 'Développeur Front-End',
      TypePoste: 'Alternance',
      NomEntreprise: 'Jumia',
      TypeEntreprise: 'StartUp',
      Image: '',
      ville: 'Tanger',
      Secteur: 'Informatique',
      Date: '2000-02-02',
      Competences: 'HTML',
      Pays: 'Algérie',
      NiveauxEtude: 'Bac',
      NiveauxExperience: 'entre 1 et 2',
      langue: ['Français', 'arabic'],
      Region: 'Tanger-Tetouan',
    },
    {
      id: '4',
      Intitule: 'Développeur',
      TypeContrat: 'A discuter',
      NomEntreprise: 'Jumia',
      Poste: 'Développeur Back-End',
      TypePoste: 'extra',
      TypeEntreprise: 'StartUp',
      Image: '',
      ville: 'Tétouan',
      Secteur: 'Textile',
      Date: '2022-05-02',
      Competences: 'HTML',
      Pays: 'Maroc',
      NiveauxEtude: 'qualification avant bac',
      NiveauxExperience: 'entre 1 et 2',
      langue: 'Arabe',
      Region: 'Grand Casablanca',
    },
    {
      id: '5',
      Intitule: 'Développeur4',
      TypeContrat: 'CDI',
      NomEntreprise: 'Jumia',
      TypeEntreprise: 'StartUp',
      Poste: 'Développeur Back-End',
      TypePoste: 'Emploi',
      Image: '',
      Secteur: 'Électronique',
      Date: '2022-02-02',
      Competences: 'HTML',
      Pays: 'Algérie',
      ville: 'Tanger',
      Region: 'Grand Casablanca',

      NiveauxEtude: 'qualification avant bac',
      NiveauxExperience: "moins d'un ans",
      langue: 'Espagnol',
    },
  ];
  details: any = [
    {
      id: 1,
      Titre: 'Développeur',
      Poste: 'Développeur full-stack',
      TypeContrat: 'CDI',
      NomEntreprise: 'Smart Automation technologies',
      TypeEntreprise: 'StartUp',
      Image: '',
      Ville: 'Tanger',
      Region: 'Tanger-Tetouan-ElHoceima',
      Secteur: 'Informatique',
      Date_pub: '2022-02-02',
      Date_pos: '2022-02-02',
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
    },
    {
      id: 2,
      Titre: 'Développeur',
      Poste: 'Développeur full-stack',
      TypeContrat: 'CDI',
      NomEntreprise: 'Smart Automation technologies',
      TypeEntreprise: 'StartUp',
      Image: '',
      Ville: 'Tanger',
      Region: 'Tanger-Tetouan-ElHoceima',
      Secteur: 'Informatique',
      Date_pub: '2022-02-02',
      Date_pos: '2022-02-02',
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
    },
    {
      id: 3,
      Titre: 'Développeur',
      Poste: 'Développeur full-stack',
      TypeContrat: 'CDI',
      NomEntreprise: 'Smart Automation technologies',
      TypeEntreprise: 'StartUp',
      Image: '',
      Ville: 'Tanger',
      Region: 'Tanger-Tetouan-ElHoceima',
      Secteur: 'Informatique',
      Date_pub: '2022-02-02',
      Date_pos: '2022-02-02',
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
    },
    {
      id: 4,
      Titre: 'Développeur',
      Poste: 'Développeur full-stack',
      TypeContrat: 'CDI',
      NomEntreprise: 'Smart Automation technologies',
      TypeEntreprise: 'StartUp',
      Image: '',
      Ville: 'Tanger',
      Region: 'Tanger-Tetouan-ElHoceima',
      Secteur: 'Informatique',
      Date_pub: '2022-02-02',
      Date_pos: '2022-02-02',
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
    },
  ];
  listOffres: any = [];

  getById(id: string) {
    return of(this.details.find((i) => i.id === id));
  }

  getlist() {
    return this.listOffres;
  }

  getByIdWishList(ids: any) {
    return this.http.get<any>(API + '/candidat/wishList', {
      headers: new HttpHeaders({
        ids,
      }),
    });
  }

  filter() {}
  checkboxFiltre() {}
}
