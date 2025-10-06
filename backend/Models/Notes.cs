namespace backend.Models
{
    public class Note
    {
        public int Id { get; set; }          // Unique ID 
        public string? Title { get; set; }    //nullable
        public string? Content { get; set; }
    }
}
