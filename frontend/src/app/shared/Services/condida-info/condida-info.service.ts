import { AchievementComponent } from './../../../components/resume-profiles/herobar/achievement/achievement.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CondidaInfoService {
  constructor(http: HttpClient) {}
  ngOnInit() {
    [
      {
        style: [
          {
            coler_one: '#f5f5f5',
            coler_two: '#f5f5f5',
            coler_three: '#f5f5f5',
          }
        ],
        info: {
          id: 1,
          name: {
            fris_name: 'Condida',
            last_name: 'Condida',
          },
          email: 'condida@gamil.com',
          phone: '+96599999999',
          address: {
            Countries: 'Kuwait',
            City: 'City',
            Street: 'Street 1',
            Building: 'Building 1',
            PostalCode: 'PostalCode 1',
          },

          description: 'Condide is blablaba.blablaba.blablaba.blablaba..',
          img: 'assets/images/condida.jpg',
          latitude: '34.0333333',
          longitude: '-6.8166667',
          created_at: '2020-05-06T00:00:00.000Z',
          updateds: [
            {
              updated_at: '2020-05-06T00:00:00.000Z',
              name: 'Condida',
              description: 'Condide is blablaba.blablaba.blablaba.blablaba..',
              img: 'assets/images/condida.jpg',
            },
            {
              updated_at: '2020-05-06T00:00:00.000Z',
              name: 'Condida',
              description: 'Condide is blablaba.blablaba.blablaba.blablaba..',
              img: 'assets/images/condida.jpg',
            },
          ],
          jop_post: {
            job_title: 'title_job',
            job_description: 'job_description',
            job_type: 'job_type',
            job_experience: 'job_experience',
            job_salary: 'job_salary',
            job_salary_type: 'job_salary_type',
            job_salary_currency: 'job_salary_currency',
            job_salary_period: 'job_salary_period',
            contaract_type: 'contaract_type',
            contaract_period: 'contaract_period',
            contaract_description: 'contaract_duration',
          },
          contacter: [
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
            avalibal: {
              avalibal: true,
              avalibal_description: 'avalibal_description',
              avalibal_time: 'avalibal_time',
            },
          },
          skills: [
            {
              skill_name: 'skill_name',
              skill_description: 'skill_description',
              skill_img: 'assets/images/condida.jpg',
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


      },
    ];
  }
}
