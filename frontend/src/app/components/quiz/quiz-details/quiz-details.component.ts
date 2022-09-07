import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.scss'],
})
export class QuizDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.calculStatistique(this.quiz)
  }
  quiz: any = {
    image:
      'https://wegate.eu/sites/default/files/styles/resize_750x450/public/coursera.jpg?itok=5dhpuGwQ',
    titre: 'Quiz HTML CSS',
    resume:
      'Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included Bootstrap dropdown JavaScript plugin. They’re toggled by clicking, not by hovering; this is an intentional design decision.',
    domaine: 'Front-End Developpement',
    specialisation: 'Bootstrap Html CSS',
    nbQuestions: 10,
    date: '2022-05-15',
    niveau: 'Avancé',
    note: 5,
    translations: {
      fr: {
        __titre: 'Quiz HTML CSS',
        __nom_responsable: 'fdsfsfs',
        __description:
          "Consequat NesciuntUne organisation est en sciences sociales un groupe social formé d'individus en interaction, ayant un but collectif, mais dont les préférences, les informations, les intérêts et les connaissances peuvent diverger1 : une entreprise, une administration publique, un syndicat, un parti politique, une association, etc.\n\nL'organisation de quelque chose désigne l'action d'organiser (structurer, délimiter, agencer, répartir ou articuler). En ce sens, il s'agit d'un processus social.\n\nUne organisation est le résultat d'actions réglementées (une entreprise, un service public, une administration, une association, une armée, un événement.).",
      },
      ar: { __designation: '', __nom_responsable: '', __description: '' },
      en: { __designation: '', __nom_responsable: '', __description: '' },
    },
    details: [
      {
        description:
          "Consequat NesciuntUne organisation est en sciences sociales un groupe social formé d'individus en interaction, ayant un but collectif, mais dont les préférences, les informations, les intérêts et les connaissances peuvent diverger1 : une entreprise, une administration publique, un syndicat, un parti politique, une association, etc.\n\nL'organisation de quelque chose désigne l'action d'organiser (structurer, délimiter, agencer, répartir ou articuler). En ce sens, il s'agit d'un processus social.\n\nUne organisation est le résultat d'actions réglementées (une entreprise, un service public, une administration, une association, une armée, un événement, etc.).",
        designation: 'Ipsa porro et ad ul',
      },
      {
        designation: 'Article 1 Projets de développement resume ',
        description:
          'Le projet est une forme d’organisation des affaires collectives apparue dans l’après Seconde Guerre mondiale pour rationaliser les grandes entreprises du complexe militaro-industriel américain (Ika et Hodgson, 2014). Il a rapidement gagné de nombreux secteurs d’activité, constituant notamment l’un des instruments principaux de l’action publique dans les pays du Sud (Hirschman, 1967). En première instance, un projet de développement peut être défini comme une organisation temporaire, dotée de moyens dédiés – humains, financiers, techniques – fonctionnant comme un dispositif à double détente : sa mise en œuvre vise des objectifs propres et est censée servir de levier de transformation de l’action publique à plus grande échelle (Sjöblom et al., 2013). Si une littérature importante a considéré le projet de développement comme unité d’analyse privilégiée pour questionner son efficacité au regard de ses objectifs (e.g. Castellanet, 2003) et ses effets sur les dynamiques sociales locales (e.g. Olivier de Sardan, 1995), les modalités de son articulation à l’action publique ont été moins analysées. Cet article propose ainsi de mettre en regard (i) la question de l’efficacité des projets et (ii) leur capacité à faire évoluer la conduite de l’action publique.',
      },
    ],
    ref_quiz: 'refML001254785',
    date_ouverture: '2022-02-03',
    date_cloture: '2022-02-03',

    nombre_questions: null,
    statistique_score: [
      {
        _id: '6256aef016902822ac894323',
        N_Reponses_Correctes: 0,
        Nombre_N_Reponses_Justes: 6,
        Classement_Participation: 8,
      },
      {
        _id: '6256aef016902822ac894324',
        N_Reponses_Correctes: 1,
        Nombre_N_Reponses_Justes: 2,
        Classement_Participation: 2,
      },
      {
        _id: '6256aef016902822ac894325',
        N_Reponses_Correctes: 2,
        Nombre_N_Reponses_Justes: 0,
        Classement_Participation: 0,
      },
    ],

    participation_quiz: [
      {
        _id: { $oid: '625938d6cefa5c161c8dc2f2' },
        score_obtenu: '1',
        note_obtenue: '2',
      },
      {
        _id: { $oid: '6259394bcefa5c161c8dc2f6' },
        score_obtenu: '0',
        note_obtenue: '3',
      },
      {
        _id: { $oid: '62593dbecefa5c161c8dc322' },
        score_obtenu: '0',
        note_obtenue: '1',
      },
      {
        _id: { $oid: '625d93b17d9de5eb4b15f24f' },
        score_obtenu: '0',
        note_obtenue: '2',
      },
      {
        _id: { $oid: '625d94307d9de5eb4b15f253' },
        score_obtenu: '0',
        note_obtenue: '3',
      },
      {
        _id: { $oid: '625fe07678cb1361a3cd9131' },
        score_obtenu: '0',
        note_obtenue: '0',
      },
      {
        _id: { $oid: '62e2ad36125d8d57290a97b3' },
        score_obtenu: '0',
        note_obtenue: '0',
      },
      {
        _id: { $oid: '6308f271fe8f1fc7911c7cf6' },
        score_obtenu: '1',
        note_obtenue: '2',
      },
    ],

    question_quiz: [
      {
        _id: '6256aedf16902822ac894319',
        translations: {
          fr: {
            __label_question: 'Que signifie HTML ?',
            __indicateur: 'Wilkerson Ward Co',
          },
          ar: { __label_question: '', __indicateur: '' },
          en: { __label_question: '', __indicateur: '' },
        },
        valeur_evaluation: '1',
        ordre: '',
        etat_objet: 'active',
        etat_validation: '',
        type: 'simple',
        reponse_quiz: [
          {
            translations: {
              fr: { __texte_reponse: ' Home Tool Markup Language' },
              ar: { __texte_reponse: '' },
              en: { __texte_reponse: '' },
            },
            _id: '6256aedf16902822ac89431a',
            __valeur_reponse_juste: true,
          },
          {
            translations: {
              fr: {
                __texte_reponse: ' Hyperlinks and Text Markup Language',
              },
              ar: { __texte_reponse: '' },
              en: { __texte_reponse: '' },
            },
            _id: '6256aedf16902822ac89431b',
            __valeur_reponse_juste: false,
          },
          {
            translations: {
              fr: { __texte_reponse: ' Hyper Text Markup Language' },
              ar: { __texte_reponse: '' },
              en: { __texte_reponse: '' },
            },
            _id: '6256aedf16902822ac89431c',
            __valeur_reponse_juste: false,
          },
        ],
        image:
          'http://localhost:3600/uploads/images/quiz/image-1649848031269.jpg',
      },
      {
        _id: '6256aee816902822ac89431d',
        translations: {
          fr: {
            __label_question:
              'Parmi les balises suivantes, lesquelles sont obligatoires par le standard HTML ?',
            __indicateur: 'Schultz and Hoffman LLC',
          },
          ar: { __label_question: '', __indicateur: '' },
          en: { __label_question: '', __indicateur: '' },
        },
        valeur_evaluation: '2',
        ordre: '',
        etat_objet: 'active',
        etat_validation: '',
        type: 'multiple',

        reponse_quiz: [
          {
            translations: {
              fr: { __texte_reponse: '<html>' },
              ar: { __texte_reponse: '' },
              en: { __texte_reponse: '' },
            },
            _id: '6256aee816902822ac89431e',
            __valeur_reponse_juste: true,
          },
          {
            translations: {
              fr: { __texte_reponse: '<head>' },
              ar: { __texte_reponse: '' },
              en: { __texte_reponse: '' },
            },
            _id: '6256aee816902822ac89431e',
            __valeur_reponse_juste: false,
          },
          {
            translations: {
              fr: { __texte_reponse: '<script>' },
              ar: { __texte_reponse: '' },
              en: { __texte_reponse: '' },
            },
            _id: '6256aee816902822ac89431e',
            __valeur_reponse_juste: false,
          },
          {
            translations: {
              fr: { __texte_reponse: '<body>' },
              ar: { __texte_reponse: '' },
              en: { __texte_reponse: '' },
            },
            _id: '6256aee816902822ac89431e',
            __valeur_reponse_juste: true,
          },
        ],
        image:
          'http://localhost:3600/uploads/images/quiz/image-1649848040085.webp',
      },
    ],
  }
  statistique_score: any = []
  statistique_qst: any = []
  table_question: any = []

  scores: any = {}
  notes: any = {}
  nb_participant = 0
  evaluationNote: number = 0
  calculStatistique(success: any) {
    this.quiz.question_quiz.map((question: any) => {
      this.evaluationNote += +question.valeur_evaluation
    })

    this.nb_participant = success.participation_quiz.length || 0
    if (success && success.participation_quiz && this.nb_participant) {
      this.statistique_score = success.statistique_score
      var scores = success.participation_quiz.map(
        (elt: any) => elt.score_obtenu,
      )
      var notes = success.participation_quiz.map((elt: any) => elt.note_obtenue)

      var i = 0,
        j = 0,
        summScore = 0,
        summNotes = 0
      while (i < notes.length) {
        summNotes = summNotes + Number(notes[i++])
      }

      while (j < scores.length) {
        summScore = summScore + Number(scores[j++])
      }
      this.scores['minScore'] = Math.min.apply(null, scores)
      this.scores['maxScore'] = Math.max.apply(null, scores)
      this.notes['minNote'] = Math.min.apply(null, notes)
      this.notes['maxNote'] = Math.max.apply(null, notes)
      this.notes['moyenneNote'] = summNotes / this.nb_participant
      this.scores['moyenScore'] = summScore / this.nb_participant
      console.log(
        '🚀 ~ file: quiz-details.component.ts ~ line 267 ~ QuizDetailsComponent ~ calculStatistique ~ success',
        success,
      )

      for (let participation of success.participation_quiz) {
        if (participation.reponse) {
          for (let reponse of participation.reponse)
            this.statistique_qst.push(reponse)
        }
        console.log('participation.reponse', participation.reponse)
      }

      let res = []

      for (let qst of this.table_question) {
        let data = this.statistique_qst.filter((s: any) => s.qst == qst._id)

        let nb_j = data.filter(
          (d: any) => d.response.__valeur_reponse_juste == true,
        ).length
        let nb_f = data.filter(
          (d: any) => d.response.__valeur_reponse_juste == false,
        ).length
        res.push({
          qst: qst.translations['fr']?.__label_question,
          nb_j: nb_j,
          nb_f: nb_f,
        })
      }
      this.statistique_qst = res
    }
  }
}
