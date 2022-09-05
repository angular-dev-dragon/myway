import { DefaultService } from './default.service'
import { TemoignageService } from './temoignage.service'
import { RecruteurService } from 'src/app/shared/services/recruteur.service'
import { QuizService } from 'src/app/shared/services/quiz.service'
import { OffreService } from 'src/app/shared/services/offre.service'
import { MetierService } from 'src/app/shared/services/metier.service'
import { LienUtileService } from 'src/app/shared/services/lien-utile.service'
import { EvenementService } from './evenement.service'
import { DocumentService } from 'src/app/shared/services/document.service'
import { DemandeSpecifiqueService } from 'src/app/shared/services/demande-specifique.service'
import { CondidatureSpontaneeService } from 'src/app/shared/services/condidature-spontanee.service'
import { CondidatService } from './condidat.service'
import { Injectable } from '@angular/core'
import { AdresseUtileService } from './adresse-utile.service'
import { BlogService } from './blog.service'
import { ForumService } from './forum.service'
import { PostService } from './post.service'
import { RubriqueService } from './rubrique.service'
import { SondageService } from './sondage.service'

@Injectable({
  providedIn: 'root',
})
export class GenericService {
  constructor(
    private addesseService: AdresseUtileService,
    private blogService: BlogService,
    private candidatService: CondidatService,
    private condidatureSpontaneeService: CondidatureSpontaneeService,
    private demandeSpecifiqueService: DemandeSpecifiqueService,
    private documentService: DocumentService,
    private evenementService: EvenementService,
    private forumService: ForumService,
    private lienUtileService: LienUtileService,
    private metierService: MetierService,
    private offreService: OffreService,
    private postService: PostService,
    private QuizService: QuizService,
    private recruteurService: RecruteurService,
    private rubriqueService: RubriqueService,
    private sondageService: SondageService,
    private temoingnageService: TemoignageService,
    private defaultService: DefaultService,
  ) {}
  get(pageName: string): any {
    switch (pageName) {
      case 'blogeurs':
        return this.blogService
      case 'candidat':
        return this.candidatService
      case 'candidature spontanee':
        return this.condidatureSpontaneeService
      case 'demande specifique':
        return this.demandeSpecifiqueService
      case 'documents':
        return this.documentService
      case 'recruteur':
        return this.recruteurService
      case 'adresses utiles':
        return this.addesseService
      case 'evenement':
        return this.evenementService
      case 'forums':
        return this.forumService
      case 'liens utiles':
        return this.lienUtileService
      case 'metier':
        return this.metierService
      case 'quiz':
        return this.QuizService
      case 'offre':
        return this.offreService
      case 'sondage':
        return this.sondageService
      case 'rubrique':
        return this.rubriqueService
      case 'temoignage':
        return this.temoingnageService
      case 'post':
        return this.postService
      default:
        return this.defaultService
    }
  }

  orientation: string = 'verticale'
  toggleOrientation(orientation: any) {
    this.orientation = orientation
  }

  // rubrique-details

  // conseils pratique

  addToWishList(idPassed: string, pageName: string) {
    let wishList: any = sessionStorage.getItem('wishList')
    wishList = JSON.parse(wishList)

    if (wishList.length == 0) {
      console.log('🚀 ~ ~ wishList.length==0')
      wishList.push({
        pageName: pageName,
        items: [idPassed],
      })
    } else {
      console.log(idPassed)

      let pageNameExist: boolean = false
      let itemExistOnList: boolean = false

      wishList.map((whilshlist: any) => {
        if (whilshlist.pageName == pageName) {
          pageNameExist = true
          whilshlist.items.map((id: any) => {
            if (id == idPassed) {
              itemExistOnList = true
            }
          })
          if (itemExistOnList) {
            console.log('Already Exist + removed from List')

            whilshlist.items.splice(whilshlist.items.indexOf(idPassed), 1)
          }
        }
      })

      if (!pageNameExist) {
        console.log('add all new element ')

        wishList.push({
          pageName: pageName,
          items: [idPassed],
        })
      } else {
        if (!itemExistOnList) {
          wishList.map((whilshlist: any) => {
            if (whilshlist.pageName == pageName) {
              whilshlist.items.push(idPassed)

              console.log('add element in exist type')
            }
          })
        }
      }
    }

    sessionStorage.setItem('wishList', JSON.stringify(wishList))
    console.log(
      '🚀 ~ file: generic.service.ts ~ line 106 ~ GenericService ~ addToWishList ~ wishList',
      wishList,
    )
  }
}
