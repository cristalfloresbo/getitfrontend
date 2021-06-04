import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchPage } from './search.page';
import { SearchPageRoutingModule } from './search-routing.module';
import { SearchUserByEmailComponent } from 'src/app/components/search-user-by-email/search-user-by-email.component';
import { SearchAdByWorkareaComponent } from 'src/app/components/search-ad-by-workarea/search-ad-by-workarea.component';
import { SearchAdByAddressComponent } from 'src/app/components/search-ad-by-address/search-ad-by-address.component';
import { SearchAdByFeeComponent } from 'src/app/components/search-ad-by-fee/search-ad-by-fee.component';
import { SearchAdByRequiredTimeComponent } from 'src/app/components/search-ad-by-required-time/search-ad-by-required-time.component';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    SearchPageRoutingModule
  ],
  declarations: [
	  SearchPage,
	  SearchUserByEmailComponent,
	  SearchAdByWorkareaComponent,
	  SearchAdByAddressComponent,
	  SearchAdByFeeComponent,
	  SearchAdByRequiredTimeComponent
  ]
})
export class SearchPageModule {}
