import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class GuidesEmploiService {
  listGuides: any = []
  listAllGuides: any = [
    {
      id: 1,
      titre: 'Guide 1',
      description:
        "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).",
      children: [
        {
          id: '1254',
          titre: 'Sous Guide 1.1',
          type: 'faq',
        },
        {
          id: '12515484',

          titre: 'Sous Guide 1.2',
          type: 'post',
        },
        {
          id: '123574',
          titre: 'Sous Guide 1.3',
          type: 'sub',
          children: [
            {
              titre: 'Sous Guide 1.3.1',
              type: 'faq',
            },
            {
              titre: 'Sous Guide 1.3.2',
              type: 'faq',
            },
          ],
        },
      ],
    },
    {
      id: 2,

      titre: 'Guide 2',
      // description:
      //   "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).",
      children: [
        {
          id: '788521',

          titre: 'Sous Guide 2.1',
          type: 'faq',
        },
        {
          id: '012685',

          titre: 'Sous Guide 2.2',
          type: 'post',
        },
        {
          id: '94254365',

          titre: 'Sous Guide 2.3',
          type: 'sub',
          description:
            "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).",

          children: [
            {
              id: '47896',
              titre: 'Sous Guide 2.3.1',
              type: 'faq',
            },
            {
              id: '85464',

              titre: 'Sous Guide 2.3.2',
              type: 'faq',
            },
          ],
        },
      ],
    },
  ]

  getlist() {
    return (this.listGuides = this.listAllGuides)
  }
  getlistById(id: string) {
    this.listGuides = this.listAllGuides
    let detailsGuide = this.listGuides.find((guid: any) => guid.id == id)
    return detailsGuide
  }
  getSubById(id: string, idSub: string) {
    this.listGuides = this.listAllGuides
    let detailsGuide = this.listGuides.find((guid: any) => guid.id == id)
    console.log(detailsGuide)

    let detailsGuide2 = detailsGuide.children.find(
      (guid: any) => guid.id == idSub,
    )
    console.log(detailsGuide2)

    return detailsGuide2
  }
}
