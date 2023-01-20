import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  exports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
