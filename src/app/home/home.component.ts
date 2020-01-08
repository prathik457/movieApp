import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Array<Movie> = [];

  constructor(private movieService: MovieService) {

   }

  ngOnInit() {
    this.movies = this.movieService.movies;
  }

  addToCart(movie: Movie) {
    this.movieService.addToCart(movie);
  }

  removeFromCart(movie: Movie) {
    this.movieService.removeFromCart(movie);
  }

}

interface Movie {
  id: number;
  name: string;
  isAdded: boolean;
}
