import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CallGenAIAPIService {
  private genRiskScenariosUrl = 'Replace-With-API-Gateway-Endpoint';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "*", "Access-Control-Allow-Methods": "OPTIONS,POST,GET"})
  };

  getRiskScenarios(reqBody:any): Observable<any> {
    return this.http.post<any>(this.genRiskScenariosUrl, reqBody, this.httpOptions).pipe(
      catchError(this.handleError<any>('getRiskScenarios', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message)
  }
}
