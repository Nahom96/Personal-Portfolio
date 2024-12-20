using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters;
using Personal_Website.Models;
using System.Net;
using System.Net.Mail;

namespace Personal_Website.Controllers
{
	public class ContactFormController : Controller
	{
		[HttpPost]
		[Route("Contact/Submit")]
		public IActionResult SubmitForm([FromForm] ContactForm form)
		{
			if (!ModelState.IsValid)
			{
				// Return validation errors as JSON response
				var errors = ModelState.Values.SelectMany(v => v.Errors)
											   .Select(e => e.ErrorMessage)
											   .ToList();
				return Json(new { success = false, errors });
			}

			// If everything is valid, return a success response
			return Json(new { success = true, message = "Form submitted successfully!" });
		}

		private void SendEmail(ContactForm form)
		{
			var smtpClient = new SmtpClient("smtp.gmail.com")
			{
				Port = 587,
				Credentials = new NetworkCredential("Arayanahom475@gmail.com", "tsch chta tsom ccgt"),
				EnableSsl = true,
			};
			var mailMessage = new MailMessage
			{
				From = new MailAddress(form.Email),  
				Subject = "New Contact Form Submission",
				Body = $"Name: {form.Name}\nEmail: {form.Email}\nPhone: {form.Phone}\nMessage: {form.Message}",
				IsBodyHtml = false,
			};
			mailMessage.To.Add("Arayanahom475@gmail.com");

			smtpClient.Send(mailMessage);
		}
	}
}
