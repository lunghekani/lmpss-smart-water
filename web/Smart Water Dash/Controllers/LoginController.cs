using Microsoft.AspNetCore.Mvc;
using Smart_Water_Dash.Data;
using Smart_Water_Dash.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Smart_Water_Dash.Controllers
{
    public class LoginController: Controller
    {

        private readonly ApplicationDbContext _db;

        public LoginController(ApplicationDbContext db)
        {
            _db = db;
        }

        public IActionResult Login()
        {
            IEnumerable<Login> objList = _db.Login;
            return View(objList);
        }

        //GET- Login
        public IActionResult LoginUser()
        {
            return View();
        }
        //POST -Login
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult LoginUser(Login obj)
        {         
            _db.Login.Add(obj);
            _db.SaveChanges();
            return RedirectToAction("Login");
        }

    }
}
