import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { DadoVendaMarketplace } from '../modelos/dado-venda-marketplace.model';
import { DadoVendaPeriodo } from '../modelos/dado-venda-periodo.model';

@Injectable({
  providedIn: 'root'
})
export class EstatisticaService {

  constructor(private http: HttpClient) { }


  getEstatistica (): Observable<DadoVendaMarketplace[]> {
    return this.http.get<DadoVendaMarketplace[]>('http://localhost:50751/api/estatistica')
      .pipe(
        tap(heroes => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }

  getEstatisticaPeriodo (): Observable<DadoVendaPeriodo[]> {
    return this.http.get<DadoVendaPeriodo[]>('http://localhost:50751/api/estatistica/periodo')
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
