import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthorserviceService {
  private _baseUrl= "http://localhost:5000/"

  constructor(private http:HttpClient) { }

  getAuthor(id:any){
    return this.http.get(this._baseUrl+"authors"+id);
  }
  getAuthors(){
    return this.http.get(this._baseUrl+"authors");
  }

}
