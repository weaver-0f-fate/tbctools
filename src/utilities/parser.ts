import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonParserService {

  constructor(private http: HttpClient) {}

  parseJson<T>(jsonPath: string): Observable<T[]> {
    return this.http.get<T[]>(jsonPath);
  }
}
