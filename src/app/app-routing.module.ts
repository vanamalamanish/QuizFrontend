import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './result/result.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"welcome",component:WelcomeComponent},
  {path:"question",component:QuestionComponent},
  {path:"result",component:ResultComponent},
  {path:"",redirectTo:'login',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
