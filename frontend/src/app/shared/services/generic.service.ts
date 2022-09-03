import { TemoignageService } from './temoignage.service';
import { RecruteurService } from 'src/app/shared/services/recruteur.service';
import { QuizService } from 'src/app/shared/services/quiz.service';
import { OffreService } from 'src/app/shared/services/offre.service';
import { MetierService } from 'src/app/shared/services/metier.service';
import { LienUtileService } from 'src/app/shared/services/lien-utile.service';
import { EvenementService } from './evenement.service';
import { DocumentService } from 'src/app/shared/services/document.service';
import { DemandeSpecifiqueService } from 'src/app/shared/services/demande-specifique.service';
import { CondidatureSpontaneeService } from 'src/app/shared/services/condidature-spontanee.service';
import { CondidatService } from './condidat.service';
import { Injectable } from '@angular/core';
import { AdresseUtileService } from './adresse-utile.service';
import { BlogService } from './blog.service';
import { ForumService } from './forum.service';
import { PostService } from './post.service';
import { RubriqueService } from './rubrique.service';
import { SondageService } from './sondage.service';

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
    private rubriaueService: RubriqueService,
    private sondageService: SondageService,
    private temoingnageService: TemoignageService
  ) {}
  get(pageName: string) {
    switch (pageName) {
      case 'adresses utiles': {
        return this.addesseService.getAllInfo();
      }
      case 'blogeurs': {
        return this.blogService.getAllInfo();
      }
      case 'candidat': {
        return this.candidatService.getAllInfo();
      }
      case 'candidature spontanee': {
        return this.condidatureSpontaneeService.getAllInfo();
      }
      case 'demande specifique': {
        return this.demandeSpecifiqueService.getAllInfo();
      }
      case 'documents': {
        return this.documentService.getAllInfo();
      }
      case 'recruteur': {
        return this.recruteurService.getAllRecruteursInfo();
      }
      // #region
      // case 'evenement': { return this.evenementService.getAllInfo() }
      // case 'forums':{return this.forumService.getAllInfo() }
      // case 'liens utiles':{return this.lienUtileService.getAllInfo() }
      // case 'metier':{return this.metierService.getAllInfo() }
      // case 'quiz':{return this.QuizService.getAllInfo() }
      // case 'offre':{return this.offreService.getAllInfo() }
      // case 'recruteur':{return this.recruteurService.getAllInfo() }
      // case 'sondage':{return this.sondageService.getAllInfo() }
      // case 'rubrique':{return this.rubriaueService.getAllInfo() }
      // case 'temoignage': {return this.temoingnageService.getAllInfo() }
      // // case '':this.postService;
      // #endregion
    }
  }

  // rubrique-details

  // conseils pratique

  getAllService(pageName: string) {
    if (pageName == 'recruteur') {
      console.log('getAllService');

      return this.recruteurService;
    }
    return;
  }
}
