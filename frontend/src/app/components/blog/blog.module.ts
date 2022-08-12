import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from 'src/app/shared/shared.module'
import { BlogRoutingModule } from './blog-routing.module';
import { DetailsBlogeurComponent } from './details-blogeur/details-blogeur.component'

@NgModule({
  declarations: [
    DetailsBlogeurComponent
  ],
  imports: [SharedModule, RouterModule],
  exports: [BlogRoutingModule],
})
export class BlogModule {}
