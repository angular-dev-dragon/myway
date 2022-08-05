import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LazyLoadImageModule } from 'ng-lazyload-image' // <-- import it
import { CardRecruiterComponent } from './components/card-recruiter/card-recruiter.component'
import { ContentLayoutComponent } from './components/layouts/content-layout.component'
import { RouterModule } from '@angular/router'
import { AccordionModule } from 'primeng/accordion'
import { ButtonModule } from 'primeng/button'
import { RippleModule } from 'primeng/ripple'
import { TabViewModule } from 'primeng/tabview'

import { TabMenuModule } from 'primeng/tabmenu'
import { CardInfoSmall } from './components/card-info-small/card-info-small.component'
import { ReactiveFormsModule } from '@angular/forms'
let modules = [
  AccordionModule,
  ButtonModule,
  RippleModule,
  TabMenuModule,
  TabViewModule,
  ReactiveFormsModule,
]
@NgModule({
  declarations: [CardRecruiterComponent, CardInfoSmall, ContentLayoutComponent],
  imports: [LazyLoadImageModule, CommonModule, RouterModule, ...modules],
  exports: [
    CardRecruiterComponent,
    CardInfoSmall,

    LazyLoadImageModule,
    CommonModule,
    ContentLayoutComponent,
    ...modules,
  ],
})
export class SharedModule {}
