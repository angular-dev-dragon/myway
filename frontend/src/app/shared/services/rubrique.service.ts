import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class RubriqueService {
  constructor() {
    this.listArticles = this.allArticles
  }

  allArticles: any = [
    {
      id: '1',
      titre: 'B2B Engagement Platform with SAP CX',
      sousTitre: "Sous titre de l'article",
      resume: 'Lorem enim ad minim veniam, quis nostrud exerc  Self',
      etiquette: 'Tag',
      motsCles: ['motCle', 'motCle2'],
      image: 'assets/images/',
    },

    {
      id: '2761',
      titre: 'Seasalt & SQLI make a perfect fit for digital fashion',
      sousTitre: "Sous titre de l'article",
      resume: "Titre de l'article",
      etiquette: 'Tag',
      motsCles: ['motCle', 'motCle2'],
      image:
        'https://www.sqli.com/sites/default/files/styles/xs_thumbnail_teaser/public/2021-12/SQLI-marketing_2021_Bridgestone-Square.jpg?h=cd2a7045&itok=k4P1Rjtd',
    },
    {
      id: '1657657',
      titre: 'Promoting Lausanne’s Tourism and Development',
      sousTitre: "Sous titre de l'article",
      resume: "Titre de l'article",
      etiquette: 'Tag',
      motsCles: ['motCle', 'motCle2'],
      image:
        'https://www.sqli.com/sites/default/files/styles/xs_thumbnail_teaser/public/2021-12/lausanne-tourism-teaser-image.jpg?h=1e66e246&itok=oIdMhXB3',
    },
    {
      id: '123452',
      titre: "Titre de l'article",
      sousTitre: "Sous titre de l'article",
      resume: "Titre de l'article",
      etiquette: 'Tag',
      motsCles: ['motCle', 'motCle2'],
    },
    {
      id: '12345',
      titre: 'Seasalt & SQLI make a perfect fit for digital fashion',
      sousTitre: "Sous titre de l'article",
      resume: "Titre de l'article",
      etiquette: 'Tag',
      motsCles: ['motCle', 'motCle2'],
      image:
        'https://www.sqli.com/sites/default/files/styles/xs_thumbnail_teaser/public/2021-12/SQLI-marketing_2021_Bridgestone-Square.jpg?h=cd2a7045&itok=k4P1Rjtd',
    },
    {
      id: '123452',
      titre: 'Promoting Lausanne’s Tourism and Development',
      sousTitre: "Sous titre de l'article",
      resume: "Titre de l'article",
      etiquette: 'Tag',
      motsCles: ['motCle', 'motCle2'],
      image:
        'https://www.sqli.com/sites/default/files/styles/xs_thumbnail_teaser/public/2021-12/lausanne-tourism-teaser-image.jpg?h=1e66e246&itok=oIdMhXB3',
    },
    {
      id: '145325',
      titre: "Titre de l'article",
      sousTitre: "Sous titre de l'article",
      resume: "Titre de l'article",
      etiquette: 'Tag',
      motsCles: ['motCle', 'motCle2'],
    },
  ]
  listArticles: any = []

  getlist() {
   return this.listArticles
}

}
