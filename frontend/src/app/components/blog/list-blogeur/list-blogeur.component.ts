import { Component, OnInit } from '@angular/core'
import { BlogService } from 'src/app/shared/services/blog.service'

@Component({
  selector: 'app-list-blogeur',
  templateUrl: './list-blogeur.component.html',
  styleUrls: ['./list-blogeur.component.scss'],
})
export class ListBlogeurComponent implements OnInit {
  constructor(public blogeurService: BlogService) {}

  ngOnInit(): void {}
  resultData: any = []
  orientation: string = ''
  filtredData(value: any) {
    this.resultData = value
  }

  getOrientaion(value: any) {
    console.log(value)

    this.orientation = value
  }
}
