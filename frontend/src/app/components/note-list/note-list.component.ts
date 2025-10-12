import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../../services/note.service';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];
  newNote: Note = { title: '', content: '' };

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes(): void {
    this.noteService.getNotes().subscribe(data => this.notes = data);
  }

  addNote(): void {
    if (!this.newNote.title.trim()) return;
    this.noteService.addNote(this.newNote).subscribe(note => {
      this.notes.push(note);
      this.newNote = { title: '', content: '' };
    });
  }

  deleteNote(id: number): void {
    this.noteService.deleteNote(id).subscribe(() => {
      this.notes = this.notes.filter(n => n.id !== id);
    });
  }
}
