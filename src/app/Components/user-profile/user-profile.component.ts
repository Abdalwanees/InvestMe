import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent {
  roles: string[] = ['Investor', 'Innovator'];
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Investor', // or 'Innovator'
    avatar: 'assets/avatar.png',
    bio: 'A short bio about the user.',
    activities: [
      { description: 'Invested in XYZ startup', date: new Date() },
      { description: 'Joined the platform', date: new Date('2023-06-15') }
    ],
    settings: {
      theme: 'light',
      notifications: true,
    }
  };

  userSettingsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userSettingsForm = this.fb.group({
      name: [this.user.name],
      email: [this.user.email],
      role: [this.user.role],
      avatar: [this.user.avatar],
      bio: [this.user.bio],
      theme: [this.user.settings.theme],
      notifications: [this.user.settings.notifications],
      storage: [false] // default value, adjust as needed
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const settings = this.userSettingsForm.value;
    console.log('User Settings:', settings);
    
    // تحديث معلومات المستخدم
    this.user.name = settings.name;
    this.user.email = settings.email;
    this.user.role = settings.role;
    this.user.avatar = settings.avatar;
    this.user.bio = settings.bio;
    this.user.settings.theme = settings.theme;
    this.user.settings.notifications = settings.notifications;

    // هنا يمكنك إضافة الكود اللازم لحفظ الإعدادات في خادمك أو محلياً
    if (settings.storage) {
      this.requestStoragePermission();
    }
  }

  requestStoragePermission(): void {
    // هنا يمكنك إضافة الكود اللازم لطلب إذن التخزين من المستخدم
    console.log('Requesting storage permission...');
  }
}
