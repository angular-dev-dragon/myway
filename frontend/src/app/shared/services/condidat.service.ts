import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import { API } from './api.service'

@Injectable({
  providedIn: 'root',
})
export class CondidatService {
  a: any
  condidats_list: any[] = []
  // #endregion
  allCondidat: any = [
    {
      info: {
        id: '341324',
        name: {
          first_name: 'dfhgfg',
          last_name: 'fghfdgh',
        },
        age: 23,
        borthday: '1999/03/5',

        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'Maroc',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
          region: 'Tanger-Tetouan',
        },
        description: 'i am a web developer',
        img: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
        job_post: {
          years_of_ex: 10,
          job_title: 'web developer',
          job_description: 'job_description',
          job_type: 'job_type',
          job_salary: 'job_salary',
          job_salary_type: 'job_salary_type',
          contaract_type: 'contaract_type',
          secteur: 'Informatique',
        },
        contact: [
          {
            url: 'https://github.com/Ahmed-dev-dragon',
            platfrom: 'github',
          },
          {
            url: 'https://www.facebook.com/ahmed.dev.dragon',
            platfrom: 'facebook',
          },
          {
            platfrom: 'gmail',
            url: 'https://mail.google.com/mail/u/0/?tab=rm',
          },
          {
            platfrom: 'linkedin',
            url:
              'https://www.linkedin.com/posts/scottdresden_next-generation-silent-drone-achieves-major-activity-6885948728314736640-eH9i/',
          },
        ],

        about_me: {
          about_me_title: 'about_me_title',
          about_me_description: 'about_me_description',
        },
        expectations: {
          fild_description: 'fild_description',

          contaract_type: 'contaract_type',
          salier: 'salier',
          avalibal: 'avalibal_time',
        },
        skills_tach: [
          {
            label: 'Python',
            niveau: 'niveau1',
          },
          {
            label: 'Javascript',
            niveau: 'niveau2',
          },
          {
            label: 'Ruby',
            niveau: 'niveau3',
          },
          {
            label: 'Angular',
            niveau: 'niveau4',
          },
        ],
        soft_skills: [
          { label: 'Travail en group', niveau: 'niveau4' },
          { label: 'Manager un projet', niveau: 'niveau1' },
          { label: 'Gestion de stress', niveau: 'niveau2' },
        ],
        languages: [
          {
            label: 'Anglais',
            niveau: 'niveau4',
          },
          {
            label: 'Arabe',
            niveau: 'niveau1',
          },
          {
            label: 'Francais',
            niveau: 'niveau3',
          },
          {
            label: 'Espagnol',
            niveau: 'niveau2',
          },
        ],
        education: [
          {
            education_name: ' frotntend devlopment',
            education_description:
              'kja ppet was creaand back-end develThis snippet was creaand back-end devels creaand back-end develop',
            education_school: 'solicode',
            education_start_date: '2018',
            education_end_date: '2020',
            education_city: 'tanger',
            srtificate: [
              {
                srtificate_name: 'js bootcamp',
                srtificate_description:
                  ' This snippet was created to help web designers, front-end and back-end developThis snippet was created to help web designers, front-end and back-end developThis snippet was created to help web designers, front-end and back-end develop',
                srtificate_img:
                  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-of-appreciation-design-template-c46b6dc447f94b068a04728bd695cc4c_screen.jpg?ts=1608659484',
                srtificate_url:
                  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-of-appreciation-design-template-c46b6dc447f94b068a04728bd695cc4c_screen.jpg?ts=1608659484',
              },
            ],
            deplome: [
              {
                deplome_name: 'full stack devloper',
                deplome_description:
                  'help web designers, front-end and back-end de',
                deplome_img:
                  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-of-appreciation-design-template-c46b6dc447f94b068a04728bd695cc4c_screen.jpg?ts=1608659484',
                deplome_url:
                  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-of-appreciation-design-template-c46b6dc447f94b068a04728bd695cc4c_screen.jpg?ts=1608659484',
              },
            ],
          },
          {
            education_name: 'english literater',
            education_description:
              'This snippet was created to help web designers, front-end and back-end developThis snippet was created to help web designers, front-end and back-end developThis snippet was created to help web designers, front-end and back-end develop',
            education_school: 'abd malik saidi',
            education_start_date: '2017',
            education_end_date: '2018',
            education_city: 'titwan',
            srtificate: [
              {
                srtificate_name: 'web dervloper',
                srtificate_description:
                  ' This snippet was created to help web designers, front-end and back-end developThis snippet was created to help web designers, front-end and back-end developThis snippet was created to help web designers, front-end and back-end develop',
                srtificate_img:
                  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-of-appreciation-design-template-c46b6dc447f94b068a04728bd695cc4c_screen.jpg?ts=1608659484',
                srtificate_url:
                  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-of-appreciation-design-template-c46b6dc447f94b068a04728bd695cc4c_screen.jpg?ts=1608659484',
              },
            ],
            deplome: [
              {
                deplome_name: 'deplome_name',
                deplome_description:
                  'help web designers, front-end and back-end de',
                deplome_img:
                  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-of-appreciation-design-template-c46b6dc447f94b068a04728bd695cc4c_screen.jpg?ts=1608659484',
                deplome_url:
                  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-of-appreciation-design-template-c46b6dc447f94b068a04728bd695cc4c_screen.jpg?ts=1608659484',
              },
            ],
          },
        ],

        // experience: [
        //   {
        //     experience_job_title: 'full stack devoper',
        //     experience_company: 'netflix',
        //     experience_start_date: '2019-07-15',
        //     experience_end_date: '2022-11-28',
        //     experience_city: 'tanger',

        //     experience_job_description:
        //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. .',
        //     experience_job_type: 'experience_job_type',
        //     experience_he_gine: [
        //       'time orginistion',
        //       'project ourgisiion',
        //       'work on group',
        //     ],
        //     experience_roul: [
        //       'team manager',
        //       ' fullstack devloper',
        //       ' contant manager',
        //     ],
        //   },
        //   {
        //     experience_job_title: 'web devloper',
        //     experience_company: 'sat',
        //     experience_start_date: '2019-07-15',
        //     experience_end_date: '2022-11-28',
        //     experience_city: 'tanger',

        //     experience_job_description:
        //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. .',
        //     experience_job_type: 'experience_job_type',
        //     experience_he_gine: [
        //       'time orginistion',
        //       'project ourgisiion',
        //       'work on group',
        //     ],
        //     experience_roul: [
        //       'team manager',
        //       ' fullstack devloper',
        //       ' contant manager',
        //     ],
        //   },
        //   {
        //     experience_job_title: 'manger',
        //     experience_company: 'google',
        //     experience_start_date: '2019-07-15',
        //     experience_end_date: '2022-11-28',
        //     experience_city: 'tanger',

        //     experience_job_description:
        //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. .',
        //     experience_job_type: 'experience_job_type',
        //     experience_he_gine: [
        //       'time orginistion',
        //       'project ourgisiion',
        //       'work on group',
        //     ],
        //     experience_roul: [
        //       'team manager',
        //       ' fullstack devloper',
        //       ' contant manager',
        //     ],
        //   },
        // ],
        Achievements: {
          achievement_name: 'achievement_name',
          achievement_description: 'achievement_description',
        },
        projects: [
          {
            project_name: 'project_name',
            project_description: 'project_description',
            project_url: 'prject_url',
          },
        ],
        hobbies: [
          'sport',
          'programing',
          ' dsingen',
          'sport',
          'programing',
          ' dsingen',
        ],
      },
      style: [
        {
          coler_one: '#f5f5f5',
          coler_two: '#f5f5f5',
          coler_three: '#f5f5f5',
        },
      ],
      // history: {
      //   created_at: '2020-05-06T00:00:00.000Z',
      //   updateds: [
      //     {
      //       updated_at: '2020-05-06T00:00:00.000Z',
      //       img: 'assets/images/condida.jpg',
      //     },
      //   ],
      // },

      tag: ['web', 'developer', 'art', 'kldin'],
      translations: {
        fr: {
          nom: 'Hicham',
          prenom: 'Berdouki',
          nationalite: 'Marocain',

          secteurActivite: 'Informatique',
          profession: 'Developpeur Web',
          disponibilite: 'Immediate',
        },
      },
      dateNaissance: '1999-08-05',
      email: 'hicham.mail@gmail.com',
      telephone: '0603861321',
      image: 'https://www.bootdey.com/img/Content/avatar/avatar6.png',

      cordeonneeNum: [
        {
          label: 'github',
          valeur: 'https://github.com/Ahmed-dev-dragon',
        },
        {
          label: 'facebook',
          valeur: 'https://www.facebook.com/ahmed.dev.dragon',
        },
        {
          label: 'gmail',
          valeur: 'https://www.facebook.com/ahmed.dev.dragon',
        },
      ],
      cordonneesGeo: {
        translations: {
          fr: {
            adresse: '22, Rue place des Mozzart',
            pays: 'Maroc',
            ville: 'Tanger',
          },
        },
      },

      experience: [
        {
          translations: {
            fr: {
              designation: 'Full Stack devlopper',
              cadreExperience: 'Anapec',
              niveauExperience: 'Debutant',
              typeOrganisation: 'Start-Up',
              nomOrganisation: 'Smart Automation',

              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. ',
            },
          },
          cordonneesGeo: {
            translations: {
              fr: {
                pays: 'Maroc',
                ville: 'Tanger',
              },
            },
          },
          dateDebut: '2017-11-04',
          dateFin: '2017-12-31',
        },
        {
          translations: {
            fr: {
              designation: 'MEAN Stack Developper',
              cadreExperience: 'CDI',
              niveauExperience: 'Senior',
              typeOrganisation: 'Grande Entreprise',
              nomOrganisation: 'Dell',

              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. ',
            },
          },
          cordonneesGeo: {
            translations: {
              fr: {
                pays: 'Maroc',
                ville: 'Tanger',
              },
            },
          },
          dateDebut: '2019-01-19',
          dateFin: '2020-02-12',
        },
      ],
      formation: [
        {
          id: '00123654',
          translations: {
            fr: {
              intitule: 'TS en Developpement Informatique',
              description:
                'Le technicien spécialisé en développement informatique est en charge du développement et de la maintenance des applications informatiques. Il intervient, généralement pour le compte de sociétés de service et d’ingénierie informatique, dans de nombreux domaines applicatifs (industrie, gestion, loisirs, …) En amont, il est réceptif aux attentes du client, il étudie le cahier des charges, les capacités de l’environnement technique et les contraintes du système de production du client. En aval, il participe à la mise en exploitation et au support technique de l’application.',
              reconnaissance: 'Diplome',
              nomEtablisement: 'ISGI',
              typeFormation: 'Formation Diplomante',
              natureFormation: 'Hybride',
              pays: 'France',
              ville: 'Toulouse',
              niveauEtude: 'Bac +2',
              secteurActivite: 'Informatique',
            },
          },
          typeObjet: 'pdf',
          cheminAssocie: 'http://infolab.stanford.edu/pub/papers/google.pdf',
          dateDebut: '2017-09-12',
          dateFin: '2019-06-10',
        },
        {
          id: '00123654',
          translations: {
            fr: {
              intitule: 'Licence LIAM',
              description:
                'Le technicien spécialisé en développement informatique est en charge du développement et de la maintenance des applications informatiques. Il intervient, généralement pour le compte de sociétés de service et d’ingénierie informatique, dans de nombreux domaines applicatifs (industrie, gestion, loisirs, …) En amont, il est réceptif aux attentes du client, il étudie le cahier des charges, les capacités de l’environnement technique et les contraintes du système de production du client. En aval, il participe à la mise en exploitation et au support technique de l’application.',
              reconnaissance: 'Diplome',
              nomEtablisement: 'Faculté des Sciences et Téchniques',
              typeFormation: 'Formation Diplomante',
              natureFormation: 'Hybride',

              pays: 'Maroc',
              ville: 'Tanger',
              niveauEtude: 'Bac +3',
              secteurActivite: 'Informatique',
            },
          },

          dateDebut: '2017-09-12',
          dateFin: '2019-06-10',
        },
        {
          id: '00123654',
          translations: {
            fr: {
              intitule: 'BAC Sciences Physiques ',
              reconnaissance: 'Diplome',
              nomEtablisement: 'Lycee Mohammed 5',
              pays: 'Maroc',
              ville: 'Casablanca',

              typeFormation: 'Formation Initiale',
              natureFormation: 'Classic',

              niveauEtude: 'Bac',
              secteurActivite: 'Globale',
            },
          },
          typeObjet: 'image',

          cheminAssocie:
            'https://st4.depositphotos.com/1871501/39151/i/450/depositphotos_391517732-stock-photo-hassan-mosque-sunset-casablanca-morocco.jpg',

          dateDebut: '2017-09-12',
          dateFin: '2019-06-10',
        },
        {
          id: '145896',
          translations: {
            fr: {
              intitule: 'JS Bootcamp',
              description:
                ' This snippet was created to help web designers, front-end and back-end developThis snippet was created to help web designers, front-end and back-end developThis snippet was created to help web designers, front-end and back-end develop',

              reconnaissance: 'Certificat',
              nomEtablisement: 'Université Harvard',
              typeFormation: 'Formation Certifiante',
              pays: 'États-Unis',
              ville: 'Cambridge',
              natureFormation: 'En ligne',
              niveauEtude: '',
              secteurActivite: 'Informatique',
            },
          },
          typeObjet: 'link',

          cheminAssocie: 'https://welovedevs.com/app/fr/tests/c-winforms',

          dateDebut: '2021-12',
          dateFin: '2022-02',
        },
      ],
    },

