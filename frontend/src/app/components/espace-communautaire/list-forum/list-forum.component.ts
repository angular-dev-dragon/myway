import { Component, OnInit } from '@angular/core'
import { ForumService } from 'src/app/shared/services/forum.service'

@Component({
  selector: 'app-list-forum',
  templateUrl: './list-forum.component.html',
  styleUrls: ['./list-forum.component.scss'],
})
export class ListForumComponent implements OnInit {
  constructor(public forumService: ForumService) {}
  nbrTheme: number = 0
  nbrParticipants: number = 0
  nbrEchanges: number = 0
  ngOnInit(): void {
    this.resultData.map((forum: any) => {
      this.nbrParticipants = 0
      this.nbrEchanges = 0
      forum.theme.map((theme: any) => {
        this.nbrParticipants = this.nbrParticipants + theme.nbre_participants
        this.nbrEchanges = this.nbrEchanges + theme.nbre_echanges
      })

      forum.nbrParticipants = this.nbrParticipants
      forum.nbrEchanges = this.nbrEchanges
      forum.nbrTheme = forum.theme.length
    })
  }
  resultData: any = []
  orientation: string = ''
  filtredData(value: any) {
    this.resultData = value
  }

  getOrientaion(value: any) {
    this.orientation = value
  }
}
