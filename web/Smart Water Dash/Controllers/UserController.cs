using Microsoft.AspNetCore.Mvc;
using Smart_Water_Dash.Data;
using Smart_Water_Dash.Models;

namespace Smart_Water_Dash.Controllers
{
    public class UserController : Controller
    {
        private readonly ApplicationDbContext _db;
            
        public UserController(ApplicationDbContext db)
        {
            _db = db;
        }

        public IActionResult Index()
        {
            IEnumerable<Users> objList = _db.Users;
            return View (objList);
        }

        //GET - CREATE
        public IActionResult Create()
        {
            return View();
        }


        //POST - CREATE
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(Users obj)
        {
            _db.Users.Add(obj);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}
