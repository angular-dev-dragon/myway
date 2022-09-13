import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { CondidatService } from '../../services/condidat.service'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-c-details',
  templateUrl: './c-details.component.html',
  styleUrls: ['./c-details.component.scss'],
})
export class CDetailsComponent implements OnInit {
  misag_type: any[]
  value8: any
  id: any
  condida_data: any
  missage: string | undefined
  @Input() idPassed: any = '341324'
  @Input() isPrincipale: boolean = true

  public condida_contact: FormGroup

  constructor(
    public modalService: NgbModal,
    private _sanitizer: DomSanitizer,
    private data: CondidatService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) {
    if (this.idPassed != '') {
      this.TrackEventroute(this.idPassed)
    } else {
      this.activatedRoute.params.subscribe({
        next: (a) => {
          this.id = a['id']
          this.TrackEventroute(this.id)
        },
        error: (a) => {
          this.TrackEventroute_error(a)
        },
      })
    }

    this.condida_contact = this.fb.group({
      misag_type: new FormControl('', [Validators.required]),
      name: new FormControl(),
      missage: new FormControl('', [Validators.required]),
    })

    this.misag_type = ['Entretien', 'Question', 'Conseil', 'Commentaire']
  }

  transformUrl(link: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustResourceUrl(link)
  }

  TrackEventroute(a: any) {
    this.data.get_condidats_by_id(a).subscribe({
      next: (i) => {
        this.condida_data = i
      },
      error: (i) => {
        this.TrackEventroute_error(i)
      },
    })
  }
  TrackEventroute_error(id: string) {}
  ngOnInit(): void {}

  sendMissage() {
    if (this.condida_contact.valid) {
    } else {
      this.condida_contact.markAllAsTouched()
    }
  }
  link: string = ''
  typeObjet: string = ''

  openFullScreenFile(content: any, link: string, typeObjet: string) {
    console.log(link)
    this.link = link
    this.typeObjet = typeObjet
    console.log(link)
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      modalDialogClass: 'modal-style',
      centered: true,

      size: 'xl',
    })
  }
}
