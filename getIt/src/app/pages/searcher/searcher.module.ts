import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearcherPageRoutingModule } from './searcher-routing.module';
import { SearcherPage } from './searcher.page';
/*import { SearchUserByEmailComponent } from "../../components/search-user-by-email/search-user-by-email.component";
import { PipesModule } from '../../pipes/pipes.module';
import { SearchAdByAddressComponent } from "../../components/search-ad-by-address/search-ad-by-address.component";
import { SearchAdByFeeComponent } from "../../components/search-ad-by-fee/search-ad-by-fee.component";
import { SearchAdByRequiredTimeComponent } from "../../components/search-ad-by-required-time/search-ad-by-required-time.component";
import { SearchAdByWorkareaComponent } from "../../components/search-ad-by-workarea/search-ad-by-workarea.component";
*/
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearcherPageRoutingModule,
	//PipesModule
  ],
  /*declarations: [SearcherPage, SearchAdByWorkareaComponent, SearchAdByRequiredTimeComponent, SearchAdByFeeComponent, SearchAdByAddressComponent, SearchUserByEmailComponent]*/
  declarations: [SearcherPage]
})
export class SearcherPageModule {}