    // #region just one
    {
      info: {
        id: '1234',
        name: {
          first_name: 'ahmfghdd',
          last_name: 'fgofghmar',
        },
        age: 23,
        borthday: '1999/03/5',
        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'Algérie',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
          secteur: 'Informatique',
          region: 'Grand Casablanca',
        },
        description: 'i am a web developer',
        img: 'https://www.bootdey.com/img/Content/avatar/avatar6.png',
        job_post: {
          years_of_ex: 10,
          job_title: 'title_job',
          job_description: 'job_description',
          job_type: 'job_type',
          job_needed_experience: 'job_experience',
          job_salary: 'job_salary',
          job_salary_type: 'job_salary_type',
          job_salary_currency: 'job_salary_currency',
          contaract_type: 'contaract_type',
          contaract_period: 'contaract_period',
          contaract_description: 'contaract_duration',
          are_you_ready: {
            avalibal: true,
            avalibal_description: 'avalibal_description',
            avalibal_time: 'avalibal_time',
          },
        },
        contact: [
          {
            patform: 'github',
            url: 'https://github.com/Ahmed-dev-dragon',
            icon: 'fa fa-github',
          },
          {
            patform: 'facebook',
            url: 'https://www.facebook.com/ahmed.dev.dragon',
            icon: 'fa fa-facebook',
          },
        ],
        about_me: {
          about_me_title: 'about_me_title',
          about_me_description: 'about_me_description',
        },
        expectations: {
          fild_description: 'fild_description',
          plaise: 'plaise',
          plaise_description: 'plaise_description',
          contaract_type: 'contaract_type',
          salier: 'salier',
        },
        skills: [
          {
            skill_name: 'skill_name',
            persant: '60%',
          },
        ],
        languages: [
          {
            language_name: 'language_name',
            language_description: 'language_description',
            language_img: 'assets/images/condida.jpg',
            persant: '60%',
          },
        ],
        education: [
          {
            ed_lavel: 'bac + 3',
            education_name: 'education_name',
            education_description: 'education_description',
            education_school: 'education_school',
            education_start_date: 'education_start_date',
            education_end_date: 'education_end_date',
            srtificate: [
              {
                srtificate_name: 'srtificate_name',
                srtificate_description: 'srtificate_description',
                srtificate_img: 'assets/images/condida.jpg',
                srtificate_date: 'srtificate_date',
                srtificate_url: 'srtificate_url',
                srtificate_type: 'srtificate_type',
                setifacate_school: 'setifacate_school',
              },
            ],
            deplome: [
              {
                deplome_name: 'deplome_name',
                deplome_description: 'deplome_description',
                deplome_img: 'assets/images/condida.jpg',
                deplome_date: 'deplome_date',
                deplome_url: 'deplome_url',
                deplome_type: 'deplome_type',
                deplome_school: 'deplome_school',
                deplome_country: 'deplome_country',
                deplome_fild: 'deplome_fild',
              },
            ],
          },
        ],

        experience: [
          {
            experience_description: 'experience_description',
            experience_start_date: 'experience_start_date',
            experience_end_date: 'experience_end_date',
            experience_company: 'experience_company',
            experience_job_title: 'experience_job_title',
            experience_job_description: 'experience_job_description',
            experience_job_type: 'experience_job_type',
            experience_job_salary: 'experience_job_salary',
            experience_job_salary_type: 'experience_job_salary_type',
          },
        ],
        Achievements: {
          achievement_name: 'achievement_name',
          achievement_description: 'achievement_description',
        },
        projects: [
          {
            project_name: 'project_name',
            project_description: 'project_description',
            project_url: 'prject_url',
          },
        ],
        hobbies: [
          {
            hobby_name: 'hobby_name',
            hobby_description: 'hobby_description',
            hobby_icon: 'assets/images/condida.jpg',
          },
        ],
      },
      style: [
        {
          coler_one: '#f5f5f5',
          coler_two: '#f5f5f5',
          coler_three: '#f5f5f5',
        },
      ],
      history: {
        created_at: '2020-05-06T00:00:00.000Z',
        updateds: [
          {
            updated_at: '2020-05-06T00:00:00.000Z',
            img: 'assets/images/condida.jpg',
          },
        ],
      },

