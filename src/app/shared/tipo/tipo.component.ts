
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tipo',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.scss']
})
export class TipoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
