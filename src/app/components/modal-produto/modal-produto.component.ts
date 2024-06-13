import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-modal-produto',
  standalone: true,
  imports: [MatButtonModule,
            MatDialogTitle,
            MatDialogContent,
            MatDialogActions,
            MatDialogClose,
            MatButtonModule],
  templateUrl: './modal-produto.component.html',
  styleUrl: './modal-produto.component.css'
})
export class ModalProdutoComponent {
}
