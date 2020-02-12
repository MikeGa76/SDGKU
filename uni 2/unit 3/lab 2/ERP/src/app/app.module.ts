import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { TempCalculatorComponent } from './components/temp-calculator/temp-calculator.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    TempCalculatorComponent,
    UserRegisterComponent,
    NavBarComponent,
    UserListComponent,
    LoginComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
