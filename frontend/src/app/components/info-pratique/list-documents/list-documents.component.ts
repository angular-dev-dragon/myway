import { Component, OnInit } from '@angular/core'
import { DocumentService } from 'src/app/shared/services/document.service'

@Component({
  selector: 'app-list-documents',
  templateUrl: './list-documents.component.html',
  styleUrls: ['./list-documents.component.scss'],
})
export class ListDocumentsComponent implements OnInit {
  constructor(public documentsService: DocumentService) {}

  ngOnInit(): void {}
  resultData: any = []
  orientation: string = ''
  filtredData(value: any) {
    this.resultData = value
  }
  getOrientaion(value: any) {
    this.orientation = value
  }
}
