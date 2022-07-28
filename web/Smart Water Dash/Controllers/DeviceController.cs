using Microsoft.AspNetCore.Mvc;
using Smart_Water_Dash.Models;
using Smart_Water_Dash.Data;



namespace Smart_Water_Dash.Controllers
{
    public class DeviceController : Controller
    {
        private readonly ApplicationDbContext _db;
        public DeviceController(ApplicationDbContext db)
        {
            _db = db;
        }
        
        public IActionResult Index()
        {
            IEnumerable<DeviceModel> objList = _db.Devices;
            return View();
        }

        public IActionResult Device()
        {
            IEnumerable<DeviceModel> objList = _db.Devices;
            return View(objList);
        }
        // GET - Create
        public IActionResult Create()
        {
            return View();
        }

        //Post - Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(DeviceModel obj)
        {
            if (ModelState.IsValid)
            {
                _db.Devices.Add(obj);
                _db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(obj);

            //_db.Devices.Add(device);
            //_db.SaveChanges();
            //return RedirectToAction("Index");
        }



    }
}

