import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CondidaInfoService {
  a: any;
  condidats_list: any[] = [];
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
            url: 'https://www.linkedin.com/posts/scottdresden_next-generation-silent-drone-achieves-major-activity-6885948728314736640-eH9i/',
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
            skill_name: 'Paython',
            persant: '90%',
          },
          {
            skill_name: 'javascript',
            persant: '90%',
          },
          {
            skill_name: 'ruby',
            persant: '50%',
          },
        ],
        soft_skills: ['travil on group', 'manger a project', ' aj lksd dikd '],
        languages: [
          {
            language_name: 'englidh',
            persant: '60%',
          },
          {
            language_name: 'arabic',
            persant: '60%',
          },
          {
            language_name: 'franch',
            persant: '60%',
          },
          {
            language_name: 'eespan',
            persant: '60%',
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

        experience: [
          {
            experience_job_title: 'full stack devoper',
            experience_company: 'netflix',
            experience_start_date: '2022/7',
            experience_end_date: '2026/7',
            experience_city: 'tanger',

            experience_job_description:
              'exper ience_job_ desc ription exp  erience_job_descripti onexperience _job_des criptionexper ience_j ob_descrip tionexperience_ job_descripti onexperien ce_job _descri ptionex  pe rience_job_  descrip tionexperience_job_desc ription',
            experience_job_type: 'experience_job_type',
            experience_he_gine: [
              'time orginistion',
              'project ourgisiion',
              'work on group',
            ],
            experience_roul: [
              'team manager',
              ' fullstack devloper',
              ' contant manager',
            ],
          },
          {
            experience_job_title: 'web devloper',
            experience_company: 'sat',
            experience_start_date: '2022/7',
            experience_end_date: '2026/7',
            experience_city: 'tanger',

            experience_job_description:
              'exper ience_job_ desc ription exp  erience_job_descripti onexperience _job_des criptionexper ience_j ob_descrip tionexperience_ job_descripti onexperien ce_job _descri ptionex  pe rience_job_  descrip tionexperience_job_desc ription',
            experience_job_type: 'experience_job_type',
            experience_he_gine: [
              'time orginistion',
              'project ourgisiion',
              'work on group',
            ],
            experience_roul: [
              'team manager',
              ' fullstack devloper',
              ' contant manager',
            ],
          },
          {
            experience_job_title: 'manger',
            experience_company: 'google',
            experience_start_date: '2022/7',
            experience_end_date: '2026/7',
            experience_city: 'tanger',

            experience_job_description:
              'exper ience_job_ desc ription exp  erience_job_descripti onexperience _job_des criptionexper ience_j ob_descrip tionexperience_ job_descripti onexperien ce_job _descri ptionex  pe rience_job_  descrip tionexperience_job_desc ription',
            experience_job_type: 'experience_job_type',
            experience_he_gine: [
              'time orginistion',
              'project ourgisiion',
              'work on group',
            ],
            experience_roul: [
              'team manager',
              ' fullstack devloper',
              ' contant manager',
            ],
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
  ];
  constructor() {
    this.condidats_list = this.allCondidat;
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
    langueFiltre: any
  ) {
    this.condidats_list = this.allCondidat;

    if (searchFiltre != '') {
      this.condidats_list = this.condidats_list.filter((candidat: any) => {
        return (
          candidat.info.name.first_name
            .toLowerCase()
            .includes(searchFiltre.toLowerCase()) ||
          candidat.info.name.last_name
            .toLowerCase()
            .includes(searchFiltre.toLowerCase())
        );
      });
    }
    if (paysFiltre != '') {
      this.condidats_list = this.condidats_list.filter((candidat: any) => {
        return candidat.info.address.countrie == paysFiltre;
      });
    } else if (regionFiltre != '') {
      this.condidats_list = this.condidats_list.filter((candidat: any) => {
        return candidat.info.address.region == regionFiltre;
      });
    } else if (villeFiltre != '') {
      this.condidats_list = this.condidats_list.filter((candidat: any) => {
        return candidat.info.address.city == villeFiltre;
      });
    } else if (secteurFiltre != '') {
      this.condidats_list = this.condidats_list.filter((candidat: any) => {
        return candidat.info.job_post.secteur == secteurFiltre;
      });
    }

    this.checkboxFiltre(niveauxEtFiltre, 'NiveauxEtude');
    this.checkboxFiltre(niveauxExFiltre, 'NiveauxExperience');
    this.checkboxFiltre(langueFiltre, 'langue');
  }

  checkboxFiltre(CheckboxList: any, label: any) {
    let newList2;
    let newList3: any = this.condidats_list;
    let isFirstTime: Boolean = true;
    CheckboxList.map((filtre: any) => {
      if (filtre.nativeElement.checked) {
        if (isFirstTime == true) {
          isFirstTime = false;
          newList3 = [];
        }
        newList2 = this.condidats_list;
        newList2 = newList2.filter((candidat: any) => {
          // return candidat[label] == filtre.nativeElement.value;
        });
        newList2.map((list: any) => {
          newList3.push(list);
        });
      }
    });
    this.condidats_list = newList3;
  }

  get_all_condidats() {
    return this.condidats_list;
  }

  get_condidats_by_id(id: string) {
    return of(this.condidats_list.find((i) => i.info.id === id));
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
        );
      })
    );
  }

  get_condidats_by_age(age: number) {
    return of(this.condidats_list.filter((a) => a.info.age == age));
  }

  get_condidats_by_avalilaiblelty(av: boolean) {
    return of(
      this.condidats_list.filter(
        (a) => a.info.jop_post.are_you_ready.avalibal == av
      )
    );
  }

  getcondidats(){
    return this.condidats_list
  };
}
