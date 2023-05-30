import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = 'http://localhost:4000/category'

  constructor(
    private http: HttpClient) { }

  getCategories() {

    const token = sessionStorage['token']
    const httpOptions = {
      headers: new HttpHeaders({
        token: token
      })
    }

    return this.http.get(this.url, httpOptions)
  }

  deleteCategory(id: string) {

    const token = sessionStorage['token']
    const httpOptions = {
      headers: new HttpHeaders({
        token: token
      })
    }

    return this.http.delete(this.url + "/" + id, httpOptions)
  }

  createCategory(title: string, description: string) {

    const token = sessionStorage['token']
    const httpOptions = {
      headers: new HttpHeaders({
        token: token
      })
    }

    const body = {
      title, description
    }

    console.log(body)
    return this.http.post(this.url, body, httpOptions)
  }
}
