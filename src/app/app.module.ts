import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { ExercisesListComponent } from './components/exercises-list/exercises-list.component';
import { FaqComponent } from './components/faq/faq.component';
import { ExerciseDetailComponent } from './components/exercise-detail/exercise-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { MotivationComponent } from './components/motivation/motivation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    ExercisesListComponent,
    FaqComponent,
    ExerciseDetailComponent,
    FooterComponent,
    SingInComponent,
    SingUpComponent,
    MotivationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
