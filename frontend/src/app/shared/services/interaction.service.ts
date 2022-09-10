import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class InteractionService {
  constructor() {
    this.account = JSON.parse(
      localStorage.getItem('interactions') ||
        '{"articles":{"liked":[],"disliked":[],"viewed":[]},"sondage":[],"quiz":[]}',
    )
  }

  private account

  addSondage(sondage: any) {
    let answered = false

    this.account.sondage.forEach((sndg: any) => {
      if (sndg.id === sondage.id) answered = true
    })
    if (!answered) {
      this.account.sondage.push(sondage)
      this.save()
      return true
    }
    return false
  }
  alreadyAnsweredS(id: string) {
    if (this.account.sondage.find((s: any) => s.id === id)) return true
    return false
  }
  sondageEnteredAnswers(id: any, index?: any) {
    return (
      this.account.sondage.find((s: any) => s.id === id)?.answers[index] || ''
    )
  }

  private save() {
    localStorage.setItem('interactions', JSON.stringify(this.account))
  }
}
