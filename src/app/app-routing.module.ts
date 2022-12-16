import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { JokeBotComponent } from './components/joke-bot/joke-bot.component';

const routes: Routes = [
  // { path: '', component: JokeBotComponent },
  { path: 'joke-bot', component: JokeBotComponent },
  { path: 'about', component: AboutComponent },
  { path: '',   redirectTo: '/joke-bot', pathMatch: 'full' },
  // { path: '**', component: JokeBotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
