import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SearchPage } from './search.page';
import { SearchPageRoutingModule } from './search-routing.module';
import { SearchUserByEmailComponent } from 'src/app/components/search-user-by-email/search-user-by-email.component';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    SearchPageRoutingModule
  ],
  declarations: [SearchPage, SearchUserByEmailComponent]
})
export class SearchPageModule {}
