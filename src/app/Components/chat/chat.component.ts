import { Component, inject, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

interface Message {
  id: number;
  content: string;
  sentAt: Date;
  senderId: number;
  senderUserName: string;
  receiverId: number;
  receiverUserName: string;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  private http = inject(HttpClient);
  messages: Message[] = [];
  newMessage: string = '';
  
  @Input() receiverId!: number;
  currentUserId = +localStorage.getItem('id')!;

  ngOnInit() {
    if (this.receiverId) {
      this.fetchMessages();
    } else {
      console.error('Receiver ID is not defined');
    }
  }

  fetchMessages() {
    this.http.get<Message[]>(`https://localhost:7281/api/messages/user/${this.receiverId}`)
      .subscribe(
        messages => this.messages = messages,
        error => console.error('Error fetching messages:', error)
      );
  }

  sendMessage() {
    if (!this.newMessage.trim()) return;

    const messageDto = {
      content: this.newMessage,
      receiverId: this.receiverId
    };

    this.http.post<Message>('https://localhost:7281/api/messages', messageDto)
      .pipe(
        tap(message => this.messages.push(message))
      )
      .subscribe(
        () => this.newMessage = '',
        error => console.error('Error sending message:', error)
      );
  }
}
