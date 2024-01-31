import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class BooksService {
    private apiUrl = 'https://www.googleapis.com/books/v1/volumes';

    constructor(private http: HttpClient) { }

    searchBooks(query: string): Observable<any> {
        const randomStartIndex = Math.floor(Math.random() * 1000); // Adjust range as needed
        const url = `${this.apiUrl}?startIndex=${randomStartIndex}&maxResults=50`; // Fetch 50 books from the random start index
   //     const url = `${this.apiUrl}?q=${query}`;
        return this.http.get(url);
    }

    getBookById(bookId: string): Observable<any> {
        const url = `${this.apiUrl}/${bookId}`;
        return this.http.get(url);
    }
}
