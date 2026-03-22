import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from './pages/components/components-module';

@Component({
  selector: 'app-root',
  imports: [ComponentsModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mark-zero');
}
