using Microsoft.AspNetCore.Mvc;
//using Smart_Water_Dash.Data;
using Smart_Water_Dash.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Smart_Water_Dash.Controllers
{
    public class LoginController: Controller
    {
        public IActionResult Login()
        {
            return View();
        }
    }
}
