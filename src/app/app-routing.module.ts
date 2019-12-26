import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AuthHomeComponent } from './components/auth-home/auth-home.component';

import { GuestGuard } from './guards/guest-guard.service';
import { AuthGuard } from './guards/auth-guard.service';

const routes:Routes=[
					{path:'', component:HomeComponent, canActivate:[GuestGuard]},
					{path:'dashboard', component:AuthHomeComponent, canActivate:[AuthGuard]}]

@NgModule({
  declarations: [],
  imports: [
  	RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
