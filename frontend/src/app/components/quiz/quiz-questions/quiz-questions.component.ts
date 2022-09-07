import { Component, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { QuizService } from 'src/app/shared/services/quiz.service'

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.scss'],
})
export class QuizQuestionsComponent implements OnInit {
  currentQuestion: any = []
  table_question: any = []
  questionNbr: number = 0
  choix: any = ''
  quiz: any = []
  checkForm: FormGroup

  constructor(
    public quizService: QuizService,
    private router: Router,

    private fb: FormBuilder,
  ) {
    this.checkForm = this.fb.group({
      listChecked: this.fb.array([]),
    })
    this.quiz = {
      _id: '61fc01272cbfd01f044ae661',
      nombre_participants: null,

      translations: {
        fr: {
          __titre: 'Quiz HTML CSS',
          __nom_responsable: 'fdsfsfs',
          __description: 'qfsfsfsf',
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
      image:
        'http://localhost:3600/uploads/images/quiz/image-1643905319097.jpg',
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
    this.quizService.reponses = []

    this.currentQuestion = this.quiz.question_quiz[0]
    this.table_question = this.quiz.question_quiz

    //this.calculStatistique(this.quiz)
    this.questionNbr = 0
    // this.choixs = this.currentQuestion.reponse_quiz
    // this.currentQuestion.bonneReponse = _.find(this.choixs, [
    //   '__valeur_reponse_juste',
    //   true,
    // ])
    // this.quizService.getOneQuiz(this.id).subscribe((quiz) => {
    //   this.quiz = quiz
    //

    //   this.currentQuestion = this.quiz.question_quiz[0]
    //   this.table_question = this.quiz.question_quiz

    //   this.calculStatistique(this.quiz)
    //   this.questionNbr = 0
    //   this.choixs = this.currentQuestion.reponse_quiz
    //   this.currentQuestion.bonneReponse = _.find(this.choixs, [
    //     '__valeur_reponse_juste',
    //     true,
    //   ])

    // })
  }
  check() {
    this.questionNbr += 1

    this.currentQuestion.userReponse = this.choix

    this.quizService.reponses.push(this.currentQuestion)

    if (this.questionNbr < this.quiz.question_quiz.length) {
      this.currentQuestion = this.quiz.question_quiz[this.questionNbr]

      // this.choixs = this.choix = this.currentQuestion.reponse_quiz

      this.choix = []
      // this.currentQuestion.bonneReponse = _.find(this.choixs, [
      //   '__valeur_reponse_juste',
      //   true,
      // ])

      //  this.indic = false
    } else {
      this.router.navigateByUrl('/quiz/quiz-result').then((rep: any) => {})
    }
  }
  ngOnInit(): void {}
  selectedChoise: any[] = []
  onChange(event: any) {
    if (event.checked) {
      this.selectedChoise.push(event.source.value)
    } else {
      const i = this.selectedChoise.findIndex(
        (x) => x._id === event.source.value._id,
      )
      this.selectedChoise.splice(i, 1)
    }
    this.choix = [...this.selectedChoise]
  }
}
