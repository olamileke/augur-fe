import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BaseComponent } from './components/base/base.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { LoadComponent } from './components/load/load.component';
import { HttpInterceptors } from './interceptors/http.interceptors';
import { AuthHomeComponent } from './components/auth-home/auth-home.component';
import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ExploreComponent } from './components/explore/explore.component';
import { FollowedStocksComponent } from './components/followed-stocks/followed-stocks.component';
import { PredictionsComponent } from './components/predictions/predictions.component';
import { StockComponent } from './components/stock/stock.component';
import { StockDetailComponent } from './components/stock-detail/stock-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BaseComponent,
    AuthComponent,
    LoadComponent,
    AuthHomeComponent,
    AuthHeaderComponent,
    SidebarComponent,
    ExploreComponent,
    FollowedStocksComponent,
    PredictionsComponent,
    StockComponent,
    StockDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ChartsModule
  ],
  providers: [HttpInterceptors],
  bootstrap: [AppComponent]
})
export class AppModule { }
