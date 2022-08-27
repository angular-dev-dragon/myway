import { Injectable } from '@angular/core';
import { find, of } from 'rxjs';

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
              cards_we_need: [
                {
                  name: '',
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




  get_all_s_card() {
    return this.s_card_info;
  }

  get_show_by_name(name:string) {

    return  of (this.s_card_info.find((i)=>i.name === name))

  }
}



