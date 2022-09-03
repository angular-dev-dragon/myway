import { Component, OnInit } from '@angular/core'
import { QuizService } from 'src/app/shared/services/quiz.service'

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss'],
})
export class QuizResultComponent implements OnInit {
  constructor(public quizService: QuizService) {}
  reponses: any = []
  rFausse: number = 0
  rJuste: number = 0
  participation: any
  nbr_personnes_ayant_la_meme_note: number = 0
  nbr_personne_ayant_une_note_superior: number = 0
  nbr_personne_ayant_une_note_inferior: number = 0
  N_Reponses_Correctes: number = 0
  score: number = 0
  classement_participation: number = 0
  note_obtenu: number = 0
  statistique: any
  pt: any
  quiz_modifie: any = {
    _id: null,
    statistique_score: [],
    question_quiz: [],
    participation_quiz: [],
  }
  index: any
  ngOnInit(): void {
    this.reponses = this.quizService.reponses

    let userResponse: any = []
    this.reponses.forEach((rp: any) => {
      if (rp.type == 'simple') {
        rp.userReponse.__valeur_reponse_juste == false ||
        rp.userReponse.__valeur_reponse_juste == null
          ? (this.rFausse += 1)
          : (this.rJuste += 1)

        userResponse.push({
          type: 'simple',
          qst: rp._id,
          response: rp.userReponse,
        })
      } else if (rp.type == 'multiple') {
        let filterdResponse = rp.userReponse.filter(
          (response: any) => response.__valeur_reponse_juste == true,
        )

        let filterdResponseQuiz = rp.reponse_quiz.filter(
          (response: any) => response.__valeur_reponse_juste == true,
        )

        filterdResponse.length == filterdResponseQuiz.length
          ? (this.rJuste += 1)
          : (this.rFausse += 1)

        userResponse.push({
          type: 'multiple',
          qst: rp._id,
          response: rp.userReponse,
        })
      }
    })

    if (this.reponses.length > 0) {
      const participation = {
        score_obtenu: this.rJuste,
        note_obtenue: this.rJuste / this.quiz.question_quiz.length,
        reponse: userResponse,
      }
      this.participation = participation
      //enregistrement de la participation
      // this.quizeService
      //   .addQuizParticipation(participation, this.id)
      //   .subscribe((ptN:any) => {})

      this.nbr_personnes_ayant_la_meme_note = this.quiz.participation_quiz.filter(
        (p: any) => p.note_obtenue == participation.note_obtenue,
      )?.length
      // this.quiz.statistique_score[this.rJuste]?.Nombre_N_Reponses_Justes
      // this.classement_participation = this.quiz.statistique_score[this.rJuste].n_reponse_juste
      this.quiz_modifie = this.quiz

      //
      // this.quiz_modifie.statistique_score[this.rJuste].Nombre_N_Reponses_Justes += 1

      //dans le cas ou le candidat a repondu correctement a toutes les questions du quiz
      if (this.rJuste == this.quiz_modifie.question_quiz.length) {
        //incrementer le classement
        this.quiz_modifie.statistique_score[
          this.rJuste
        ].Classement_Participation += 1
        //incrementer le nombre des candidats ayant le meme score
        this.quiz_modifie.statistique_score[
          this.rJuste
        ].Nombre_N_Reponses_Justes += 1

        this.classement_participation = this.quiz_modifie.statistique_score[
          this.rJuste
        ].Nombre_N_Reponses_Justes

        //incrementer le classement des niveaux inferieurs
        for (var i = this.rJuste - 1; i >= 0; i--) {
          if (
            this.quiz_modifie.statistique_score[i].Nombre_N_Reponses_Justes != 0
          ) {
            var sum = 0
            for (var j = i; j <= this.quiz_modifie.question_quiz.length; j++) {
              sum += this.quiz_modifie.statistique_score[j]
                .Nombre_N_Reponses_Justes
            }
            this.quiz_modifie.statistique_score[
              i
            ].Classement_Participation = sum
          }
        }

        //mettre a jour la table statistique_score dans la bdd
        // this.quizeService
        //   .UpdataStatistique(
        //     this.quiz_modifie._id,
        //     this.quiz_modifie.statistique_score,
        //   )
        //   .subscribe((data) => {
        //     this.toastrService.success(
        //       '&#x1F60A;',
        //       'Merci Pour Votre Participation',
        //       {
        //         timeOut: 3000,
        //         progressBar: true,
        //         progressAnimation: 'increasing',
        //         positionClass: 'toast-top-right',
        //       },
        //     )
        //   })
      }
      //dans le cas ou le score obtenu est inferieur au nombre total des questions
      else if (
        this.rJuste >= 0 &&
        this.rJuste < this.quiz_modifie.question_quiz.length
      ) {
        //incrementer le nombre des candidats ayant le meme score
        this.quiz_modifie.statistique_score[
          this.rJuste
        ].Nombre_N_Reponses_Justes += 1

        var sum: number = 0

        //calculer le classement actuel a partir des niveaux superieurs
        for (
          let i = this.rJuste;
          i <= this.quiz_modifie.question_quiz.length;
          i++
        ) {
          //la somme de tout les sessions de jeu
          sum += this.quiz_modifie.statistique_score[i].Nombre_N_Reponses_Justes

          this.classement_participation = sum
        }
        //classement actuel
        this.quiz_modifie.statistique_score[
          this.rJuste
        ].Classement_Participation = sum

        //incrementer les classements des niveaux inferieurs dans le cas ou le nombre de sessions de jeu !=0
        for (var i = this.rJuste - 1; i >= 0; i--) {
          if (
            this.quiz_modifie.statistique_score[i].Nombre_N_Reponses_Justes != 0
          ) {
            var sum = 0
            for (var j = i; j <= this.quiz_modifie.question_quiz.length; j++) {
              sum += this.quiz_modifie.statistique_score[j]
                .Nombre_N_Reponses_Justes
            }
            this.quiz_modifie.statistique_score[
              i
            ].Classement_Participation = sum
          }
        }

        this.statistique = this.quiz_modifie.statistique_score

        // this.quizeService
        //   .UpdataStatistique(this.quiz_modifie._id, this.statistique)
        //   .subscribe((data) => {})
      } else {
        for (let i = 0; i <= this.quiz_modifie.question_quiz.length; i++) {
          console.log(
            'Classement_Participation',
            (this.quiz_modifie.statistique_score[
              this.rJuste
            ].Classement_Participation += this.quiz_modifie.statistique_score[
              i
            ].Classement_Participation),
          )

          this.quiz_modifie.statistique_score[
            this.rJuste
          ].Classement_Participation += this.quiz_modifie.statistique_score[
            i
          ].Classement_Participation
        }
        this.classement_participation = this.quiz_modifie.statistique_score[
          this.rJuste
        ].Classement_Participation
      }
    }
    if (this.reponses.length) {
      this.calculStatistique(this.quiz)
    }
  }
  brep: any
  indic: any

