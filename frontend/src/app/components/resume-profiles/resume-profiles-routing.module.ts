import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: 'cv',
    component: MainProfileComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling:'enabled' })],
  exports: [RouterModule]
})
export class ResumeProfilesRoutingModule { }
