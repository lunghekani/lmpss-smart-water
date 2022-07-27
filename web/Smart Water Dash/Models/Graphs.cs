using System.ComponentModel.DataAnnotations;

namespace Smart_Water_Dash.Models
{
    public class Graphs
    {
        [Key]
        [Required]
        public string readingId { get; set; }
        [Required]
        public DateTime day { get; set; }
        [Required]
        public int liters { get; set; }


    }
}
