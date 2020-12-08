import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produto } from '../modelos/produto.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Marca } from '../modelos/marca.model';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  constructor(private http: HttpClient) { }

  addMarca (marca: Marca): Observable<Marca> {


    return this.http.post<Marca>('http://localhost:50751/api/marcas', marca).pipe(

      catchError(this.handleError<Marca>('addProduct'))
    );
  }

  getMarcas (): Observable<Array<Marca>> {


    return this.http.get<Array<Marca>>('http://localhost:50751/api/marcas').pipe(

      catchError(this.handleError<Array<Marca>>('addProduct'))
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
