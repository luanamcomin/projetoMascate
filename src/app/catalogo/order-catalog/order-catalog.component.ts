import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-order-catalog',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet],
  templateUrl: './order-catalog.component.html',
  styleUrl: './order-catalog.component.css'
})
export class OrderCatalogComponent {

}
