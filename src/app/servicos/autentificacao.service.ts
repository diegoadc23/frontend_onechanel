import { Injectable } from '@angular/core';
import {Produto} from '../modelos/produto.model';
import {Observable, of} from 'rxjs';
import {CredencialMarketplace} from '../modelos/credencial-marketplace.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Credencial} from '../modelos/credencial.class';
import {Token} from '../modelos/token.class';

@Injectable({
  providedIn: 'root'
})
export class AutentificacaoService {

  constructor(private http: HttpClient) { }

  logar (credencial: Credencial): Observable<Token> {

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post<Token>('http://localhost:50751/api/autentificacao', credencial, httpOptions).pipe(

      catchError(this.handleError<Token>('addProduct'))
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

