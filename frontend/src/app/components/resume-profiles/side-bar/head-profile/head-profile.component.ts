import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators , FormControl } from '@angular/forms';


@Component({
  selector: 'Head-Profile',
  templateUrl: './head-profile.component.html',
  styleUrls: ['./head-profile.component.scss', '../../style/main.scss'],
})
export class HeadProfileComponent implements OnInit {
  date: any;
  public entretienForm: FormGroup;
  constructor(
    private c: NgbModalConfig,
    private ms: NgbModal,
    private fb: FormBuilder
  ) {

    this.entretienForm = this.fb.group({
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

      telephone: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+212-?)|0)?[0-9]{10}$'),
        Validators.minLength(10),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),

      // noteEntretien: new FormControl('', [Validators.required]),
      // difficulte: new FormControl('', [Validators.required]),
      // recommandation: new FormControl('', [Validators.required]),

      // note: new FormControl('', [Validators.required]),
      // salaire: new FormControl('', [Validators.required]),
      // securite: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit() {}

  open(content: any) {
    this.ms.open(content, { centered: true, size: 'xl' });
  }

  sendEntretien() {
    if (this.entretienForm.valid) {
      console.log('this.entretienForm', this.entretienForm);
    } else {
      this.entretienForm.markAllAsTouched();
      console.log('not valid');

    }
  }






}













