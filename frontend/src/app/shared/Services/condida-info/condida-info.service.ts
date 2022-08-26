import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CondidaInfoService {
  a: any;
  condidats_list: any[] = [
    {
      info: {
        id: '341324',
        name: {
          first_name: 'ahmd',
          last_name: 'omar',
        },
        age: 23,
        borthday: '1999/03/5',

        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'morocco',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
        },
        description: 'i am a web developer',
        img: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
        job_post: {
          years_of_ex: 10,
          job_title: 'web developer',
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
            education_name: 'english lteter',
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
    // #region  show just one
    {
      info: {
        id: '1234',
        name: {
          first_name: 'ahmd',
          last_name: 'omar',
        },
        age: 23,
        borthday: '1999/03/5',

        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'morocco',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
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
          first_name: 'ahmd',
          last_name: 'omar',
        },
        age: 23,
        borthday: '1999/03/5',

        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'morocco',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
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
          first_name: 'ahmd',
          last_name: 'omar',
        },
        age: 23,
        borthday: '1999/03/5',

        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'morocco',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
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
          first_name: 'ahmd',
          last_name: 'omar',
        },
        age: 23,
        borthday: '1999/03/5',

        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'morocco',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
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
          first_name: 'ahmd',
          last_name: 'omar',
        },
        age: 23,
        borthday: '1999/03/5',

        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'morocco',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
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
        id: '978',
        name: {
          first_name: 'ahmd',
          last_name: 'omar',
        },
        age: 23,
        borthday: '1999/03/5',

        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'morocco',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
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
        id: '1987',
        name: {
          first_name: 'ahmd',
          last_name: 'omar',
        },
        age: 23,
        borthday: '1999/03/5',

        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'morocco',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
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
        id: '870987098',
        name: {
          first_name: 'ahmd',
          last_name: 'omar',
        },
        age: 23,
        borthday: '1999/03/5',

        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'morocco',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
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
        id: '25g4g55',
        name: {
          first_name: 'ahmd',
          last_name: 'omar',
        },
        age: 23,
        borthday: '1999/03/5',

        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'morocco',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
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
        id: 'jhlsdhsdjfh898',
        name: {
          first_name: 'ahmd',
          last_name: 'omar',
        },
        age: 23,
        borthday: '1999/03/5',

        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'morocco',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
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
        id: 'jeiurpiweir',
        name: {
          first_name: 'ahmd',
          last_name: 'omar',
        },
        age: 23,
        borthday: '1999/03/5',

        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'morocco',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
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
        id: 'serf43',
        name: {
          first_name: 'ahmd',
          last_name: 'omar',
        },
        age: 23,
        borthday: '1999/03/5',

        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'morocco',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
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
        id: '9ikd89jd8',
        name: {
          first_name: 'ahmd',
          last_name: 'omar',
        },
        age: 23,
        borthday: '1999/03/5',

        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'morocco',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
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
        id: '787h789u8',
        name: {
          first_name: 'ahmd',
          last_name: 'omar',
        },
        age: 23,
        borthday: '1999/03/5',

        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'morocco',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
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
        id: 'kjh',
        name: {
          first_name: 'ahmd',
          last_name: 'omar',
        },
        age: 23,
        borthday: '1999/03/5',

        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'morocco',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
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
        id: 'jkhu809',
        name: {
          first_name: 'ahmd',
          last_name: 'omar',
        },
        age: 23,
        borthday: '1999/03/5',

        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'morocco',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
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
        id: 'lkj9897t',
        name: {
          first_name: 'ahmd',
          last_name: 'omar',
        },
        age: 23,
        borthday: '1999/03/5',

        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'morocco',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
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
        id: '345345r',
        name: {
          first_name: 'ahmd',
          last_name: 'omar',
        },
        age: 23,
        borthday: '1999/03/5',

        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'morocco',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
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
        id: 'ef434',
        name: {
          first_name: 'ahmd',
          last_name: 'omar',
        },
        age: 23,
        borthday: '1999/03/5',

        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'morocco',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
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
       id:'5y656t',
        name: {
          first_name: 'ahmd',
          last_name: 'omar',
        },
        age: 23,
        borthday: '1999/03/5',

        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          countrie: 'morocco',
          city: 'tanger',
          street: 'bni aourgal 4 ',
          building: '40',
          postalCode: '92000',
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
  // #endregion

  constructor() {
    console.log(this.a);
  }
  ngOnInit() {}

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

  get_condidats_by_address() {}
  get_condidats_by_tital_job() {}
  get_condidats_by_years_of_ex() {}
  get_condidats_by_ed_lavel() {}
  get_condidats_by_tag() {}
}









