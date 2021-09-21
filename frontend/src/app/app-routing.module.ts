import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from './movie-list/movie-list.component';
import { TitleComponent } from './title/title.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'movies', component: MovieListComponent },
  { path: 'title/:id', component: TitleComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
