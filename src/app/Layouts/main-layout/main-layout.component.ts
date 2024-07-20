import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../Components/footer/footer.component";
import { HomeComponent } from 'src/app/Components/home/home.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule,RouterOutlet,FooterComponent,HomeComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

}
