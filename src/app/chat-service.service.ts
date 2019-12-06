import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Channel } from './channel';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(private http: HttpClient) { }

  getChannel(): Observable<Channel[]> {
    return this.http.get<Channel[]>('http://localhost:3000/channels')
    }

    changeChannel(channel: Channel): Observable<Channel> {
      return this.http.get<Channel>(`${'http://localhost:3000/channels'}?channelId=${channel.id}`)
    }
}
