import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Message } from 'src/app/Interfaces/Message';

@Component({
  selector: 'app-investor-message',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './investor-message.component.html',
  styleUrls: ['./investor-message.component.scss']
})
export class InvestorMessageComponent implements OnInit {
  messages: Message[] = [];
  messageForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.messageForm = this.fb.group({
      sender: [''],
      content: ['']
    });
  }

  ngOnInit(): void {
    // يمكنك جلب الرسائل من API هنا
    this.messages = [
      { sender: 'User1', content: 'Hello!', timestamp: new Date() },
      { sender: 'User2', content: 'Hi there!', timestamp: new Date() }
    ];
  }

  sendMessage(): void {
    const newMessage: Message = {
      sender: this.messageForm.value.sender,
      content: this.messageForm.value.content,
      timestamp: new Date()
    };
    this.messages.push(newMessage);
    this.messageForm.reset();
  }
}
