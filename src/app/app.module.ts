import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingInterceptor } from './interceptores/loading.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { SafeUrlPipe } from './Pipe/SafeUrlPipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule, BrowserAnimationsModule,ToastrModule.forRoot(),HttpClientModule,
    NgxSpinnerModule,
    SafeUrlPipe
  ],
  providers: [AuthService,{provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}],
  bootstrap: [AppComponent],
  //  exports: [SafeUrlPipe] 
})
export class AppModule { }
