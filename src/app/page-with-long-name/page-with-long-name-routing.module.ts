import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageWithLongNamePage } from './page-with-long-name.page';

const routes: Routes = [
  {
    path: '',
    component: PageWithLongNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageWithLongNamePageRoutingModule {}
