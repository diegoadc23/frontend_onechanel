import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Produto} from '../modelos/produto.model';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Categoria} from '../modelos/categoria.model';
import {Subcategoria} from '../modelos/subcategoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }


  getCategorias (): Observable<Categoria[]> {
    return this.http.get<Categoria[]>('http://localhost:50751/api/categorias')
      .pipe(
        tap(heroes => console.log('fetched products')),
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



  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
