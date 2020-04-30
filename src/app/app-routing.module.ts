import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ExercisesListComponent } from './components/exercises-list/exercises-list.component';
import { FaqComponent } from './components/faq/faq.component';
import { ExerciseDetailComponent } from './components/exercise-detail/exercise-detail.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { MotivationComponent } from './components/motivation/motivation.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'exercises', component: ExercisesListComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'exercise/detail', component: ExerciseDetailComponent},
  { path: 'sign-in', component: SingInComponent},
  { path: 'sign-up', component: SingUpComponent},
  { path: 'motivation', component: MotivationComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
