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
      id: 1,
      type_contenu: 'image',

      source: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp',
      title: '',
    },
    {
      type_contenu: 'image',
      id: 2,

      source: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp',
      title: '',
    },
    {
      type_contenu: 'video',
      id: 3,

      source: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp',
      title: '',
    },
    {
      type_contenu: 'video',
      id: 4,

      source: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp',
      title: '',
    },
    {
      type_contenu: 'image',
      id: 5,

      source: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp',
      title: '',
    },
    {
      type_contenu: 'image',
      id: 6,

      source: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp',
      title: '',
    },
    {
      type_contenu: 'video',
      id: 7,

      source: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp',
      title: '',
    },
    {
      type_contenu: 'image',
      id: 8,

      source: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp',
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
  activeSliderId: any = 0
  cycleToSlide(photo: any) {
    this.activeSliderId = 'ngb-slide-' + photo.id
    console.log(this.activeSliderId)
  }
}
