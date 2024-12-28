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
				return BadRequest("Invalid form data. Please fill out all required fields correctly.");
			}

			try
			{
				SendEmail(form);

				return Ok("Form submitted successfully!");
			}
			catch (Exception)
			{
				return StatusCode(500, "An error occurred while sending your message. Please try again later.");
			}
		}

		private void SendEmail(ContactForm form)
		{
			var smtpClient = new SmtpClient("smtp.gmail.com")
			{
				Port = 587,
				Credentials = new NetworkCredential(
					Environment.GetEnvironmentVariable("GMAIL_USER"),
					Environment.GetEnvironmentVariable("GMAIL_PASSWORD")
				),
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
