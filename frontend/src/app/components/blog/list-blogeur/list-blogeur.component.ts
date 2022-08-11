import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-list-blogeur',
  templateUrl: './list-blogeur.component.html',
  styleUrls: ['./list-blogeur.component.scss'],
})
export class ListBlogeurComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
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
