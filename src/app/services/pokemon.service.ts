import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'http://api.skilldistillery.com:8080/';
  private url = this.baseUrl + 'poke/data/poke';

  index() {
    return this.http.get<Pokemon[]>(this.url + '?sorted=true').pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM');
      })
    );
  }

  create(poke: Pokemon) {
    return this.http.post<Pokemon>(this.url, poke).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM');
      })
    );
  }
  constructor(private http: HttpClient) {}
}
