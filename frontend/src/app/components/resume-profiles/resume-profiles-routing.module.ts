import { TestTowComponent } from './test-tow/test-tow.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {
    path: 'cv',
    component: LayoutsComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'test-2',
    component: TestTowComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeProfilesRoutingModule { }
