import { DefaultService } from './default.service';
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
import { GuidesEmploiService } from './guides-emploi.service';

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
    private guidesEmploiService : GuidesEmploiService
  ) { }
  get(pageName: string): any {

    switch (pageName) {
      // #region  HAS THE SAME  RubriqueService
      case 'legislations-et-textes-lois':
        return this.rubriqueService;
      case 'soft-skills':
        return this.rubriqueService;
      case 'hard-skills':
        return this.rubriqueService;
      case 'conseils-pratique':
        return this.rubriqueService;
      case 'actualites-emploi':
        return this.rubriqueService;
      // #endregion
      // #region HASE THE SAME  offreService

      case 'offres-emploi':
        return this.offreService;
      case 'offres-de-stage':
        return this.offreService;
      case 'offres-alternance':
        return this.offreService;
      case 'offres-extra':
        return this.offreService;

      // #endregion
      // #region HASE THE SAME recruteurService
      case 'recruteurs':
        return this.recruteurService;
      case 'etablissements-formation':
        return this.recruteurService;
      case 'cabinets-recrutement':
        return this.recruteurService;
      case 'associations-insertion-economique':
        return this.recruteurService;

      // #endregion
      // #region  HASE THE SAME metierService
      case 'decouverte-des-metiers':
        return this.metierService;
      case 'metiers-pour-vous':
        return this.metierService;

      // #endregion
      // #region  EVRYTHING IS OKY
      case 'evenement':
        return this.evenementService;
      case 'candidats':
        return this.candidatService;
      case 'condidatures-spontannes':
        return this.condidatureSpontaneeService;
      case 'demandes-specifiques':
        return this.demandeSpecifiqueService;
      case 'quiz':
        return this.QuizService;
      case 'forums':
        return this.forumService;
      case 'sondage':
        return this.sondageService;
      case 'temoignage':
        return this.temoingnageService;
      case 'bloggers':
        return this.blogService;
      case 'documents':
        return this.documentService;
      case 'adresses-utiles':
        return this.addesseService;
      case 'liens-utiles':
        return this.lienUtileService;
      case 'guides-emploi':
        return this.guidesEmploiService;
      default:
        return this.defaultService;
      // #endregion
    }
  }

  orientation: string = 'verticale';
  toggleOrientation(orientation: any) {
    this.orientation = orientation;
  }

  // rubrique-details

  // conseils pratique

  addToWishList(idPassed: string, pageName: string) {
    let wishList: any = sessionStorage.getItem('wishList');
    wishList = JSON.parse(wishList);

    if (wishList.length == 0) {
      console.log('🚀 ~ ~ wishList.length==0');
      wishList.push({
        pageName: pageName,
        items: [idPassed],
      });
    } else {
      console.log(idPassed);

      let pageNameExist: boolean = false;
      let itemExistOnList: boolean = false;

      wishList.map((wishItem: any, index: any) => {
        if (wishItem.pageName == pageName) {
          pageNameExist = true;
          wishItem.items.map((id: any) => {
            if (id == idPassed) {
              itemExistOnList = true;
            }
          });
          if (itemExistOnList) {
            console.log('Already Exist + removed from List');

            wishItem.items.splice(wishItem.items.indexOf(idPassed), 1);
          }
          if (wishItem.items.length == 0) {
            wishList.splice(index, 1);
          }
        }
      });

      if (!pageNameExist) {
        console.log('add all new element ');

        wishList.push({
          pageName: pageName,
          items: [idPassed],
        });
      } else {
        if (!itemExistOnList) {
          wishList.map((wishItem: any) => {
            if (wishItem.pageName == pageName) {
              wishItem.items.push(idPassed);

              console.log('add element in exist type');
            }
          });
        }
      }
    }

    sessionStorage.setItem('wishList', JSON.stringify(wishList));
    console.log(
      '🚀 ~ file: generic.service.ts ~ line 106 ~ GenericService ~ addToWishList ~ wishList',
      wishList
    );
  }


}































      // 'offres-emploi';
      // 'offres-de-stage';
      // 'offres-alternance';
      // 'offres-extra';
      ////////////////////
      // 'candidats';
      // 'demandes-specifiques';
      // 'condidatures-spontannes';
      // ////////////////////
      // 'recruteurs';
      // 'etablissements-formation';
      // 'cabinets-recrutement';
      // 'associations-insertion-economique';
      // ////////////////////
      // 'decouverte-des-metiers';
      // 'soft-skills';
      // 'hard-skills';
      // 'metiers-pour-vous';
      // 'quiz';
      // ////////////////////
      // 'conseils-pratique';
      // 'adresses-utiles';
      // 'liens-utiles';
      // 'documents';
      // 'guides-emploi';
      // 'legislations-et-textes-lois';

      // ////////////////////
      // 'evenement';
      // 'actualites-emploi';
      // // ///////////////
      // 'forums';
      // 'sondage';
      // 'temoignage';
      // 'bloggers';
      // ////////////////////
      // 'undfind';


