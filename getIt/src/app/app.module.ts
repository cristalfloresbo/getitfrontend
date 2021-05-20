import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PublishOfferAndDemandComponent } from './components/publish-offer-and-demand/publish-offer-and-demand.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './pages/home/home.page';
import { SearchUserByEmailComponent } from "./components/search-user-by-email/search-user-by-email.component";
import { PipesModule } from './pipes/pipes.module';
import { SearchAdByAddressComponent } from "./components/search-ad-by-address/search-ad-by-address.component";
import { SearchAdByFeeComponent } from "./components/search-ad-by-fee/search-ad-by-fee.component";
import { SearchAdByRequiredTimeComponent } from "./components/search-ad-by-required-time/search-ad-by-required-time.component";

@NgModule({
  declarations: [AppComponent, SearchAdByRequiredTimeComponent, SearchAdByFeeComponent, RegisterComponent, SearchAdByAddressComponent, SearchUserByEmailComponent, HeaderComponent, HomePage, PublishOfferAndDemandComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, ReactiveFormsModule, PipesModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
