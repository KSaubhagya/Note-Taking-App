import { Component } from '@angular/core';
import { NoteListComponent } from './components/note-list/note-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NoteListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
