import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

    constructor(private http: HttpClient) { }

  getUsers() {
    return [
      {id: 1, name: 'John'},
      {id: 2, name: 'Jane'},
      {id: 3, name: 'Jim'},
    ]
  }
}
