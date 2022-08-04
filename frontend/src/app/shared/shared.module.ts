import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LazyLoadImageModule } from 'ng-lazyload-image' // <-- import it
import { CardRecruiterComponent } from './components/card-recruiter/card-recruiter.component'
import { ContentLayoutComponent } from './components/layouts/content-layout.component'
import { RouterModule } from '@angular/router'
import { AccordionModule } from 'primeng/accordion'
import { ButtonModule } from 'primeng/button'
import { RippleModule } from 'primeng/ripple'

let modules = [AccordionModule, ButtonModule, RippleModule]
@NgModule({
  declarations: [CardRecruiterComponent, ContentLayoutComponent],
  imports: [LazyLoadImageModule, CommonModule, RouterModule, ...modules],
  exports: [
    CardRecruiterComponent,
    LazyLoadImageModule,
    CommonModule,
    ContentLayoutComponent,
    ...modules,
  ],
})
export class SharedModule {}
