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
import {TranslateLoader,TranslateModule,TranslateService,} from '@ngx-translate/core'
import { RatingModule } from 'primeng/rating'
import { DialogModule } from 'primeng/dialog'
import { CardArticleComponent } from './components/card-article/card-article.component'
import { CardDocumentComponent } from './components/card-document/card-document.component'
import { MapComponent } from './components/map/map.component'
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';

// form importes
// form importes
// form importes
// form importes
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TreeSelectModule } from 'primeng/treeselect';
import { KnobModule } from 'primeng/knob';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ListboxModule } from 'primeng/listbox';
import { SliderModule } from 'primeng/slider';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PasswordModule } from 'primeng/password';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SpeedDialModule } from 'primeng/speeddial';
// end form importes
// end form importes
// end form importes
// end form importes

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json')
}

let modules: any = [
  ToastModule,
  ProgressSpinnerModule ,
  // form importes
  CheckboxModule ,
  InputSwitchModule,
  TreeSelectModule,
  KnobModule ,
  KeyFilterModule ,
  ListboxModule ,
  SliderModule,
  RadioButtonModule ,
  PasswordModule ,
  SelectButtonModule ,
  ToggleButtonModule ,
  TriStateCheckboxModule ,
  SplitButtonModule ,
  SpeedDialModule ,
  BrowserModule,
  BrowserAnimationsModule,
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
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient],
    },
  }),
  RatingModule,
];

@NgModule({
  declarations: [
    CardRecruiterComponent,
    CardInfoSmall,
    ContentLayoutComponent,
    NavbarComponent,
    FooterComponent,
    CardMembreComponent,
    CardArticleComponent,
    CardDocumentComponent,
    MapComponent,
  ],
  imports: [LazyLoadImageModule, CommonModule, RouterModule, ...modules],
  exports: [
    CardArticleComponent,

    CardRecruiterComponent,
    CardMembreComponent,
    CardInfoSmall,
    NavbarComponent,
    FooterComponent,
    LazyLoadImageModule,
    CommonModule,
    ContentLayoutComponent,
    CardDocumentComponent,

    MapComponent,
    ...modules,
  ],
})
export class SharedModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    translate: TranslateService,
  ) {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.add('ltr')
      localStorage.setItem('lang', 'fr')

      var lang = 'fr'
      translate.setDefaultLang(lang)
      translate.addLangs(['en', 'fr'])
    }
  }
}
