import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageWithTitlePageRoutingModule } from './page-with-title-routing.module';

import { PageWithTitlePage } from './page-with-title.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageWithTitlePageRoutingModule
  ],
  declarations: [PageWithTitlePage]
})
export class PageWithTitlePageModule {}
