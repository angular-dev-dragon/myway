import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-details-blogeur',
  templateUrl: './details-blogeur.component.html',
  styleUrls: ['./details-blogeur.component.scss'],
})
export class DetailsBlogeurComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  membre: any = {
    nom: 'Hicham',
    prenom: 'Berdouki',
    fonction: 'Mean Stack Developper',
    service: 'Departement It',
    email: 'testEamil@gmail.com',
    telephone: '0600223366',
    nbBlog: 12,
    rating: 4.5,

    resume:
      'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.',
  }
  articles: any = [
    {
      titre: 'B2B Engagement Platform with SAP CX',
      sousTitre: "Sous titre de l'article",
      resume: 'Lorem enim ad minim veniam, quis nostrud exerc  Self',
      etiquette: 'Tag',
      motsCles: ['motCle', 'motCle2'],
      image: 'assets/images/',
    },

    {
      titre: 'Seasalt & SQLI make a perfect fit for digital fashion',
      sousTitre: "Sous titre de l'article",
      resume: "Titre de l'article",
      etiquette: 'Tag',
      motsCles: ['motCle', 'motCle2'],
      image:
        'https://www.sqli.com/sites/default/files/styles/xs_thumbnail_teaser/public/2021-12/SQLI-marketing_2021_Bridgestone-Square.jpg?h=cd2a7045&itok=k4P1Rjtd',
    },
    {
      titre: 'Promoting Lausanne’s Tourism and Development',
      sousTitre: "Sous titre de l'article",
      resume: "Titre de l'article",
      etiquette: 'Tag',
      motsCles: ['motCle', 'motCle2'],
      image:
        'https://www.sqli.com/sites/default/files/styles/xs_thumbnail_teaser/public/2021-12/lausanne-tourism-teaser-image.jpg?h=1e66e246&itok=oIdMhXB3',
    },
    {
      titre: "Titre de l'article",
      sousTitre: "Sous titre de l'article",
      resume: "Titre de l'article",
      etiquette: 'Tag',
      motsCles: ['motCle', 'motCle2'],
    },
    {
      titre: 'Seasalt & SQLI make a perfect fit for digital fashion',
      sousTitre: "Sous titre de l'article",
      resume: "Titre de l'article",
      etiquette: 'Tag',
      motsCles: ['motCle', 'motCle2'],
      image:
        'https://www.sqli.com/sites/default/files/styles/xs_thumbnail_teaser/public/2021-12/SQLI-marketing_2021_Bridgestone-Square.jpg?h=cd2a7045&itok=k4P1Rjtd',
    },
    {
      titre: 'Promoting Lausanne’s Tourism and Development',
      sousTitre: "Sous titre de l'article",
      resume: "Titre de l'article",
      etiquette: 'Tag',
      motsCles: ['motCle', 'motCle2'],
      image:
        'https://www.sqli.com/sites/default/files/styles/xs_thumbnail_teaser/public/2021-12/lausanne-tourism-teaser-image.jpg?h=1e66e246&itok=oIdMhXB3',
    },
    {
      titre: "Titre de l'article",
      sousTitre: "Sous titre de l'article",
      resume: "Titre de l'article",
      etiquette: 'Tag',
      motsCles: ['motCle', 'motCle2'],
    },
  ]
}
