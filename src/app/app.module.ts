import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DirectiveDirective } from './directive/directive.directive';
import { AppformComponent } from './appform/appform.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    DirectiveDirective,
    AppformComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component:HomeComponent},
      { path: 'home', component:HomeComponent},
      { path: 'about', component:AboutComponent},
      { path: 'form', component:AppformComponent},
      { path: '**', component:NotFoundComponent},
      

    ]),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
