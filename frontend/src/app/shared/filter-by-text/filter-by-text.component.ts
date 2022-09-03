import { RecruteurService } from 'src/app/shared/services/recruteur.service';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core'
import { GenericService } from '../services/generic.service'

@Component({
  selector: 'app-filter-by-text',
  templateUrl: './filter-by-text.component.html',
  styleUrls: ['./filter-by-text.component.scss'],
})
export class FilterByTextComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() data: any = []
  @Input() pageName: string = ''

  @Output() filtredData: any = new EventEmitter<any>()

  constructor(public genericService: GenericService) {}
  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['data'] && this.data) {
    //   this.filterByText()
    // }
  }
  ngAfterViewInit(): void {
    this.filterByText()
  }

  ngOnInit(): void {}

  @ViewChild('search') searchInput!: any

  filterByText() {
    let searchValue = this.searchInput?.nativeElement.value || ''


    if (this.pageName == 'quiz') {
      let dataFiltred = this.data.filter((data: any) => {
        return data.titre.toLowerCase().includes(searchValue.toLowerCase())
      })

      this.filtredData.emit(dataFiltred)
      return this.filtredData
    } else if (this.pageName == 'evenement') {
      let dataFiltred = this.data.filter((data: any) => {
        return data.titre.toLowerCase().includes(searchValue.toLowerCase())
      })
      this.filtredData.emit(dataFiltred)
    } else if (this.pageName == 'offre') {
      let dataFiltred = this.data.filter((data: any) => {
        return data.Intitule.toLowerCase().includes(searchValue.toLowerCase())
      })
      this.filtredData.emit(dataFiltred)
    } else if (
      this.pageName == 'candidature spontanee' ||
      this.pageName == 'recruteur'
    ) {

    this.genericService.getAllService(this.pageName)?.filterByText(searchValue);

      // let dataFiltred = this.genericService
      //   .get(this.pageName)
      //   .filter((data: any) => {
      //     return data.title.toLowerCase().includes(searchValue.toLowerCase());
      //   });
      // this.filtredData.emit(dataFiltred)
    } else if (this.pageName == 'candidat') {
      let dataFiltred = this.data.filter((data: any) => {
        return data.info.name.first_name
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      })
      this.filtredData.emit(dataFiltred)
    } else if (this.pageName == 'evenement') {
      let dataFiltred = this.data.filter((data: any) => {
        return data.titre.toLowerCase().includes(searchValue.toLowerCase())
      })
      this.filtredData.emit(dataFiltred)
    } else if (this.pageName == 'conseils pratique') {
      let dataFiltred = this.data.filter((data: any) => {
        return data.titre.toLowerCase().includes(searchValue.toLowerCase())
      })
      this.filtredData.emit(dataFiltred)
    } else if (this.pageName == 'adresses utiles') {
      let dataFiltred = this.data.filter((data: any) => {
        return data.translations['fr'].__designation
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      })
      this.filtredData.emit(dataFiltred)
    } else if (this.pageName == 'liens utiles') {
      let dataFiltred = this.data.filter((data: any) => {
        return data.translations['fr'].__designation
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      })
      this.filtredData.emit(dataFiltred)
    } else if (this.pageName == 'documents') {
      let dataFiltred = this.data.filter((data: any) => {
        return data.translations['fr'].__titre
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      })
      this.filtredData.emit(dataFiltred)
    } else if (this.pageName == 'forums') {
      let dataFiltred = this.data.filter((data: any) => {
        return data.designation
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      })
      this.filtredData.emit(dataFiltred)
    } else if (this.pageName == 'blogeurs') {
      let dataFiltred = this.data.filter((data: any) => {
        return data.nom.toLowerCase().includes(searchValue.toLowerCase())
      })
      this.filtredData.emit(dataFiltred)
    }
    return this.filtredData
  }
}







