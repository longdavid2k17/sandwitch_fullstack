import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryManagerService {
  private categoryUrl = 'http://localhost:8080/api/categories';

  constructor(private httpClient: HttpClient) {}

  //CREATE
  createCategory(name: string): Observable<any> {
    return this.httpClient.post(this.categoryUrl,{
      name: name,
    })
  }
  //READ
  getAllCategories(): Observable<any> {
    return this.httpClient
      .get<any>(this.categoryUrl)
      .pipe(map((response) => response._embedded.categories));
  }
  //UPDATE
  updateCategory() {}
  //DELETE
  deleteCategory() {}
}
