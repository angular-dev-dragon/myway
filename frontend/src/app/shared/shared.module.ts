import { Inject, NgModule, PLATFORM_ID } from '@angular/core'
import { CommonModule, isPlatformBrowser } from '@angular/common'
import { LazyLoadImageModule } from 'ng-lazyload-image' // <-- import it
import { CardRecruiterComponent } from './components/card-recruiter/card-recruiter.component'
import { ContentLayoutComponent } from './components/layouts/content-layout.component'
import { RouterModule } from '@angular/router'
import { SkeletonModule } from 'primeng/skeleton'
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
import { CardArticleComponent } from './components/card-article/card-article.component'
import { CardDocumentComponent } from './components/card-document/card-document.component'

import { MapComponent } from './components/map/map.component'
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json')
}

let modules: any = [
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
]

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
