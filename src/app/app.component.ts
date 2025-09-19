
import { Component } from '@angular/core';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ToolbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poke-app';
}
