import { Component, OnInit } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  constructor(public modalService: NgbModal) {}

  ngOnInit(): void {}
  gallerie: any = [
    {
      type_contenu: 'image',

      image: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp',
      title: '',
    },
    {
      type_contenu: 'image',

      image: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp',
      title: '',
    },
    {
      type_contenu: 'video',

      image: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp',
      title: '',
    },
    {
      type_contenu: 'video',

      image: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp',
      title: '',
    },
    {
      type_contenu: 'image',

      image: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp',
      title: '',
    },
    {
      type_contenu: 'image',

      image: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp',
      title: '',
    },
    {
      type_contenu: 'video',

      image: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp',
      title: '',
    },
    {
      type_contenu: 'image',

      image: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp',
      title: '',
    },
  ]
  selectedMedia: any = ''
  openModal(modal: any, gallerie: any) {
    this.selectedMedia = gallerie
    this.modalService
      .open(modal, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {})
  }
}
