import { ElementRef, Injectable } from '@angular/core'
import { NavigationEnd, NavigationStart, Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  reponses: any = [];

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.listQuiz = this.allListQuiz;
      }
    });
  }
  allListQuiz: any = [
    {
      id: 'a93asdfasd9 ',

      image:
        'https://wegate.eu/sites/default/files/styles/resize_750x450/public/coursera.jpg?itok=5dhpuGwQ',
      titre: 'HTML CSS JS',
      resume:
        'Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included Bootstrap dropdown JavaScript plugin. They’re toggled by clicking, not by hovering; this is an intentional design decision.',
      domaine: 'Front-End Developpement',
      specialisation: 'Bootstrap Html CSS',
      nbQuestions: 10,
      date: '2022-05-15',
      niveau: 'Avancé',
      note: 5,
      secteur: 'Informatique',
      metier: ['Developpeur', 'Developpeur Front-End'],
    },
    {
      id: 'a93e9 ',

      image:
        'https://wegate.eu/sites/all/themes/wegate_foundation/images/logo-footer.svg',
      titre: 'Backend Developpement',
      resume:
        'Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included Bootstrap dropdown JavaScript plugin. They’re toggled by clicking, not by hovering; this is an intentional design decision.',

      domaine: 'Front-End Developpement',
      specialisation: 'Bootstrap Html CSS',
      nbQuestions: 10,
      date: '2022-05-15',
      niveau: 'Avancé',
      note: 4.5,
      secteur: 'Informatique',
      metier: ['Developpeur'],
    },
    {
      id: 'aew939 ',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/ba/e14875b76f4e799e067d3551076e8c/1200x600_DA.png?auto=format%2Ccompress&dpr=1&w=268',
      titre: 'Quiz Marketing Digitale',
      resume:
        'Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included Bootstrap dropdown JavaScript plugin. They’re toggled by clicking, not by hovering; this is an intentional design decision.',

      domaine: 'Front-End Developpement',
      specialisation: 'Angular Prime Ng',
      nbQuestions: 10,
      date: '2022-05-15',
      niveau: 'Débutant',
      note: 3.5,
      secteur: 'Agriculture',
      metier: ['DevOps'],
    },
    {
      id: 'a939 ',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/14/b2d530f1ad11e7ab380fc0c6c817a8/Search-Thumbnail.jpg?auto=format%2Ccompress&dpr=1&w=268',
      titre: 'Quiz React JS',
      resume:
        'Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included Bootstrap dropdown JavaScript plugin. They’re toggled by clicking, not by hovering; this is an intentional design decision.',
      niveau: 'Intermediare',

      domaine: 'Front-End Developpement',
      specialisation: 'Bootstrap Html CSS',
      nbQuestions: 10,
      date: '2022-05-15',
      note: 4,
      secteur: 'Électronique',
      metier: ['DevOps'],
    },
  ];
  listQuiz: any = this.allListQuiz;

  filter(metierBox: any, secteurSelect: any) {
    this.listQuiz = this.allListQuiz;

    if (secteurSelect != '') {
      this.listQuiz = this.listQuiz.filter((quiz: any) => {
        return quiz.secteur == secteurSelect;
      });
    }
    this.checkboxFiltre(metierBox, 'metier');

    return this.listQuiz;
  }

  checkboxFiltre(CheckboxList: any, label: any) {
    let newList2;
    let newList3: any = this.listQuiz;
    let isFirstTime: Boolean = true;
    CheckboxList.map((filtre: any) => {
      if (filtre.nativeElement.checked) {
        if (isFirstTime == true) {
          isFirstTime = false;
          newList3 = [];
        }

        newList2 = this.listQuiz;
        newList2 = newList2.filter((quiz: any) => {
          return quiz.metier.includes(filtre.nativeElement.value);
        });

        newList2.map((list: any) => {
          newList3.push(list);
        });
      }
    });

    this.listQuiz = newList3;
  }
  getQuiz() {
    return this.listQuiz;
  }
}

