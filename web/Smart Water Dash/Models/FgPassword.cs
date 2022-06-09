using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;



namespace Smart_Water_Dash.Models
{
    public class FgPassword
    {
        [Key]
        public int Id { get; set; }
        public string Email { get; set; }
    }
}
