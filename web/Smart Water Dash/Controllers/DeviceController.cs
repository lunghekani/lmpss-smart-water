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
    }
}

