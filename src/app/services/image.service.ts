import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Image } from '../shared/image';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  images: Array<Image>;
  apiUrl = `https://api.unsplash.com/photos/random/?client_id=${environment.apiKey}`;

  constructor(private http: HttpClient) {}

  /**
   * Get new images
   * @param count Images count
   */
  getNewImages(count: number) {
    return this.http.get(`${this.apiUrl}&count=${count}`);
  }
}
