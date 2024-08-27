import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'; // تم إضافة الاستيراد هنا
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    HttpClientModule
  ],
  providers: [AuthService],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  formData: FormData = new FormData();

  
  constructor(private authService: AuthService, private router: Router,private _ToastrService:ToastrService) {} // تم إضافة router هنا

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.formData.set('ProfileImage', file);
    }
  }

  onRegister(form: any) {
    if (form.valid) {
      this.formData.set('FirstName', form.value.firstName);
      this.formData.set('LastName', form.value.lastName);
      this.formData.set('Email', form.value.email);
      this.formData.set('Password', form.value.password);
      this.formData.set('ConfirmPassword', form.value.confirmPassword);
      this.formData.set('UserType', form.value.userType);
      this.formData.set('BirthDate', form.value.birthDate);
      this.formData.set('Phone', form.value.phone);
      this.formData.set('BriefBio', form.value.briefBio);

      this.authService.register(this.formData).subscribe({
        next: (response) => {
          console.log('Registration successful', response);
          if (response && response.message) {
            // alert(response.message);
            this._ToastrService.success(response.message)
            this.router.navigate(['auth/login']); // يتم الانتقال إلى صفحة تسجيل الدخول هنا
          }
        },
        error: (error) => {
          console.error('Registration failed', error);
          this._ToastrService.error('An error occurred during registration.')
        }
      });
    }
  }
}
