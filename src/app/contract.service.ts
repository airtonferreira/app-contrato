import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contract } from './contract.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private readonly API = 'http://localhost:3000/contrato';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Contract[]>(this.API).pipe(
      tap(console.log)
    );
  }
}
