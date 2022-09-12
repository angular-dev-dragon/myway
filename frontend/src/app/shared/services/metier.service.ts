import { Injectable } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class MetierService {
  listMetiers: any = [];
  constructor(private router: Router) {
    this.listMetiers = this.listAllMetier;

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.listMetiers = this.listAllMetier;
      }
    });
  }

  listAllMetier: any = [
    {
      id: '582',
      Image: '',
      Intitule: 'Développeur1',
      Secteur: 'Informatique',
      metier: 'DevOps',
    },
    {
      id: '045634',
      Image: '',
      Intitule: 'Ingénieur génie civil et minier ',
      Secteur: 'Informatique',
      metier: 'Developpeur',
    },
    {
      id: '5',
      Image: '',
      Intitule: 'développeur3',
      Secteur: 'Informatique',
      metier: 'Developpeur Back-End',
    },
    {
      id: '58274057256456079582',
      Image: '',
      Intitule: 'Développeur',
      Secteur: 'Textile',
      metier: 'Developpeur Front-End',
    },
    {
      id: '582740572345079582fghdfghdfhg',
      Image: '',
      Intitule: 'Développeur4',
      Secteur: 'Électronique',
      metier: 'Developpeur Front-End',
    },
    {
      id: '582',
      Image: '',
      Intitule: 'Développeur1',
      Secteur: 'Informatique',
      metier: 'DevOps',
    },
    {
      id: '045634',
      Image: '',
      Intitule: 'Ingénieur génie civil et minier ',
      Secteur: 'Informatique',
      metier: 'Developpeur',
    },
    {
      id: '5',
      Image: '',
      Intitule: 'développeur3',
      Secteur: 'Informatique',
      metier: 'Developpeur Back-End',
    },
    {
      id: '58274057256456079582',
      Image: '',
      Intitule: 'Développeur',
      Secteur: 'Textile',
      metier: 'Developpeur Front-End',
    },
    {
      id: '582740572345079582fghdfghdfhg',
      Image: '',
      Intitule: 'Développeur4',
      Secteur: 'Électronique',
      metier: 'Developpeur Front-End',
    },
    {
      id: '582',
      Image: '',
      Intitule: 'Développeur1',
      Secteur: 'Informatique',
      metier: 'DevOps',
    },
    {
      id: '045634',
      Image: '',
      Intitule: 'Ingénieur génie civil et minier ',
      Secteur: 'Informatique',
      metier: 'Developpeur',
    },
    {
      id: '5',
      Image: '',
      Intitule: 'développeur3',
      Secteur: 'Informatique',
      metier: 'Developpeur Back-End',
    },
    {
      id: '58274057256456079582',
      Image: '',
      Intitule: 'Développeur',
      Secteur: 'Textile',
      metier: 'Developpeur Front-End',
    },
    {
      id: '582740572345079582fghdfghdfhg',
      Image: '',
      Intitule: 'Développeur4',
      Secteur: 'Électronique',
      metier: 'Developpeur Front-End',
    },
    {
      id: '582',
      Image: '',
      Intitule: 'Développeur1',
      Secteur: 'Informatique',
      metier: 'DevOps',
    },
    {
      id: '045634',
      Image: '',
      Intitule: 'Ingénieur génie civil et minier ',
      Secteur: 'Informatique',
      metier: 'Developpeur',
    },
    {
      id: '5',
      Image: '',
      Intitule: 'développeur3',
      Secteur: 'Informatique',
      metier: 'Developpeur Back-End',
    },
    {
      id: '58274057256456079582',
      Image: '',
      Intitule: 'Développeur',
      Secteur: 'Textile',
      metier: 'Developpeur Front-End',
    },
    {
      id: '582740572345079582fghdfghdfhg',
      Image: '',
      Intitule: 'Développeur4',
      Secteur: 'Électronique',
      metier: 'Developpeur Front-End',
    },
    {
      id: '582',
      Image: '',
      Intitule: 'Développeur1',
      Secteur: 'Informatique',
      metier: 'DevOps',
    },
    {
      id: '045634',
      Image: '',
      Intitule: 'Ingénieur génie civil et minier ',
      Secteur: 'Informatique',
      metier: 'Developpeur',
    },
    {
      id: '5',
      Image: '',
      Intitule: 'développeur3',
      Secteur: 'Informatique',
      metier: 'Developpeur Back-End',
    },
    {
      id: '58274057256456079582',
      Image: '',
      Intitule: 'Développeur',
      Secteur: 'Textile',
      metier: 'Developpeur Front-End',
    },
    {
      id: '582740572345079582fghdfghdfhg',
      Image: '',
      Intitule: 'Développeur4',
      Secteur: 'Électronique',
      metier: 'Developpeur Front-End',
    },

    {
      id: '582',
      Image: '',
      Intitule: 'Développeur1',
      Secteur: 'Informatique',
      metier: 'DevOps',
    },
    {
      id: '045634',
      Image: '',
      Intitule: 'Ingénieur génie civil et minier ',
      Secteur: 'Informatique',
      metier: 'Developpeur',
    },
    {
      id: '5',
      Image: '',
      Intitule: 'développeur3',
      Secteur: 'Informatique',
      metier: 'Developpeur Back-End',
    },
    {
      id: '58274057256456079582',
      Image: '',
      Intitule: 'Développeur',
      Secteur: 'Textile',
      metier: 'Developpeur Front-End',
    },
    {
      id: '582740572345079582fghdfghdfhg',
      Image: '',
      Intitule: 'Développeur4',
      Secteur: 'Électronique',
      metier: 'Developpeur Front-End',
    },
    {
      id: '582',
      Image: '',
      Intitule: 'Développeur1',
      Secteur: 'Informatique',
      metier: 'DevOps',
    },
    {
      id: '045634',
      Image: '',
      Intitule: 'Ingénieur génie civil et minier ',
      Secteur: 'Informatique',
      metier: 'Developpeur',
    },
    {
      id: '5',
      Image: '',
      Intitule: 'développeur3',
      Secteur: 'Informatique',
      metier: 'Developpeur Back-End',
    },
    {
      id: '58274057256456079582',
      Image: '',
      Intitule: 'Développeur',
      Secteur: 'Textile',
      metier: 'Developpeur Front-End',
    },
    {
      id: '582740572345079582fghdfghdfhg',
      Image: '',
      Intitule: 'Développeur4',
      Secteur: 'Électronique',
      metier: 'Developpeur Front-End',
    },
    {
      id: '582',
      Image: '',
      Intitule: 'Développeur1',
      Secteur: 'Informatique',
      metier: 'DevOps',
    },
    {
      id: '045634',
      Image: '',
      Intitule: 'Ingénieur génie civil et minier ',
      Secteur: 'Informatique',
      metier: 'Developpeur',
    },
    {
      id: '5',
      Image: '',
      Intitule: 'développeur3',
      Secteur: 'Informatique',
      metier: 'Developpeur Back-End',
    },
    {
      id: '58274057256456079582',
      Image: '',
      Intitule: 'Développeur',
      Secteur: 'Textile',
      metier: 'Developpeur Front-End',
    },
    {
      id: '582740572345079582fghdfghdfhg',
      Image: '',
      Intitule: 'Développeur4',
      Secteur: 'Électronique',
      metier: 'Developpeur Front-End',
    },
    {
      id: '582',
      Image: '',
      Intitule: 'Développeur1',
      Secteur: 'Informatique',
      metier: 'DevOps',
    },
    {
      id: '045634',
      Image: '',
      Intitule: 'Ingénieur génie civil et minier ',
      Secteur: 'Informatique',
      metier: 'Developpeur',
    },
    {
      id: '5',
      Image: '',
      Intitule: 'développeur3',
      Secteur: 'Informatique',
      metier: 'Developpeur Back-End',
    },
    {
      id: '58274057256456079582',
      Image: '',
      Intitule: 'Développeur',
      Secteur: 'Textile',
      metier: 'Developpeur Front-End',
    },
    {
      id: '582740572345079582fghdfghdfhg',
      Image: '',
      Intitule: 'Développeur4',
      Secteur: 'Électronique',
      metier: 'Developpeur Front-End',
    },
    {
      id: '582',
      Image: '',
      Intitule: 'Développeur1',
      Secteur: 'Informatique',
      metier: 'DevOps',
    },
    {
      id: '045634',
      Image: '',
      Intitule: 'Ingénieur génie civil et minier ',
      Secteur: 'Informatique',
      metier: 'Developpeur',
    },
    {
      id: '5',
      Image: '',
      Intitule: 'développeur3',
      Secteur: 'Informatique',
      metier: 'Developpeur Back-End',
    },
    {
      id: '58274057256456079582',
      Image: '',
      Intitule: 'Développeur',
      Secteur: 'Textile',
      metier: 'Developpeur Front-End',
    },
    {
      id: '582740572345079582fghdfghdfhg',
      Image: '',
      Intitule: 'Développeur4',
      Secteur: 'Électronique',
      metier: 'Developpeur Front-End',
    },
    {
      id: '582',
      Image: '',
      Intitule: 'Développeur1',
      Secteur: 'Informatique',
      metier: 'DevOps',
    },
    {
      id: '045634',
      Image: '',
      Intitule: 'Ingénieur génie civil et minier ',
      Secteur: 'Informatique',
      metier: 'Developpeur',
    },
    {
      id: '5',
      Image: '',
      Intitule: 'développeur3',
      Secteur: 'Informatique',
      metier: 'Developpeur Back-End',
    },
    {
      id: '58274057256456079582',
      Image: '',
      Intitule: 'Développeur',
      Secteur: 'Textile',
      metier: 'Developpeur Front-End',
    },
    {
      id: '582740572345079582fghdfghdfhg',
      Image: '',
      Intitule: 'Développeur4',
      Secteur: 'Électronique',
      metier: 'Developpeur Front-End',
    },
        {
      id: '582',
      Image: '',
      Intitule: 'Développeur1',
      Secteur: 'Informatique',
      metier: 'DevOps',
    },
    {
      id: '045634',
      Image: '',
      Intitule: 'Ingénieur génie civil et minier ',
      Secteur: 'Informatique',
      metier: 'Developpeur',
    },
    {id:'5',
      Image: '',
      Intitule: 'développeur3',
      Secteur: 'Informatique',
      metier: 'Developpeur Back-End',
    },
    {id:'58274057256456079582',
      Image: '',
      Intitule: 'Développeur',
      Secteur: 'Textile',
      metier: 'Developpeur Front-End',
    },
    {id:'582740572345079582fghdfghdfhg',
      Image: '',
      Intitule: 'Développeur4',
      Secteur: 'Électronique',
      metier: 'Developpeur Front-End',
    },
  ];

  filter(secteurValue: string, metierName = '') {
    this.listMetiers = this.listAllMetier;

    this.checkboxFiltre(metierName, 'Metier');

    if (secteurValue != '') {
      this.listMetiers = this.listMetiers.filter((metier: any) => {
        return metier.Secteur == secteurValue;
      });
    }
  }

  checkboxFiltre(CheckboxList: any, label: any) {
    let newList2;
    let newList3: any = this.listMetiers;
    let isFirstTime: Boolean = true;
    CheckboxList.map((filtre: any) => {
      if (filtre.nativeElement.checked) {
        if (isFirstTime == true) {
          isFirstTime = false;
          newList3 = [];
        }
        newList2 = this.listMetiers;
        newList2 = newList2.filter((offre: any) => {
          return offre[label] == filtre.nativeElement.value;
        });

        newList2.map((list: any) => {
          newList3.push(list);
        });
      }
    });
    this.listMetiers = newList3;
  }
  getlist() {
    return this.listMetiers;
  }
}
