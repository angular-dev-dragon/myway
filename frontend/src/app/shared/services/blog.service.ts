import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { API } from './api.service'

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getBlogueur() {
    return this.http.get(API + '/blogueur')
  }
  getBlogueurById(id: any) {
    return this.http.get(API + '/blogueur+' + id)
  }
  listBlogueurs: any = [
    {
      nom: 'Hicham',
      prenom: 'Berdouki',
      fonction: 'Mean Stack Developper',
      service: 'Departement It',
      email: 'testEamil@gmail.com',
      telephone: '0600223366',
      image: 'https://www.bootdey.com/img/Content/avatar/avatar7.png',
      resume:
        'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.',
    },
    {
      nom: 'Ahmad',
      prenom: 'Omari',
      fonction: 'Mean Stack Developper',
      service: 'Departement It',
      email: 'testEamil@gmail.com',
      telephone: '0600223366',
      image: '',
      resume:
        'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.',
    },
    {
      nom: 'Hicham',
      prenom: 'Berdouki',
      fonction: 'Mean Stack Developper',
      service: 'Departement It',
      email: 'testEamil@gmail.com',
      telephone: '0600223366',
      image: 'https://www.bootdey.com/img/Content/avatar/avatar7.png',

      resume:
        'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.',
    },
    {
      nom: 'Hicham',
      prenom: 'Berdouki',
      fonction: 'Mean Stack Developper',
      service: 'Departement It',
      email: 'testEamil@gmail.com',
      telephone: '0600223366',
      image: '',

      resume:
        'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.',
    },
  ]
}
