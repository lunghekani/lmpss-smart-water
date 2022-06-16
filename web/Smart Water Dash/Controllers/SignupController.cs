using Microsoft.AspNetCore.Mvc;
using Smart_Water_Dash.Data;
using Smart_Water_Dash.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Smart_Water_Dash.Controllers
{
    public class SignupController : Controller
    {
        private readonly ApplicationDbContext _db;

        public SignupController(ApplicationDbContext db)
        {
            _db = db;
        }

        public IActionResult Signup()
        {
            IEnumerable<Users> objList = _db.Users;
            return View(objList);
        }

        //GET - Signup
        public IActionResult SignupUser()
        {
            return View();
        }

        //POST - Signup
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult SignupUser(Users obj)
        {
            if (ModelState.IsValid)
            {
                _db.Users.Add(obj);
                _db.SaveChanges();
                return RedirectToAction("Signup");
            }
            return View(obj);
        }
    }
}