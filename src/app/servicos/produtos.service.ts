import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {CredencialMarketplace} from '../modelos/credencial-marketplace.model';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Produto} from '../modelos/produto.model';
import { ParametrosPesquisaProduto } from '../modelos/parametros-pesquisa-produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getProdutos (parametrosPesquisaProduto: ParametrosPesquisaProduto): Observable<Produto[]> {

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      params: Object.entries(parametrosPesquisaProduto).reduce(
      (params, [key, value]) => params.set(key, value), new HttpParams())
      };


    return this.http.get<Produto[]>('http://localhost:50751/api/produtos', httpOptions)
      .pipe(
        tap(heroes => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }

  getProduto(id: string): Observable<Produto> {

    return this.http.get<Produto>("http://localhost:50751/api/produtos/" + id).pipe(

      catchError(this.handleError<Produto>(`getProduct id=${id}`))
    );
  }

  getProdutoAnuncios(idProduto: string): Observable<Produto> {

    return this.http.get<Produto>("http://localhost:50751/api/produtos/" + idProduto + "/anuncios").pipe(

      catchError(this.handleError<Produto>(`getProduct id=${idProduto}`))
    );
  }

  putProduto(produto: Produto): Observable<Produto>{

    return this.http.put<Produto>("http://localhost:50751/api/produtos/" + produto.id, produto  ).pipe(

      catchError(this.handleError<Produto>(`getProduct id=`))
    );

  }

  

  deleteProduto(idProduto:string): Observable<Produto>{

    return this.http.delete<Produto>("http://localhost:50751/api/produtos/" + idProduto  ).pipe(

      catchError(this.handleError<Produto>(`getProduct id=`))
    );

  }

  alterarStatusProduto(idProduto:string): Observable<Produto>{

    return this.http.put<Produto>("http://localhost:50751/api/produtos/" + idProduto + "/status", null  ).pipe(

      catchError(this.handleError<Produto>(`getProduct id=`))
    );

  }



  addProduto (produto: FormData): Observable<Produto> {


    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'multipart/form-data'})
    };

    return this.http.post<Produto>('http://localhost:50751/api/produtos', produto).pipe(

      catchError(this.handleError<Produto>('addProduct'))
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
