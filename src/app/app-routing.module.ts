import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { HomeComponent } from './home/home.component';
import { HtmlComponent } from './html/html.component';
import { JavaComponent } from './java/java.component';
import { javascriptComponent } from './javascript/javascript.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"java",component:JavaComponent},
  {path:"angular",component:AngularComponent},
  {path:"html",component:HtmlComponent},
  {path:"javascript",component:javascriptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
