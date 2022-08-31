import { Component, OnInit, ViewChild } from '@angular/core'

@Component({
  selector: 'app-details-rubrique',
  templateUrl: './details-rubrique.component.html',
  styleUrls: ['./details-rubrique.component.scss'],
})
export class DetailsRubriqueComponent implements OnInit {
  constructor() {
    this.articles = this.allArticles
  }
  articles: any = []
  ngOnInit(): void {}
  allArticles: any = [
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

  @ViewChild('search') searchInput!: any

  filter() {
    this.articles = this.allArticles
    let searchFiltre = this.searchInput.nativeElement.value

    if (searchFiltre != '') {
      this.articles = this.articles.filter((recruteur: any) => {
        return recruteur.titre
          .toLowerCase()
          .includes(searchFiltre.toLowerCase())
      })
    }
  }

  sort(type: any) {
    this.articles.sort((a: any, b: any) =>
      a[type].toLowerCase() > b[type].toLowerCase() ? 1 : -1,
    )
  }
  sortbyDate() {
    this.articles.sort((a: any, b: any) => (a.Date < b.Date ? 1 : -1))
  }
}
