import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CredencialMarketplace} from '../modelos/credencial-marketplace.model';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Produto} from '../modelos/produto.model';
import { Anuncio } from '../modelos/anuncio.model';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  constructor(private http: HttpClient) { }


  addAnuncio (produto: Produto): Observable<CredencialMarketplace> {

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post<CredencialMarketplace>('http://localhost:50751/api/anuncios', produto, httpOptions).pipe(

      catchError(this.handleError<CredencialMarketplace>('addProduct'))
    );
  }


  
  getAnuncios(): Observable<Array<Produto>> {

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.get<Array<Produto>>('http://localhost:50751/api/anuncios', httpOptions).pipe(

      catchError(this.handleError<Array<Produto>>('addProduct'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
