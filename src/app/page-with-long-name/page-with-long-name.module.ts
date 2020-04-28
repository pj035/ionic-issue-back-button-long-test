import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageWithLongNamePageRoutingModule } from './page-with-long-name-routing.module';

import { PageWithLongNamePage } from './page-with-long-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageWithLongNamePageRoutingModule
  ],
  declarations: [PageWithLongNamePage]
})
export class PageWithLongNamePageModule {}
