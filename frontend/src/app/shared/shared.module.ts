import { MenuItem } from 'primeng/api'
import { Inject, NgModule, PLATFORM_ID } from '@angular/core'
import { CommonModule, isPlatformBrowser } from '@angular/common'
import { LazyLoadImageModule } from 'ng-lazyload-image'
import { CardRecruiterComponent } from './components/card-recruiter/card-recruiter.component'
import { ContentLayoutComponent } from './components/layouts/content-layout.component'
import { RouterModule } from '@angular/router'
// import { SkeletonModule } from 'primeng/skeleton'
import { ButtonModule } from 'primeng/button'
import { RippleModule } from 'primeng/ripple'
import { TabViewModule } from 'primeng/tabview'
import { AccordionModule } from 'primeng/accordion'
import { TabMenuModule } from 'primeng/tabmenu'
import { CardInfoSmall } from './components/card-info-small/card-info-small.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NavbarComponent } from './components/navbar/navbar.component'
import { FooterComponent } from './components/footer/footer.component'
import { CardMembreComponent } from './components/card-membre/card-membre.component'
import { HttpClient } from '@angular/common/http'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { HttpClientModule } from '@angular/common/http'
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core'

import { RatingModule } from 'primeng/rating'
import { DialogModule } from 'primeng/dialog'
import { BrowserModule } from '@angular/platform-browser'
import { CardArticleComponent } from './components/card-article/card-article.component'
import { CardDocumentComponent } from './components/card-document/card-document.component'
import { MapComponent } from './components/map/map.component'
import { CardForumComponent } from './components/card-forum/card-forum.component'
import { SondageHistoriqueComponent } from './components/sondage-historique/sondage-historique.component'
import { CardBlogueurComponent } from './components/card-blogueur/card-blogueur.component'
import { ProgressSpinnerModule } from 'primeng/progressspinner'
import { ToastModule } from 'primeng/toast'
// form importes
// form importes
// form importes
// form importes
import { FileUploadModule } from 'primeng/fileupload'
import { AutoCompleteModule } from 'primeng/autocomplete'
import { CalendarModule } from 'primeng/calendar'
import { ChipsModule } from 'primeng/chips'
import { DropdownModule } from 'primeng/dropdown'
import { InputMaskModule } from 'primeng/inputmask'
import { InputNumberModule } from 'primeng/inputnumber'
import { CascadeSelectModule } from 'primeng/cascadeselect'
import { MultiSelectModule } from 'primeng/multiselect'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { InputTextModule } from 'primeng/inputtext'
import { CheckboxModule } from 'primeng/checkbox'
import { InputSwitchModule } from 'primeng/inputswitch'
import { TreeSelectModule } from 'primeng/treeselect'
import { KnobModule } from 'primeng/knob'
import { KeyFilterModule } from 'primeng/keyfilter'
import { ListboxModule } from 'primeng/listbox'
import { SliderModule } from 'primeng/slider'
import { RadioButtonModule } from 'primeng/radiobutton'
import { PasswordModule } from 'primeng/password'
import { SelectButtonModule } from 'primeng/selectbutton'
import { ToggleButtonModule } from 'primeng/togglebutton'
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox'
import { SplitButtonModule } from 'primeng/splitbutton'
import { SpeedDialModule } from 'primeng/speeddial'
import { MatMenuModule } from '@angular/material/menu'
// end form importes
// end form importes
// end form importes
// end form importes

import { MatSliderModule } from '@angular/material/slider'
import { MatRadioModule } from '@angular/material/radio'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatListModule } from '@angular/material/list'

import { CardTemoignageComponent } from './components/card-temoignage/card-temoignage.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { CardOffreVerticaleComponent } from './components/card-offre-Verticale/card-offre-Verticale.component'
import { CardOffreHorizontaleComponent } from './components/card-offre-horizontale/card-offre-horizontale.component'
import { CardQuestionReponseComponent } from './components/card-question-reponse/card-question-reponse.component'
import { NgxPaginationModule } from 'ngx-pagination'
import { CondidatsCardComponent } from './components/contidats/condidats-card/condidats-card.component'
import { TagModule } from 'primeng/tag'
import { CondidaAdminComponent } from './components/contidats/condida-admin/condida-admin.component'

import { CondidaCardComponent } from './components/condida-card/condida-card.component'
import { CondidaCartTowComponent } from './components/condida-cart-tow/condida-cart-tow.component'

// import { LandingPageModule } from '../components/landing-page/landing-page.module'
import { TieredMenuModule } from 'primeng/tieredmenu'
import { BreadcrumbModule } from 'primeng/breadcrumb'

import { MegaMenuModule } from 'primeng/megamenu'
import { CardModule } from 'primeng/card'
import { ScrollPanelModule } from 'primeng/scrollpanel'

import { SliderComponent } from './components/slider/slider.component'
import { ListOffresComponent } from './components/list-offres/list-offres.component'
import { SCardInfoGComponent } from './components/s-card-info-g/s-card-info-g.component'

import { CardLibraryComponent } from './components/card-library/card-library.component'
import { CondidatListComponent } from './components/condidat-list/condidat-list.component'

import { ListSocieteComponent } from './components/list-societe/list-societe.component'
import { CardOffreDetailsVerticaleComponent } from './components/card-offre-details-verticale/card-offre-details-verticale.component'

import { CardQuizComponent } from './components/card-quiz/card-quiz.component'