      tag: ['web', 'developer', 'art', 'kldin'],
    },

    {
      info: {
        id: '1111',
        name: {
          first_name: 'hjlkhjkahmd',
          last_name: 'ojklmar',
        },
        age: 23,
        borthday: '1999/03/5',

        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'Maroc',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
          region: 'Grand Casablanca',
          secteur: 'Agriculturre',
        },
        description: 'i am a web developer',
        img: 'https://www.bootdey.com/img/Content/avatar/avatar4.png',
        job_post: {
          years_of_ex: 10,
          job_title: 'title_job',
          job_description: 'job_description',
          job_type: 'job_type',
          job_needed_experience: 'job_experience',
          job_salary: 'job_salary',
          job_salary_type: 'job_salary_type',
          job_salary_currency: 'job_salary_currency',
          contaract_type: 'contaract_type',
          contaract_period: 'contaract_period',
          contaract_description: 'contaract_duration',
          are_you_ready: {
            avalibal: true,
            avalibal_description: 'avalibal_description',
            avalibal_time: 'avalibal_time',
          },
        },
        contact: [
          {
            patform: 'github',
            url: 'https://github.com/Ahmed-dev-dragon',
            icon: 'fa fa-github',
          },
          {
            patform: 'facebook',
            url: 'https://www.facebook.com/ahmed.dev.dragon',
            icon: 'fa fa-facebook',
          },
        ],
        about_me: {
          about_me_title: 'about_me_title',
          about_me_description: 'about_me_description',
        },
        expectations: {
          fild_description: 'fild_description',
          plaise: 'plaise',
          plaise_description: 'plaise_description',
          contaract_type: 'contaract_type',
          salier: 'salier',
        },
        skills: [
          {
            skill_name: 'skill_name',
            persant: '60%',
          },
        ],
        languages: [
          {
            language_name: 'language_name',
            language_description: 'language_description',
            language_img: 'assets/images/condida.jpg',
            persant: '60%',
          },
        ],
        education: [
          {
            ed_lavel: 'bac + 3',
            education_name: 'education_name',
            education_description: 'education_description',
            education_school: 'education_school',
            education_start_date: 'education_start_date',
            education_end_date: 'education_end_date',
            srtificate: [
              {
                srtificate_name: 'srtificate_name',
                srtificate_description: 'srtificate_description',
                srtificate_img: 'assets/images/condida.jpg',
                srtificate_date: 'srtificate_date',
                srtificate_url: 'srtificate_url',
                srtificate_type: 'srtificate_type',
                setifacate_school: 'setifacate_school',
              },
            ],
            deplome: [
              {
                deplome_name: 'deplome_name',
                deplome_description: 'deplome_description',
                deplome_img: 'assets/images/condida.jpg',
                deplome_date: 'deplome_date',
                deplome_url: 'deplome_url',
                deplome_type: 'deplome_type',
                deplome_school: 'deplome_school',
                deplome_country: 'deplome_country',
                deplome_fild: 'deplome_fild',
              },
            ],
          },
        ],

        experience: [
          {
            experience_description: 'experience_description',
            experience_start_date: 'experience_start_date',
            experience_end_date: 'experience_end_date',
            experience_company: 'experience_company',
            experience_job_title: 'experience_job_title',
            experience_job_description: 'experience_job_description',
            experience_job_type: 'experience_job_type',
            experience_job_salary: 'experience_job_salary',
            experience_job_salary_type: 'experience_job_salary_type',
          },
        ],
        Achievements: {
          achievement_name: 'achievement_name',
          achievement_description: 'achievement_description',
        },
        projects: [
          {
            project_name: 'project_name',
            project_description: 'project_description',
            project_url: 'prject_url',
          },
        ],
        hobbies: [
          {
            hobby_name: 'hobby_name',
            hobby_description: 'hobby_description',
            hobby_icon: 'assets/images/condida.jpg',
          },
        ],
      },
      style: [
        {
          coler_one: '#f5f5f5',
          coler_two: '#f5f5f5',
          coler_three: '#f5f5f5',
        },
      ],
      history: {
        created_at: '2020-05-06T00:00:00.000Z',
        updateds: [
          {
            updated_at: '2020-05-06T00:00:00.000Z',
            img: 'assets/images/condida.jpg',
          },
        ],
      },

      tag: ['web', 'developer', 'art', 'kldin'],
    },
    {
      info: {
        id: '1234',
        name: {
          first_name: 'ahmfghdd',
          last_name: 'fgofghmar',
        },
        age: 23,
        borthday: '1999/03/5',
        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'Algérie',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
          secteur: 'Informatique',
          region: 'Grand Casablanca',
        },
        description: 'i am a web developer',
        img: 'https://www.bootdey.com/img/Content/avatar/avatar6.png',
        job_post: {
          years_of_ex: 10,
          job_title: 'title_job',
          job_description: 'job_description',
          job_type: 'job_type',
          job_needed_experience: 'job_experience',
          job_salary: 'job_salary',
          job_salary_type: 'job_salary_type',
          job_salary_currency: 'job_salary_currency',
          contaract_type: 'contaract_type',
          contaract_period: 'contaract_period',
          contaract_description: 'contaract_duration',
          are_you_ready: {
            avalibal: true,
            avalibal_description: 'avalibal_description',
            avalibal_time: 'avalibal_time',
          },
        },
        contact: [
          {
            patform: 'github',
            url: 'https://github.com/Ahmed-dev-dragon',
            icon: 'fa fa-github',
          },
          {
            patform: 'facebook',
            url: 'https://www.facebook.com/ahmed.dev.dragon',
            icon: 'fa fa-facebook',
          },
        ],
        about_me: {
          about_me_title: 'about_me_title',
          about_me_description: 'about_me_description',
        },
        expectations: {
          fild_description: 'fild_description',
          plaise: 'plaise',
          plaise_description: 'plaise_description',
          contaract_type: 'contaract_type',
          salier: 'salier',
        },
        skills: [
          {
            skill_name: 'skill_name',
            persant: '60%',
          },
        ],
        languages: [
          {
            language_name: 'language_name',
            language_description: 'language_description',
            language_img: 'assets/images/condida.jpg',
            persant: '60%',
          },
        ],
        education: [
          {
            ed_lavel: 'bac + 3',
            education_name: 'education_name',
            education_description: 'education_description',
            education_school: 'education_school',
            education_start_date: 'education_start_date',
            education_end_date: 'education_end_date',
            srtificate: [
              {
                srtificate_name: 'srtificate_name',
                srtificate_description: 'srtificate_description',
                srtificate_img: 'assets/images/condida.jpg',
                srtificate_date: 'srtificate_date',
                srtificate_url: 'srtificate_url',
                srtificate_type: 'srtificate_type',
                setifacate_school: 'setifacate_school',
              },
            ],
            deplome: [
              {
                deplome_name: 'deplome_name',
                deplome_description: 'deplome_description',
                deplome_img: 'assets/images/condida.jpg',
                deplome_date: 'deplome_date',
                deplome_url: 'deplome_url',
                deplome_type: 'deplome_type',
                deplome_school: 'deplome_school',
                deplome_country: 'deplome_country',
                deplome_fild: 'deplome_fild',
              },
            ],
          },
        ],

        experience: [
          {
            experience_description: 'experience_description',
            experience_start_date: 'experience_start_date',
            experience_end_date: 'experience_end_date',
            experience_company: 'experience_company',
            experience_job_title: 'experience_job_title',
            experience_job_description: 'experience_job_description',
            experience_job_type: 'experience_job_type',
            experience_job_salary: 'experience_job_salary',
            experience_job_salary_type: 'experience_job_salary_type',
          },
        ],
        Achievements: {
          achievement_name: 'achievement_name',
          achievement_description: 'achievement_description',
        },
        projects: [
          {
            project_name: 'project_name',
            project_description: 'project_description',
            project_url: 'prject_url',
          },
        ],
        hobbies: [
          {
            hobby_name: 'hobby_name',
            hobby_description: 'hobby_description',
            hobby_icon: 'assets/images/condida.jpg',
          },
        ],
      },
      style: [
        {
          coler_one: '#f5f5f5',
          coler_two: '#f5f5f5',
          coler_three: '#f5f5f5',
        },
      ],
      history: {
        created_at: '2020-05-06T00:00:00.000Z',
        updateds: [
          {
            updated_at: '2020-05-06T00:00:00.000Z',
            img: 'assets/images/condida.jpg',
          },
        ],
      },

      tag: ['web', 'developer', 'art', 'kldin'],
    },
    {
      info: {
        id: '1111',
        name: {
          first_name: 'ahmddfghdfgh',
          last_name: 'oghdfghmar',
        },
        age: 23,
        borthday: '1999/03/5',

        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'Algérie',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
          secteur: 'Agriculture',
          region: 'Tanger-Tetouan',
        },
        description: 'i am a web developer',
        img: 'https://www.bootdey.com/img/Content/avatar/avatar4.png',
        job_post: {
          years_of_ex: 10,
          job_title: 'title_job',
          job_description: 'job_description',
          job_type: 'job_type',
          job_needed_experience: 'job_experience',
          job_salary: 'job_salary',
          job_salary_type: 'job_salary_type',
          job_salary_currency: 'job_salary_currency',
          contaract_type: 'contaract_type',
          contaract_period: 'contaract_period',
          contaract_description: 'contaract_duration',
          are_you_ready: {
            avalibal: true,
            avalibal_description: 'avalibal_description',
            avalibal_time: 'avalibal_time',
          },
        },
        contact: [
          {
            patform: 'github',
            url: 'https://github.com/Ahmed-dev-dragon',
            icon: 'fa fa-github',
          },
          {
            patform: 'facebook',
            url: 'https://www.facebook.com/ahmed.dev.dragon',
            icon: 'fa fa-facebook',
          },
        ],
        about_me: {
          about_me_title: 'about_me_title',
          about_me_description: 'about_me_description',
        },
        expectations: {
          fild_description: 'fild_description',
          plaise: 'plaise',
          plaise_description: 'plaise_description',
          contaract_type: 'contaract_type',
          salier: 'salier',
        },
        skills: [
          {
            skill_name: 'skill_name',
            persant: '60%',
          },
        ],
        languages: [
          {
            language_name: 'language_name',
            language_description: 'language_description',
            language_img: 'assets/images/condida.jpg',
            persant: '60%',
          },
        ],
        education: [
          {
            ed_lavel: 'bac + 3',
            education_name: 'education_name',
            education_description: 'education_description',
            education_school: 'education_school',
            education_start_date: 'education_start_date',
            education_end_date: 'education_end_date',
            srtificate: [
              {
                srtificate_name: 'srtificate_name',
                srtificate_description: 'srtificate_description',
                srtificate_img: 'assets/images/condida.jpg',
                srtificate_date: 'srtificate_date',
                srtificate_url: 'srtificate_url',
                srtificate_type: 'srtificate_type',
                setifacate_school: 'setifacate_school',
              },
            ],
            deplome: [
              {
                deplome_name: 'deplome_name',
                deplome_description: 'deplome_description',
                deplome_img: 'assets/images/condida.jpg',
                deplome_date: 'deplome_date',
                deplome_url: 'deplome_url',
                deplome_type: 'deplome_type',
                deplome_school: 'deplome_school',
                deplome_country: 'deplome_country',
                deplome_fild: 'deplome_fild',
              },
            ],
          },
        ],

        experience: [
          {
            experience_description: 'experience_description',
            experience_start_date: 'experience_start_date',
            experience_end_date: 'experience_end_date',
            experience_company: 'experience_company',
            experience_job_title: 'experience_job_title',
            experience_job_description: 'experience_job_description',
            experience_job_type: 'experience_job_type',
            experience_job_salary: 'experience_job_salary',
            experience_job_salary_type: 'experience_job_salary_type',
          },
        ],
        Achievements: {
          achievement_name: 'achievement_name',
          achievement_description: 'achievement_description',
        },
        projects: [
          {
            project_name: 'project_name',
            project_description: 'project_description',
            project_url: 'prject_url',
          },
        ],
        hobbies: [
          {
            hobby_name: 'hobby_name',
            hobby_description: 'hobby_description',
            hobby_icon: 'assets/images/condida.jpg',
          },
        ],
      },
      style: [
        {
          coler_one: '#f5f5f5',
          coler_two: '#f5f5f5',
          coler_three: '#f5f5f5',
        },
      ],
      history: {
        created_at: '2020-05-06T00:00:00.000Z',
        updateds: [
          {
            updated_at: '2020-05-06T00:00:00.000Z',
            img: 'assets/images/condida.jpg',
          },
        ],
      },

      tag: ['web', 'developer', 'art', 'kldin'],
    },
    {
      info: {
        id: '1111',
        name: {
          first_name: 'agfhhmdfghdfghd',
          last_name: 'dfghomar',
        },
        age: 23,
        borthday: '1999/03/5',

        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'Maroc',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
          region: 'goldfish',
          secteur: 'Agriculturre',
        },
        description: 'i am a web developer',
        img: 'https://www.bootdey.com/img/Content/avatar/avatar4.png',
        job_post: {
          years_of_ex: 10,
          job_title: 'title_job',
          job_description: 'job_description',
          job_type: 'job_type',
          job_needed_experience: 'job_experience',
          job_salary: 'job_salary',
          job_salary_type: 'job_salary_type',
          job_salary_currency: 'job_salary_currency',
          contaract_type: 'contaract_type',
          contaract_period: 'contaract_period',
          contaract_description: 'contaract_duration',
          are_you_ready: {
            avalibal: true,
            avalibal_description: 'avalibal_description',
            avalibal_time: 'avalibal_time',
          },
        },
        contact: [
          {
            patform: 'github',
            url: 'https://github.com/Ahmed-dev-dragon',
            icon: 'fa fa-github',
          },
          {
            patform: 'facebook',
            url: 'https://www.facebook.com/ahmed.dev.dragon',
            icon: 'fa fa-facebook',
          },
        ],
        about_me: {
          about_me_title: 'about_me_title',
          about_me_description: 'about_me_description',
        },
        expectations: {
          fild_description: 'fild_description',
          plaise: 'plaise',
          plaise_description: 'plaise_description',
          contaract_type: 'contaract_type',
          salier: 'salier',
        },
        skills: [
          {
            skill_name: 'skill_name',
            persant: '60%',
          },
        ],
        languages: [
          {
            language_name: 'language_name',
            language_description: 'language_description',
            language_img: 'assets/images/condida.jpg',
            persant: '60%',
          },
        ],
        education: [
          {
            ed_lavel: 'bac + 3',
            education_name: 'education_name',
            education_description: 'education_description',
            education_school: 'education_school',
            education_start_date: 'education_start_date',
            education_end_date: 'education_end_date',
            srtificate: [
              {
                srtificate_name: 'srtificate_name',
                srtificate_description: 'srtificate_description',
                srtificate_img: 'assets/images/condida.jpg',
                srtificate_date: 'srtificate_date',
                srtificate_url: 'srtificate_url',
                srtificate_type: 'srtificate_type',
                setifacate_school: 'setifacate_school',
              },
            ],
            deplome: [
              {
                deplome_name: 'deplome_name',
                deplome_description: 'deplome_description',
                deplome_img: 'assets/images/condida.jpg',
                deplome_date: 'deplome_date',
                deplome_url: 'deplome_url',
                deplome_type: 'deplome_type',
                deplome_school: 'deplome_school',
                deplome_country: 'deplome_country',
                deplome_fild: 'deplome_fild',
              },
            ],
          },
        ],

        experience: [
          {
            experience_description: 'experience_description',
            experience_start_date: 'experience_start_date',
            experience_end_date: 'experience_end_date',
            experience_company: 'experience_company',
            experience_job_title: 'experience_job_title',
            experience_job_description: 'experience_job_description',
            experience_job_type: 'experience_job_type',
            experience_job_salary: 'experience_job_salary',
            experience_job_salary_type: 'experience_job_salary_type',
          },
        ],
        Achievements: {
          achievement_name: 'achievement_name',
          achievement_description: 'achievement_description',
        },
        projects: [
          {
            project_name: 'project_name',
            project_description: 'project_description',
            project_url: 'prject_url',
          },
        ],
        hobbies: [
          {
            hobby_name: 'hobby_name',
            hobby_description: 'hobby_description',
            hobby_icon: 'assets/images/condida.jpg',
          },
        ],
      },
      style: [
        {
          coler_one: '#f5f5f5',
          coler_two: '#f5f5f5',
          coler_three: '#f5f5f5',
        },
      ],
      history: {
        created_at: '2020-05-06T00:00:00.000Z',
        updateds: [
          {
            updated_at: '2020-05-06T00:00:00.000Z',
            img: 'assets/images/condida.jpg',
          },
        ],
      },

      tag: ['web', 'developer', 'art', 'kldin'],
    },
    {
      info: {
        id: '1111',
        name: {
          first_name: 'hjlkhjkahmd',
          last_name: 'ojklmar',
        },
        age: 23,
        borthday: '1999/03/5',

        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'Maroc',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
          region: 'Grand Casablanca',
          secteur: 'Agriculturre',
        },
        description: 'i am a web developer',
        img: 'https://www.bootdey.com/img/Content/avatar/avatar4.png',
        job_post: {
          years_of_ex: 10,
          job_title: 'title_job',
          job_description: 'job_description',
          job_type: 'job_type',
          job_needed_experience: 'job_experience',
          job_salary: 'job_salary',
          job_salary_type: 'job_salary_type',
          job_salary_currency: 'job_salary_currency',
          contaract_type: 'contaract_type',
          contaract_period: 'contaract_period',
          contaract_description: 'contaract_duration',
          are_you_ready: {
            avalibal: true,
            avalibal_description: 'avalibal_description',
            avalibal_time: 'avalibal_time',
          },
        },
        contact: [
          {
            patform: 'github',
            url: 'https://github.com/Ahmed-dev-dragon',
            icon: 'fa fa-github',
          },
          {
            patform: 'facebook',
            url: 'https://www.facebook.com/ahmed.dev.dragon',
            icon: 'fa fa-facebook',
          },
        ],
        about_me: {
          about_me_title: 'about_me_title',
          about_me_description: 'about_me_description',
        },
        expectations: {
          fild_description: 'fild_description',
          plaise: 'plaise',
          plaise_description: 'plaise_description',
          contaract_type: 'contaract_type',
          salier: 'salier',
        },
        skills: [
          {
            skill_name: 'skill_name',
            persant: '60%',
          },
        ],
        languages: [
          {
            language_name: 'language_name',
            language_description: 'language_description',
            language_img: 'assets/images/condida.jpg',
            persant: '60%',
          },
        ],
        education: [
          {
            ed_lavel: 'bac + 3',
            education_name: 'education_name',
            education_description: 'education_description',
            education_school: 'education_school',
            education_start_date: 'education_start_date',
            education_end_date: 'education_end_date',
            srtificate: [
              {
                srtificate_name: 'srtificate_name',
                srtificate_description: 'srtificate_description',
                srtificate_img: 'assets/images/condida.jpg',
                srtificate_date: 'srtificate_date',
                srtificate_url: 'srtificate_url',
                srtificate_type: 'srtificate_type',
                setifacate_school: 'setifacate_school',
              },
            ],
            deplome: [
              {
                deplome_name: 'deplome_name',
                deplome_description: 'deplome_description',
                deplome_img: 'assets/images/condida.jpg',
                deplome_date: 'deplome_date',
                deplome_url: 'deplome_url',
                deplome_type: 'deplome_type',
                deplome_school: 'deplome_school',
                deplome_country: 'deplome_country',
                deplome_fild: 'deplome_fild',
              },
            ],
          },
        ],

        experience: [
          {
            experience_description: 'experience_description',
            experience_start_date: 'experience_start_date',
            experience_end_date: 'experience_end_date',
            experience_company: 'experience_company',
            experience_job_title: 'experience_job_title',
            experience_job_description: 'experience_job_description',
            experience_job_type: 'experience_job_type',
            experience_job_salary: 'experience_job_salary',
            experience_job_salary_type: 'experience_job_salary_type',
          },
        ],
        Achievements: {
          achievement_name: 'achievement_name',
          achievement_description: 'achievement_description',
        },
        projects: [
          {
            project_name: 'project_name',
            project_description: 'project_description',
            project_url: 'prject_url',
          },
        ],
        hobbies: [
          {
            hobby_name: 'hobby_name',
            hobby_description: 'hobby_description',
            hobby_icon: 'assets/images/condida.jpg',
          },
        ],
      },
      style: [
        {
          coler_one: '#f5f5f5',
          coler_two: '#f5f5f5',
          coler_three: '#f5f5f5',
        },
      ],
      history: {
        created_at: '2020-05-06T00:00:00.000Z',
        updateds: [
          {
            updated_at: '2020-05-06T00:00:00.000Z',
            img: 'assets/images/condida.jpg',
          },
        ],
      },

      tag: ['web', 'developer', 'art', 'kldin'],
    },
    // #endregion
  ]
  constructor(private http: HttpClient) {
    this.condidats_list = this.allCondidat
  }
  ngOnInit() {}

  filter(
    searchFiltre: string = '',
    secteurFiltre: any,
    paysFiltre: any,
    regionFiltre: any,
    villeFiltre: any,
    niveauxEtFiltre: any,
    niveauxExFiltre: any,
    langueFiltre: any,
  ) {
    this.condidats_list = this.allCondidat

    if (searchFiltre != '') {
      this.condidats_list = this.condidats_list.filter((candidat: any) => {
        return (
          candidat.info.name.first_name
            .toLowerCase()
            .includes(searchFiltre.toLowerCase()) ||
          candidat.info.name.last_name
            .toLowerCase()
            .includes(searchFiltre.toLowerCase())
        )
      })
    }
    if (paysFiltre != '') {
      this.condidats_list = this.condidats_list.filter((candidat: any) => {
        return candidat.info.address.countrie == paysFiltre
      })
    } else if (regionFiltre != '') {
      this.condidats_list = this.condidats_list.filter((candidat: any) => {
        return candidat.info.address.region == regionFiltre
      })
    } else if (villeFiltre != '') {
      this.condidats_list = this.condidats_list.filter((candidat: any) => {
        return candidat.info.address.city == villeFiltre
      })
    } else if (secteurFiltre != '') {
      this.condidats_list = this.condidats_list.filter((candidat: any) => {
        return candidat.info.job_post.secteur == secteurFiltre
      })
    }

    this.checkboxFiltre(niveauxEtFiltre, 'NiveauxEtude')
    this.checkboxFiltre(niveauxExFiltre, 'NiveauxExperience')
    this.checkboxFiltre(langueFiltre, 'langue')
  }

  checkboxFiltre(CheckboxList: any, label: any) {
    let newList2
    let newList3: any = this.condidats_list
    let isFirstTime: Boolean = true
    CheckboxList.map((filtre: any) => {
      if (filtre.nativeElement.checked) {
        if (isFirstTime == true) {
          isFirstTime = false
          newList3 = []
        }
        newList2 = this.condidats_list
        newList2 = newList2.filter((candidat: any) => {
          // return candidat[label] == filtre.nativeElement.value;
        })
        newList2.map((list: any) => {
          newList3.push(list)
        })
      }
    })
    this.condidats_list = newList3
  }

  get_all_condidats() {
    return this.condidats_list
  }

  get_condidats_by_id(id: string) {
    return of(this.condidats_list.find((i) => i.info.id === id))
  }

  get_condidats_by_name(name: string) {
    return of(
      this.condidats_list.filter((condidat: any) => {
        return (
          condidat.info.name.last_name
            .toLowerCase()
            .includes(name.toLocaleLowerCase()) ||
          condidat.info.name.fris_name
            .toLowerCase()
            .includes(name.toLocaleLowerCase())
        )
      }),
    )
  }

  get_condidats_by_age(age: number) {
    return of(this.condidats_list.filter((a) => a.info.age == age))
  }

  get_condidats_by_avalilaiblelty(av: boolean) {
    return of(
      this.condidats_list.filter(
        (a) => a.info.jop_post.are_you_ready.avalibal == av,
      ),
    )
  }

  getlist() {
    return this.condidats_list
  }

  getByIdWishList(ids: any) {
    return this.http.get<any>(
      API + '/candidat/wishList',

      {
        headers: new HttpHeaders({
          ids,
        }),
      },
    )
  }
}
