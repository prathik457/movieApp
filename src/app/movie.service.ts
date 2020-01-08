import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // tslint:disable-next-line:variable-name
  private _movies: Array<Movie>;
  // tslint:disable-next-line:variable-name
  private _cartCounter = 0;

  public get movies(): Array<Movie> {
    return this._movies;
  }

  public get cartCounter(): number {
    return this._cartCounter;
  }

  public set cartCounter(counter: number) {
    this._cartCounter = counter;
  }


  constructor() {

    this._movies = [
      { id: 1, name: 'X-Men', isAdded: false},
      { id: 2, name: 'Avengers', isAdded: false },
      { id: 3, name: 'Spiderman', isAdded: false },
      { id: 4, name: 'Deadpool', isAdded: false },
      { id: 5, name: 'Ant-man', isAdded: false }
    ];
   }

   addToCart(movie: Movie): void {
    this.movies[movie.id - 1].isAdded = true;
    this.cartCounter++;
   }

   removeFromCart(movie: Movie): boolean {
    const movieToBeRemoved = this.movies[movie.id - 1];
    if (movieToBeRemoved.name === movie.name && movieToBeRemoved.isAdded) {
      this.movies[movie.id - 1].isAdded = false;
      this.cartCounter--;
      return true;
    }
    return false;
   }
}


interface Movie {
  id: number;
  name: string;
  isAdded: boolean;
}
