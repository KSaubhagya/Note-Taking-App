using Microsoft.AspNetCore.Mvc;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NotesController : ControllerBase
    {
        // In-memory data storage (no database)
        private static readonly List<Note> notes = [];
        private static int nextId = 1;

        [HttpGet]
        public ActionResult<IEnumerable<Note>> GetNotes()
        {
            return Ok(notes);
        }

        [HttpGet("{id}")]
        public ActionResult<Note> GetNoteById(int id)
        {
            var note = notes.FirstOrDefault(n => n.Id == id);
            if (note == null)
                return NotFound();
            return Ok(note);
        }

        [HttpPost]
        public ActionResult<Note> AddNote([FromBody] Note note)
        {
            note.Id = nextId++;
            notes.Add(note);
            return CreatedAtAction(nameof(GetNoteById), new { id = note.Id }, note);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteNote(int id)
        {
            var note = notes.FirstOrDefault(n => n.Id == id);
            if (note == null)
                return NotFound();

            notes.Remove(note);
            return NoContent();
        }
    }
}
