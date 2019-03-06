import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ContactComponent} from './contact/contact.component';
import {CatalogueComponent} from './catalogue/catalogue.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import { UserComponent} from './user/user.component';
import { AuthGuard } from './services/auth-guard.service';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UserCreateComponent} from './user-create/user-create.component';
import {UserEditComponent} from './user-edit/user-edit.component';

const routes: Routes = [
  { path: 'home', /*canActivate: [AuthGuard],*/  component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: '', component: HomeComponent },
  { path: 'users', component: UserComponent },
  { path: 'user-detail/:id', component: UserDetailComponent, data: { title: 'User Details'}},
  { path: 'user-create', component: UserCreateComponent, data: { title: 'Create User'}},
  { path: 'user-edit/:id', component: UserEditComponent, data: { title: 'Edit User'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
