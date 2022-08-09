import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.scss'],
})
export class DetailsArticleComponent implements OnInit {
  public avisForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.avisForm = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z \u0600-\u06FF]+$'),
      ]),
      prenom: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z \u0600-\u06FF]+$'),
      ]),

      reference: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      telephone: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+212-?)|0)?[0-9]{10}$'),
        Validators.minLength(10),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      avis: new FormControl('', [Validators.required, Validators.minLength(3)]),
    })
  }

  ngOnInit(): void {}
  article: any = {
    _id: { $oid: '626955f1c3d17a49a4ddc74f' },
    commentaire_interne: [],
    Auteur: [
      {
        nom: 'nom',
        prenom: 'prenom',
        fonction: 'Anim aperiam natus a',
        apropos: '',
        origine: 'Sint et in amet ab ',

        salutation: 'menu1.Mr',
        ref_membre_si_membre_ch: '',
        email: 'wozyfely@mailinator.com',
        tel: 'Maiores expedita eni',
        ordre_affichage: 0,
        etat_objet: 'active',
        etat_validation: 'en cours de création',
        photo:
          'http://localhost:3600/uploads/images/auteur/photo-1647592273682.png',
        __v: 0,
      },
    ],

    Organisation: [
      {
        _id: { $oid: '621e304c0c91ee379faf9c7c' },

        nom_organisation: 'Organisation 1',
        type_organisation: 'Droit de la femme',
        secteurs_activite_ou_domaine: 'Droit de la femme',
        description_organisation: 'anniversaire',
        representee_par_nom_prenom: 'représentant',
        representee_par_fonction: 'fonction De Repertoire',
        adresse: '22,Rue des marchands',
        ville: 'Casablanca',
        pays: 'Maroc',

        autorisation_officielle: 'false',
        code_postal: 1,
        tel: '+212566332210',
        email: 'test@gmail.com',
        ordre_affichage: 1,
        nbr_article: 0,
      },
    ],

    titre: 'Voluptatem non excep',
    s_titre: 'Do corrupti quo et ',
    resume:
      "Au niveau législatif, la procédure suivie pour l'adoption d'une loi de cette\nnature, soumise pour la première fois au Parlement, a constitué une initiative sans\nprécédent, ayant des significations multiples qui témoignent de l'importance de ce\nCode. Saluant et appréciant hautement cette Initiative de Sa Majesté le Roi\nMohammed VI,",
    mots_cles: ['Laudantium illo cil'],
    type_auteur: '',
    thematique_taxonomie: '',
    sous_categorie: '',
    etiquette: 'Eligendi ea non quis',

    date_creation: '2022-04-27T14:38:39.085Z',
    date_publication: '2022-04-27T14:43:36.215Z',
    date_arret_publication: null,
    nbre_vues: 6,
    note_moyenne_obtenue: 0,
    etat_validation: 'en cours de publication',
    etat_objet: 'active',
    nbre_partage: 0,
    nbre_impression: 0,
    nbre_telechargement: 0,
    nbre_enregistrement: 0,
    like: 0,
    unlike: 0,
    telechargeable: true,
    partageable: true,
    enregistrable: true,
    Annotation: [],
    Reference: [
      {
        commentaire_interne: [],
        _id: { $oid: '622b0fa13ffa4e31e920a075' },
        titre: 'Est dicta ducimus s',
        commentaire: 'Sed ad inventore qui',

        chemin_si_doc: '',
        link: 'Mollit ut ducimus v',
        lien_interne_externe: 'false',
        date_enregistrement: { $date: '2022-03-11T09:00:17.154Z' },
      },
    ],
    Document: [],
    cle_rubrique: '6218bf3f5200e515144f8050',
    photo: '/uploads/images/article/photo-1651070449783.jpg',
    __v: 0,

    paragraphes: [
      {
        photo:
          'https://www.reuters.com/resizer/-f4Ta5gNCjbcM80Of0hH05ws-28=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LQL7OAUTFFMF3DNKAA5OK37B7Q.jpg',
        titre_contenu: 'Projets de développement resume ',
        source_contenu: 'Projets de développement resume ',
        lien_contenu:
          'https://www.reuters.com/resizer/-f4Ta5gNCjbcM80Of0hH05ws-28=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LQL7OAUTFFMF3DNKAA5OK37B7Q.jpg',
        type_contenu: 'image',
        Chemin_associe: '',

        designation:
          'Gaza : le Maroc exprime sa “vive inquiétude” et appelle à “éviter davantage d’escalade',
        description:
          'Le Maroc appelle à un retour au calme et à l’arrêt des hostilités. Dans un communiqué diffusé le samedi 6 août, le ministère des Affaires étrangères a fait état de sa “vive inquiétude” et a appelé à la désescalade. “Le Royaume du Maroc suit avec une vive inquiétude la grave détérioration de la situation dans la bande de Gaza, à cause du retour des actes de violence et des combats, qui ont causé des pertes humaines et des dégâts matériels”, indique le communiqué. Rappelant que le roi Mohammed VI préside le Comité Al Qods, la diplomatie marocaine “appelle à éviter davantage d’escalade et à rétablir le calme pour que la situation ne dégénère pas, épargnant ainsi à la région d’autres tensions qui compromettent les chances de paix”, souligne encore le communiqué. “Tout en réitérant ses positions constantes soutenant les droits du peuple palestinien, le Royaume du Maroc affirme que la solution durable au conflit entre les deux parties, palestinienne et israélienne, réside dans l’établissement d’un État palestinien indépendant vivant côte à côte avec l’État d’Israël dans la sécurité et la paix”, conclut le communiqué',
      },
      {
        designation: 'Nos Services',
        description:
          'Nous sommes là, avec vous! Notre principe directeur est de faire équipe avec vous. Nous sommes là pour vous accompagner dans vos besoins et répondre à vos différents défis en ce qui a trait à la gestion de la fonction des ressources humaines. Notre mission dit tout, contribuer à propulser l’aura de votre entreprise!',
      },
      {
        designation: 'Pourquoi choisir ANAYLI Consulting ?',
        description:
          'Parce qu’avec ANAYLI, vous aurez accès à une équipe multidisciplinaire. Peu importe le défi auquel vous devez faire face, notre équipe comporte différents intervenants ayant chacun ses forces. Nous sommes commis à faire un impact positif dans votre entreprise.',
      },
      {
        description:
          "Consequat NesciuntUne organisation est en sciences sociales un groupe social formé d'individus en interaction, ayant un but collectif, mais dont les préférences, les informations, les intérêts et les connaissances peuvent diverger1 : une entreprise, une administration publique, un syndicat, un parti politique, une association, etc.\n\nL'organisation de quelque chose désigne l'action d'organiser (structurer, délimiter, agencer, répartir ou articuler). En ce sens, il s'agit d'un processus social.\n\nUne organisation est le résultat d'actions réglementées (une entreprise, un service public, une administration, une association, une armée, un événement, etc.).",
        designation: 'Ipsa porro et ad ul',

        Chemin_associe:
          'http://localhost:3600/uploads/paragraphe/1_file-1646146911264.mp4',

        lien_contenu: 'Eum nobis et laborum',
        type_contenu: 'video',

        source_contenu: 'Autem ea ex veniam ',
        titre_contenu: 'Id nesciunt esse ',
      },
      {
        designation: 'Article 1 Projets de développement resume ',
        description:
          'Le projet est une forme d’organisation des affaires collectives apparue dans l’après Seconde Guerre mondiale pour rationaliser les grandes entreprises du complexe militaro-industriel américain (Ika et Hodgson, 2014). Il a rapidement gagné de nombreux secteurs d’activité, constituant notamment l’un des instruments principaux de l’action publique dans les pays du Sud (Hirschman, 1967). En première instance, un projet de développement peut être défini comme une organisation temporaire, dotée de moyens dédiés – humains, financiers, techniques – fonctionnant comme un dispositif à double détente : sa mise en œuvre vise des objectifs propres et est censée servir de levier de transformation de l’action publique à plus grande échelle (Sjöblom et al., 2013). Si une littérature importante a considéré le projet de développement comme unité d’analyse privilégiée pour questionner son efficacité au regard de ses objectifs (e.g. Castellanet, 2003) et ses effets sur les dynamiques sociales locales (e.g. Olivier de Sardan, 1995), les modalités de son articulation à l’action publique ont été moins analysées. Cet article propose ainsi de mettre en regard (i) la question de l’efficacité des projets et (ii) leur capacité à faire évoluer la conduite de l’action publique.',

        etat_objet: 'active',
        photo: 'assets/images/img-article.webp',
        titre_contenu: 'Projets de développement resume ',
        source_contenu: 'Projets de développement resume ',
        lien_contenu: ' ',
        type_contenu: 'image',
        Chemin_associe: '',
      },

      {
        designation: '',
        description: '',
      },
    ],
  }
  public like: boolean = false
  public unlike: boolean = false
  increMenterImpression() {
    window.print()

    // this.postService.incrementerImpressionArticle(this.article._id).subscribe(
    //   (res) => {
    //     // console.log('response', res)
    //   },
    //   (err) => {
    //     console.log(err)
    //   },
    // )
  }
  incrementerPartage() {
    // this.postService.incrementerPartage(this.article._id).subscribe(
    //   (res) => {
    //     //  console.log('response', res)
    //   },
    //   (err) => {
    //     console.log(err)
    //   },
    // )
  }
  likeFunction(event: any) {
    if (event == 'like') {
      if (!this.like) {
        this.incrementerLikeArticle()
        if (this.unlike) {
          this.annulerUnlikeArticle()
        }
      } else {
        this.annulerLikeArticle()
      }
    } else {
      this.unlikeFunction(event)
    }
  }

  unlikeFunction(event: any) {
    if (!this.unlike) {
      this.incrementerUnlikeArticle()
      if (this.like) {
        this.annulerLikeArticle()
      }
    } else {
      this.annulerUnlikeArticle()
    }
  }
  incrementerVueArticle() {
    // this.postService.incrementerVueArticle(this.post._id).subscribe((res) => {
    //   this.post.nbre_vues++
    // })
  }

  incrementerLikeArticle() {
    // this.like = true
    // this.post.like != null && this.post.like != undefined
    //   ? this.post.like++
    //   : (this.post.like = 1)
    // this.postService
    //   .incrementerLikeArticle(this.post._id)
    //   .subscribe((res) => {})
  }

  annulerLikeArticle() {
    // this.like = false
    // this.post.like--
    // this.postService.decrementerLikeArticle(this.post._id).subscribe((res) => {
    //   // //console.log('nombre de like ======= ',res.like);
    // })
  }

  incrementerUnlikeArticle() {
    // this.unlike = true
    // this.post.unlike != null && this.post.unlike != undefined
    //   ? this.post.unlike++
    //   : (this.post.unlike = 1)
    // this.postService
    //   .incrementerUnlikeArticle(this.post._id)
    //   .subscribe((res) => {
    //     // //console.log('nombre de like ======= ',res.like);
    //   })
  }

  annulerUnlikeArticle() {
    // this.unlike = false
    // this.post.unlike--
    // this.postService
    //   .decrementerUnlikeArticle(this.post._id)
    //   .subscribe((res) => {
    //     // //console.log('nombre de like ======= ',res.like);
    //   })
  }
  public sendAvis() {
    if (this.avisForm.valid) {
      this.avisForm.reset()
    } else {
      this.avisForm.markAllAsTouched()
    }
  }
}
