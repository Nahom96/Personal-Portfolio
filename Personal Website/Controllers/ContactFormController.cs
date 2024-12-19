using Microsoft.AspNetCore.Mvc;

namespace Personal_Website.Controllers
{
	public class ContactFormController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}
	}
}