import { CardMetiersComponent } from './components/card-metiers/card-metiers.component'
import { CDetailsComponent } from './components/c-details/c-details.component'
import { FilterComponent } from './components/filter/filter.component'
import { FilterByTextComponent } from './filter-by-text/filter-by-text.component'
import { SortComponent } from './sort/sort.component'

import { TopBarComponent } from './top-bar/top-bar.component'
import { TemoignageComponent } from './components/temoignage/temoignage.component'
import { FavButtonComponent } from './components/fav-button/fav-button.component'
import { CardLienUtileComponent } from './components/card-lien-utile/card-lien-utile.component'
import { CardAdresseUtileComponent } from './components/card-adresse-utile/card-adresse-utile.component'
import { CarouselModule } from 'ngx-owl-carousel-o'

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json')
}

let modules: any = [
  // material ui
  MatSliderModule,
  MatMenuModule,
  BreadcrumbModule,
  MatRadioModule,
  MatCheckboxModule,
  MatListModule,
  // material ui

  ScrollPanelModule,
  TieredMenuModule,
  ToastModule,
  ProgressSpinnerModule,
  CardModule,
  // form importes

  MegaMenuModule,
  TagModule,
  NgbModule,
  FileUploadModule,
  CheckboxModule,
  InputSwitchModule,
  TreeSelectModule,
  KnobModule,
  KeyFilterModule,
  ListboxModule,
  SliderModule,
  NgxPaginationModule,
  RadioButtonModule,
  PasswordModule,
  SelectButtonModule,
  ToggleButtonModule,
  TriStateCheckboxModule,
  SplitButtonModule,
  SpeedDialModule,
  AutoCompleteModule,
  CalendarModule,
  ChipsModule,
  DropdownModule,
  InputMaskModule,
  InputNumberModule,
  CascadeSelectModule,
  MultiSelectModule,
  InputTextareaModule,
  InputTextModule,

  // end form importes
  AccordionModule,
  ButtonModule,
  RippleModule,
  TabMenuModule,
  TabViewModule,
  ReactiveFormsModule,
  DialogModule,
  FormsModule,
  HttpClientModule,
  CarouselModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient],
    },
  }),
  RatingModule,

  TabViewModule,
  InputTextModule,
  FormsModule,
  CalendarModule,
  DropdownModule,
  ReactiveFormsModule,
  AccordionModule,
]

@NgModule({
  declarations: [
    CDetailsComponent,

    ListSocieteComponent,
    ListOffresComponent,
    CardRecruiterComponent,
    CardInfoSmall,
    ContentLayoutComponent,
    NavbarComponent,
    FooterComponent,
    CardMembreComponent,
    CardMetiersComponent,
    CardArticleComponent,
    CardDocumentComponent,
    MapComponent,
    CardOffreVerticaleComponent,
    CardOffreHorizontaleComponent,
    CardForumComponent,
    SondageHistoriqueComponent,
    CardBlogueurComponent,
    CardTemoignageComponent,
    CardTemoignageComponent,
    CardQuestionReponseComponent,
    // condidats cards
    CondidatsCardComponent,
    CondidaAdminComponent,
    CondidaCardComponent,
    CondidaCartTowComponent,
    SliderComponent,

    SCardInfoGComponent,
    CardLibraryComponent,

    CondidatListComponent,

    CardOffreDetailsVerticaleComponent,

    CardQuizComponent,

    CardMetiersComponent,

    FilterComponent,
    FilterByTextComponent,
    SortComponent,
    TopBarComponent,

    TemoignageComponent,
    FavButtonComponent,
    CardLienUtileComponent,
    CardAdresseUtileComponent,
  ],

  imports: [LazyLoadImageModule, CommonModule, RouterModule, ...modules],
  exports: [
    FilterComponent,

    CDetailsComponent,
    CondidatListComponent,
    SliderComponent,
    CardArticleComponent,
    CardOffreHorizontaleComponent,
    CardRecruiterComponent,
    CardMembreComponent,
    CardInfoSmall,
    NavbarComponent,
    FooterComponent,
    LazyLoadImageModule,
    CommonModule,
    CardDocumentComponent,
    CardOffreVerticaleComponent,
    CardMetiersComponent,
    CardForumComponent,
    SondageHistoriqueComponent,
    CardBlogueurComponent,
    MapComponent,
    CardTemoignageComponent,
    CardQuestionReponseComponent,
    // condidats cards
    CondidatsCardComponent,
    CondidaAdminComponent,
    CondidaCardComponent,
    CondidaCartTowComponent,

    SCardInfoGComponent,
    CardLibraryComponent,
    ListOffresComponent,

    ListSocieteComponent,
    CardOffreDetailsVerticaleComponent,
    CardQuizComponent,
    FilterByTextComponent,
    SortComponent,
    TopBarComponent,
    TemoignageComponent,
    FavButtonComponent,
    CardLienUtileComponent,
    CardAdresseUtileComponent,
    ...modules,
  ],
})
export class SharedModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    translate: TranslateService,
  ) {
    if (isPlatformBrowser(this.platformId)) {
      if (sessionStorage.getItem('wishList') == null) {
        sessionStorage.setItem('wishList', JSON.stringify([]))
      }

      document.body.classList.add('ltr')
      localStorage.setItem('lang', 'fr')

      var lang = 'fr'
      translate.setDefaultLang(lang)
      translate.addLangs(['en', 'fr'])
    }
  }
}
