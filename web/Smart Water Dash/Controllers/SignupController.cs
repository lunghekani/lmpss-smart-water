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
            IEnumerable<Signup> objList = _db.Signup;
            return View(objList);
        }


        //Get - signup
        public IActionResult SignupUser()
        {
           
            return View();
        }


        //POST -signup
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult SignupUser(Signup obj)
        {
            _db.Signup.Add(obj);
            _db.SaveChanges();
            return RedirectToAction("Login");
        }
    }
}
