import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { materialize } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
