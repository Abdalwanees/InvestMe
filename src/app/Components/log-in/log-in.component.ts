import { Message } from './../../Interfaces/Message';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [AuthService],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,private _ToastrService:ToastrService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please enter valid email and password';
      return;
    }

    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: (response) => {
        // Assuming the response contains the userType and other details
        this._ToastrService.success(response.message)
        const { userType } = response;
        const { userId} = response;
        const { userName} = response;
        console.log(response);
        localStorage.setItem('userType', userType);
        localStorage.setItem('id', userId);
        localStorage.setItem('Name', userName);
        console.log(localStorage.getItem('Name'));
        
        
        this.navigateToDashboard(userType);
      },
      error: (error) => {
        console.error('Login failed', error);
        this.errorMessage = 'Invalid email or password. Please try again.';
        this._ToastrService.error('Invalid email or password. Please try again.')
      }
    });
  }

  private navigateToDashboard(userType: string): void {
    if (userType === 'Innovator') {
      this.router.navigate(['/blank/innovator']);
    } else if (userType === 'Investor') {
      this.router.navigate(['/blank/investor']);
    } else {
      this.router.navigate(['/default-dashboard']); // If there is another type of user
    }
  }
}
