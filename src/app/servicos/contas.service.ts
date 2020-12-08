import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {CredencialMarketplace} from "../modelos/credencial-marketplace.model";
import {catchError} from "rxjs/operators";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  constructor(private http: HttpClient) { }


  addConta (credencialMarketplace: CredencialMarketplace): Observable<CredencialMarketplace> {

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post<CredencialMarketplace>('http://localhost:50751/api/contas', credencialMarketplace, httpOptions).pipe(

      catchError(this.handleError<CredencialMarketplace>('addProduct'))
    );
  }


  getContas (): Observable<Array<CredencialMarketplace>> {

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.get<Array<CredencialMarketplace>>('http://localhost:50751/api/contas', httpOptions).pipe(

      catchError(this.handleError<Array<CredencialMarketplace>>('addProduct'))
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
