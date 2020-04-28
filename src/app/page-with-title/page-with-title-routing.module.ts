import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageWithTitlePage } from './page-with-title.page';

const routes: Routes = [
  {
    path: '',
    component: PageWithTitlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageWithTitlePageRoutingModule {}
