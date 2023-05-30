import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  url = 'http://localhost:4000/product'

  constructor(
    private http: HttpClient) { }


  createProduct(title: string, description: string, price: string, category: string) {
    const token = sessionStorage['token']
    const httpOptions = {
      headers: new HttpHeaders({
        token: token
      })
    }

    const body = {
      title, description, price, category
    }
    return this.http.post(this.url, body, httpOptions)
  }

  deleteProduct(id: string) {

    const token = sessionStorage['token']
    const httpOptions = {
      headers: new HttpHeaders({
        token: token
      })
    }

    return this.http.delete(this.url + "/" + id, httpOptions)
  }
  

  getProducts() {

    const token = sessionStorage['token']
    const httpOptions = {
      headers: new HttpHeaders({
        token: token
      })
    }

    return this.http.get(this.url, httpOptions)
  }
}
