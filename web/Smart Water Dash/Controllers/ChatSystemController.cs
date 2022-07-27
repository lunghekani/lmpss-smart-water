using Microsoft.AspNetCore.Mvc;

namespace Smart_Water_Dash.Controllers
{
    public class ChatSystemController : Controller
    {
        public IActionResult Chat()
        {
            return View();
        }
    }
}
