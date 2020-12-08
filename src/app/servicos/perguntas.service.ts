import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Categoria} from '../modelos/categoria.model';
import {catchError, tap} from 'rxjs/operators';
import {Subcategoria} from '../modelos/subcategoria.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Pergunta} from '../modelos/pergunta.model';
import {CredencialMarketplace} from '../modelos/credencial-marketplace.model';
import {Resposta} from '../modelos/resposta';

@Injectable({
  providedIn: 'root'
})
export class PerguntasService {

  constructor(private http: HttpClient) { }


  getPerguntas (): Observable<Pergunta[]> {
    return this.http.get<Pergunta[]>('http://localhost:50751/api/perguntas')
      .pipe(

        catchError(this.handleError('getProducts', []))
      );
  }

  getSubcategorias (idCategoria: string): Observable<Subcategoria[]> {
    return this.http.get<Subcategoria[]>('http://localhost:50751/api/subcategorias?idCategoria=' + idCategoria)
      .pipe(
        tap(heroes => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }

  responderPergunta(resposta: Resposta){

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post<CredencialMarketplace>('http://localhost:50751/api/respostas', resposta, httpOptions).pipe(

      catchError(this.handleError<CredencialMarketplace>('addProduct'))
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
