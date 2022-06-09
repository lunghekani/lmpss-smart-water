using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;


namespace Smart_Water_Dash.Models
{
    public class DeviceModel
    {
        [Key]
        public string deviceId { get; set; }
        public string userName { get; set; }
        public int userId { get; set; }

    }
}
