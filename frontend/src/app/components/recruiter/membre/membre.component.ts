import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.scss'],
})
export class MembreComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  listMembres: any = [
    {
      nom: 'Hicham',
      prenom: 'Berdouki',
      fonction: 'Mean Stack Developper',
      service: 'Departement It',
      email: 'testEamil@gmail.com',
      telephone: '0600223366',
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
      resume:
        'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.',
    },
  ]
}
