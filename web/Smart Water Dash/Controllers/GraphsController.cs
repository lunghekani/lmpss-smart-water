using Microsoft.AspNetCore.Mvc;
using Smart_Water_Dash.Data;

namespace Smart_Water_Dash.Controllers
{
    //[Route("Graphs")]
    public class GraphsController : Controller
    {
        private readonly ApplicationDbContext _db;
        public GraphsController(ApplicationDbContext db)
        {
            _db = db;
        }
        //public IActionResult Index()
        //{
        //    return View();
        //}
        //    [Route("")]
        //    [Route("index")]
        //    [Route("~/")]
        public IActionResult BarGraph()
        {  
           //ViewBag.graphs = _db.Graphs.ToList();

            return View();
        }       
        
    }
}
