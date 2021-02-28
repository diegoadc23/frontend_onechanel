import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Atributo } from '../modelos/atributo.model';

@Injectable({
  providedIn: 'root'
})
export class AtributosService {


  constructor(private http: HttpClient) { }

  getAtributos (id:number): Observable<Array<Atributo>> {



    return this.http.get<Array<Atributo>>('http://localhost:50751/api/atributos/' + id).pipe(

      catchError(this.handleError<Array<Atributo>>('addProduct'))
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
