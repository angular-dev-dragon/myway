import { Injectable } from '@angular/core';
import { find, of, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SCardInfoGService {
  s_card_info: any[];
  constructor() {
    this.s_card_info = [
      {
        name: 'show 2',
        id: 'd342',

        detail: {
          filter: false,
          row: [
            {
              colum: 12,
              all_cards: [
                {
                  name: 'sdfasd',
                  id: 'pk',
                  info: [
                    {
                      logo: 'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/3195090/logo.png?1587552503',
                      imageBg:
                        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/5310523/index.png?1640179035',
                      title: 'Total Energies',
                      type: 'Grande Societe',
                      salaries: '',
                      caption: 'Une Compagnie intégrée multi-énergies',
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    ];
  }
  get_all_s_card()

   {
    return this.s_card_info;
   }

  // get_a_col_in_a_show(show_name: string, coll_name: string, row_name: number = 1) {
  //   return of(
  //     this.s_card_info
  //       .find((i: any) => i.name === show_name)
  //       ?.detail.row[row_name].all_cards.find((i: any) => i.info === coll_name)
  //   );
  // }

  get_a_card_0_in_a_show(show: string, card: string, row: number = 1) {
    return of(
      this.s_card_info
        .find((i: any) => i.name === show)
        ?.detail.row[row].all_cards.find((i: any) => i.name === card)
    );
  }






}



