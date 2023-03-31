import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) {

  }

  buscarPais(termino:string):Observable<Country[]>{
    
    const url = `${this.apiUrl}/name/${termino}`

    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${termino}`)
  }
  
  getPaisPorAlpha(termino:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${termino}`)
  }
  
  buscarRegion(termino:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/region/${termino}`)
  }

}
