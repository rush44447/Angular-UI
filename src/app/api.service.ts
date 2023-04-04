import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  searchTerm = new Subject<string>();
  searchHistory = new Subject<string>();

  constructor(private http: HttpClient) { }

  getProfile(searchQuery: string) {
    return this.http.get(`https://api.github.com/search/users?q=${searchQuery}`)
  }
}
