import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { TempCalculatorComponent } from './components/temp-calculator/temp-calculator.component';
import { AboutComponent } from './pages/about/about.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { LoginComponent } from './pages/login/login.component';

// register all routes (paths)
const routes: Routes = [
  { path: 'user/register', component: UserRegisterComponent},
  { path: 'converter', component: TempCalculatorComponent},
  { path: 'about', component: AboutComponent},
  { path: 'user/list', component: UserListComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