  quiz: any = {
    _id: '61fc01272cbfd01f044ae661',
    nombre_participants: null,

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
    image: 'http://localhost:3600/uploads/images/quiz/image-1643905319097.jpg',
    participation_quiz: [
      {
        _id: { $oid: '625938d6cefa5c161c8dc2f2' },
        score_obtenu: '1',
        note_obtenue: '0.5',
      },
      {
        _id: { $oid: '6259394bcefa5c161c8dc2f6' },
        score_obtenu: '0',
        note_obtenue: '0',
      },
      {
        _id: { $oid: '62593dbecefa5c161c8dc322' },
        score_obtenu: '0',
        note_obtenue: '0',
      },
      {
        _id: { $oid: '625d93b17d9de5eb4b15f24f' },
        score_obtenu: '0',
        note_obtenue: '0',
      },
      {
        _id: { $oid: '625d94307d9de5eb4b15f253' },
        score_obtenu: '0',
        note_obtenue: '0',
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
        note_obtenue: '0.5',
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
        valeur_evaluation: '0',
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
        valeur_evaluation: '0',
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
  tes() {}
  statistique_score = []
  statistique_qst: any = []
  table_question: any = []
  scores: any = {}
  notes: any = {}
  nb_participant = 0
  calculStatistique(success: any) {
    this.table_question = this.quiz.question_quiz

    success.participation_quiz.push(this.participation)
    this.nb_participant = success.participation_quiz.length
    if (success && success.participation_quiz && this.nb_participant) {
      this.statistique_score = this.quiz_modifie.statistique_score
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
      this.notes['minNote'] = Math.min.apply(null, notes) * 10
      this.notes['maxNote'] = Math.max.apply(null, notes) * 10
      this.notes['moyenneNote'] = (summNotes / this.nb_participant) * 10
      this.scores['moyenScore'] = summScore / this.nb_participant

      for (let participation of success.participation_quiz) {
        if (participation.reponse) {
          for (let reponse of participation.reponse)
            this.statistique_qst.push(reponse)
        }
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
