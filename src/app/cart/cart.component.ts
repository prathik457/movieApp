import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  movies: Array<Movie> = [];

  constructor(private movieService: MovieService) {

   }

  ngOnInit() {
    this.movies = this.movieService.movies;
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

