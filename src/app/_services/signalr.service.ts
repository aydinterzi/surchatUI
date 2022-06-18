import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import { from } from 'rxjs';
import { tap } from 'rxjs/operators';
import { chatMessage } from '../Models/chatMessage';
import { MessagePackHubProtocol } from '@microsoft/signalr-protocol-msgpack'

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  private hubConnection: HubConnection
  public messages: chatMessage[] = [];
  private connectionUrl = 'https://localhost:44321/signalr';
  private apiUrl = 'https://localhost:44321/api/chat';
  private user = this.authService.decodedToken? this.authService.decodedToken.unique_name:"Anonim";
  constructor(private http: HttpClient,private authService: AuthService) { }

  public connect = () => {
    this.startConnection();
    this.addListeners();
  }

  public sendMessageToApi(message: string) {
    return this.http.post(this.apiUrl, this.buildChatMessage(message))
      .pipe(tap(_ => console.log("message sucessfully sent to api controller")));
  }

  public sendMessageToHub(message: string) {
    var promise = this.hubConnection.invoke("BroadcastAsync", this.buildChatMessage(message))
      .then(() => { console.log('message sent successfully to hub'); })
      .catch((err) => console.log('error while sending a message to hub: ' + err));

    return from(promise);
  }

  private getConnection(): HubConnection {
    return new HubConnectionBuilder()
      .withUrl(this.connectionUrl)
      .withHubProtocol(new MessagePackHubProtocol())
      //  .configureLogging(LogLevel.Trace)
      .build();
  }

  private buildChatMessage(message: string): chatMessage {
    return {
      UserName: this.user,
      ConnectionId: this.hubConnection.connectionId,
      Text: message,
      DateTime: new Date()
    };
  }

  private startConnection() {
    this.hubConnection = this.getConnection();

    this.hubConnection.start()
      .then(() => console.log('connection started'))
      .catch((err) => console.log('error while establishing signalr connection: ' + err));
  }

  private addListeners() {
    this.hubConnection.on("messageReceivedFromApi", (data: chatMessage) => {
      this.messages.push(data);
    })

    this.hubConnection.on("messageReceivedFromHub", (data: chatMessage) => {
      this.messages.push(data);
    })
    this.hubConnection.on("newUserConnected", _ => {
    })
  }
}
