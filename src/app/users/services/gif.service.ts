import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Gif, SearchResponse } from '../interfaces/Gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  private GIPHY_API_KEY = 'gu3Vy8xgg6kifgQ571WCF1fpduDZQ1X2';
  private urlGif = `https://api.giphy.com/v1/gifs`;

  private _tagHistory: string[] = [];
  private _gifList = new BehaviorSubject<Gif[]>([]); // Observable para los GIFs

  constructor(private http: HttpClient) {}

  get tagHistory() {
    return [...this._tagHistory];
  }

  get gifList$() {
    return this._gifList.asObservable(); // Observable que se puede suscribir
  }

  private organizedTags(tag: string) {
    tag = tag.toLowerCase();
    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((e) => e !== tag);
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 6);
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizedTags(tag);

    const params = new HttpParams()
      .set('api_key', this.GIPHY_API_KEY)
      .set('limit', 8)
      .set('q', tag);

    this.http.get<SearchResponse>(`${this.urlGif}/search`, { params }).subscribe((resp) => {
      this._gifList.next(resp.data); // Actualiza el BehaviorSubject
    });
  }
}
