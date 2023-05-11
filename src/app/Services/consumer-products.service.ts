import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Video } from '../model/Video';

const API_URL = 'http://localhost:3000/Videos';

@Injectable({
  providedIn: 'root'
})

export class ConsumerProductsService {
  
  constructor(private http:HttpClient) { }
  
  
  getVideo() {
    return this.http.get<Video[]>(API_URL);
  }
  getVideoById(id:number){
    return this.http.get<Video>(API_URL +'/'+ id);
  }
  addVideo(video : Video) {
    return this.http.post(API_URL ,video);
  }
  delete(id:number){
   return this.http.delete(API_URL  + id)
  }
}
