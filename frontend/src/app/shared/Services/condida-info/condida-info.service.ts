import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CondidaInfoService {
  condidats_list = [
    {
      info: {
        id: 1,
        name: {
          fris_name: 'A',
          last_name: 'A',
        },
        age: {
          age: 23,
          borthday: {
            year: '1999',
            month: '06',
            day: '06',
          },
        },
        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          Countries: 'morocco',
          City: 'tanger',
          Street: 'bni aourgal 4 ',
          Building: '40',
          PostalCode: '92000',
        },
        description: 'i am a web developer',
        img: 'https://www.bootdey.com/img/Content/avatar/avatar2.png',
        jop_post: {
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
          about_me_img: 'assets/images/condida.jpg',
        },
        expectations: {
          fild: 'fild',
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
            education_icon: 'assets/images/condida.jpg',
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
            experience_name: 'experience_name',
            experience_description: 'experience_description',
            experience_start_date: 'experience_start_date',
            experience_end_date: 'experience_end_date',
            experience_company: 'experience_company',
            experience_job_title: 'experience_job_title',
            experience_job_description: 'experience_job_description',
            experience_job_type: 'experience_job_type',
            experience_job_experience: 'experience_job_experience',
            experience_job_salary: 'experience_job_salary',
            experience_job_salary_type: 'experience_job_salary_type',
            experience_job_salary_currency: 'experience_job_salary_currency',
            experience_job_salary_period: 'experience_job_salary_period',
            experience_contaract_type: 'experience_contaract_type',
            experience_contaract_period: 'experience_contaract_period',
            experience_contaract_description:
              'experience_contaract_description',
            experience_icon: 'assets/images/condida.jpg',
          },
        ],
        Achievements: {
          achievement_name: 'achievement_name',
          achievement_description: 'achievement_description',
          achievement_img: 'assets/images/condida.jpg',
          persant: '60%',
        },
        projects: [
          {
            project_name: 'project_name',
            project_description: 'project_description',
            project_img: 'assets/images/condida.jpg',
            persant: '60%',
            prject_url: 'prject_url',
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
      tag: ['web', 'developer'],
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
          {
            updated_at: '2020-05-06T00:00:00.000Z',
            job_title: 'title_job',
            img: 'assets/images/condida.jpg',
          },
        ],
      },
    },
    {
      info: {
        id: 2,
        name: {
          fris_name: 'b',
          last_name: 'b',
        },
        age: {
          age: 23,
          borthday: {
            year: '1999',
            month: '06',
            day: '06',
          },
        },
        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          Countries: 'morocco',
          City: 'tanger',
          Street: 'bni aourgal 4 ',
          Building: '40',
          PostalCode: '92000',
        },
        description: 'i am a web developer',
        img: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
        jop_post: {
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
          about_me_img: 'assets/images/condida.jpg',
        },
        expectations: {
          fild: 'fild',
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
            education_icon: 'assets/images/condida.jpg',
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
            experience_name: 'experience_name',
            experience_description: 'experience_description',
            experience_start_date: 'experience_start_date',
            experience_end_date: 'experience_end_date',
            experience_company: 'experience_company',
            experience_job_title: 'experience_job_title',
            experience_job_description: 'experience_job_description',
            experience_job_type: 'experience_job_type',
            experience_job_experience: 'experience_job_experience',
            experience_job_salary: 'experience_job_salary',
            experience_job_salary_type: 'experience_job_salary_type',
            experience_job_salary_currency: 'experience_job_salary_currency',
            experience_job_salary_period: 'experience_job_salary_period',
            experience_contaract_type: 'experience_contaract_type',
            experience_contaract_period: 'experience_contaract_period',
            experience_contaract_description:
              'experience_contaract_description',
            experience_icon: 'assets/images/condida.jpg',
          },
        ],
        Achievements: {
          achievement_name: 'achievement_name',
          achievement_description: 'achievement_description',
          achievement_img: 'assets/images/condida.jpg',
          persant: '60%',
        },
        projects: [
          {
            project_name: 'project_name',
            project_description: 'project_description',
            project_img: 'assets/images/condida.jpg',
            persant: '60%',
            prject_url: 'prject_url',
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
      tag: ['web', 'developer'],
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
          {
            updated_at: '2020-05-06T00:00:00.000Z',
            job_title: 'title_job',
            img: 'assets/images/condida.jpg',
          },
        ],
      },
    },
    {
      info: {
        id: 3,
        name: {
          fris_name: 't',
          last_name: 't',
        },
        age: {
          age: 23,
          borthday: {
            year: '1999',
            month: '06',
            day: '06',
          },
        },
        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          Countries: 'morocco',
          City: 'tanger',
          Street: 'bni aourgal 4 ',
          Building: '40',
          PostalCode: '92000',
        },
        description: 'i am a web developer',
        img: 'https://www.bootdey.com/img/Content/avatar/avatar4.png',
        jop_post: {
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
          about_me_img: 'assets/images/condida.jpg',
        },
        expectations: {
          fild: 'fild',
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
            education_icon: 'assets/images/condida.jpg',
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
            experience_name: 'experience_name',
            experience_description: 'experience_description',
            experience_start_date: 'experience_start_date',
            experience_end_date: 'experience_end_date',
            experience_company: 'experience_company',
            experience_job_title: 'experience_job_title',
            experience_job_description: 'experience_job_description',
            experience_job_type: 'experience_job_type',
            experience_job_experience: 'experience_job_experience',
            experience_job_salary: 'experience_job_salary',
            experience_job_salary_type: 'experience_job_salary_type',
            experience_job_salary_currency: 'experience_job_salary_currency',
            experience_job_salary_period: 'experience_job_salary_period',
            experience_contaract_type: 'experience_contaract_type',
            experience_contaract_period: 'experience_contaract_period',
            experience_contaract_description:
              'experience_contaract_description',
            experience_icon: 'assets/images/condida.jpg',
          },
        ],
        Achievements: {
          achievement_name: 'achievement_name',
          achievement_description: 'achievement_description',
          achievement_img: 'assets/images/condida.jpg',
          persant: '60%',
        },
        projects: [
          {
            project_name: 'project_name',
            project_description: 'project_description',
            project_img: 'assets/images/condida.jpg',
            persant: '60%',
            prject_url: 'prject_url',
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
      tag: ['web', 'developer'],
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
          {
            updated_at: '2020-05-06T00:00:00.000Z',
            job_title: 'title_job',
            img: 'assets/images/condida.jpg',
          },
        ],
      },
    },
    {
      info: {
        id: 4,
        name: {
          fris_name: 'y',
          last_name: 'y',
        },
        age: {
          age: 23,
          borthday: {
            year: '1999',
            month: '06',
            day: '06',
          },
        },
        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          Countries: 'morocco',
          City: 'tanger',
          Street: 'bni aourgal 4 ',
          Building: '40',
          PostalCode: '92000',
        },
        description: 'i am a web developer',
        img: 'https://www.bootdey.com/img/Content/avatar/avatar5.png',
        jop_post: {
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
          about_me_img: 'assets/images/condida.jpg',
        },
        expectations: {
          fild: 'fild',
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
            education_icon: 'assets/images/condida.jpg',
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
            experience_name: 'experience_name',
            experience_description: 'experience_description',
            experience_start_date: 'experience_start_date',
            experience_end_date: 'experience_end_date',
            experience_company: 'experience_company',
            experience_job_title: 'experience_job_title',
            experience_job_description: 'experience_job_description',
            experience_job_type: 'experience_job_type',
            experience_job_experience: 'experience_job_experience',
            experience_job_salary: 'experience_job_salary',
            experience_job_salary_type: 'experience_job_salary_type',
            experience_job_salary_currency: 'experience_job_salary_currency',
            experience_job_salary_period: 'experience_job_salary_period',
            experience_contaract_type: 'experience_contaract_type',
            experience_contaract_period: 'experience_contaract_period',
            experience_contaract_description:
              'experience_contaract_description',
            experience_icon: 'assets/images/condida.jpg',
          },
        ],
        Achievements: {
          achievement_name: 'achievement_name',
          achievement_description: 'achievement_description',
          achievement_img: 'assets/images/condida.jpg',
          persant: '60%',
        },
        projects: [
          {
            project_name: 'project_name',
            project_description: 'project_description',
            project_img: 'assets/images/condida.jpg',
            persant: '60%',
            prject_url: 'prject_url',
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
      tag: ['web', 'developer'],
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
          {
            updated_at: '2020-05-06T00:00:00.000Z',
            job_title: 'title_job',
            img: 'assets/images/condida.jpg',
          },
        ],
      },
    },
    {
      info: {
        id: 5,
        name: {
          fris_name: 'Ahmed',
          last_name: 'Aoulad Amar',
        },
        age: {
          age: 23,
          borthday: {
            year: '1999',
            month: '06',
            day: '06',
          },
        },
        email: 'condida@gamil.com',
        phone: '+212 658 987 658',
        address: {
          Countries: 'morocco',
          City: 'tanger',
          Street: 'bni aourgal 4 ',
          Building: '40',
          PostalCode: '92000',
        },
        description: 'i am a web developer',
        img: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
        jop_post: {
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
          about_me_img: 'assets/images/condida.jpg',
        },
        expectations: {
          fild: 'fild',
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
            education_icon: 'assets/images/condida.jpg',
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
            experience_name: 'experience_name',
            experience_description: 'experience_description',
            experience_start_date: 'experience_start_date',
            experience_end_date: 'experience_end_date',
            experience_company: 'experience_company',
            experience_job_title: 'experience_job_title',
            experience_job_description: 'experience_job_description',
            experience_job_type: 'experience_job_type',
            experience_job_experience: 'experience_job_experience',
            experience_job_salary: 'experience_job_salary',
            experience_job_salary_type: 'experience_job_salary_type',
            experience_job_salary_currency: 'experience_job_salary_currency',
            experience_job_salary_period: 'experience_job_salary_period',
            experience_contaract_type: 'experience_contaract_type',
            experience_contaract_period: 'experience_contaract_period',
            experience_contaract_description:
              'experience_contaract_description',
            experience_icon: 'assets/images/condida.jpg',
          },
        ],
        Achievements: {
          achievement_name: 'achievement_name',
          achievement_description: 'achievement_description',
          achievement_img: 'assets/images/condida.jpg',
          persant: '60%',
        },
        projects: [
          {
            project_name: 'project_name',
            project_description: 'project_description',
            project_img: 'assets/images/condida.jpg',
            persant: '60%',
            prject_url: 'prject_url',
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
      tag: ['web', 'developer'],
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
          {
            updated_at: '2020-05-06T00:00:00.000Z',
            job_title: 'title_job',
            img: 'assets/images/condida.jpg',
          },
        ],
      },
    },
  ];

  constructor(private http: HttpClient) {}
  ngOnInit() {}

  get_all_condidats() {
    return this.condidats_list;
  }

  getCondidatDetails(id: number) {
    return of(this.condidats_list.find((info) => info.info.id === id))
  }
}
