using System;
using Microsoft.AspNetCore.Mvc;
using Rental.Models;
using System.Collections.Generic;

namespace Rental.Controllers
{
    
    public class CatalogController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Register()
        {
            return View();
        }

        [HttpGet]
        public IActionResult GetCatalog(){
            return Content("hello get");

            Car c1 = new Car();
            c1.Make = "Ford";
            c1.Model = "Focus";
            c1.Year = 2019;
            c1.Description = " this a fuel eco car"

            Car c2 = new Car();
            c2.Make = "Honda";
            c2.Model =" Civic";

            List<Car> list = new List<Car>();
            list.Add (c1);
            list.Add (c2)
            ret
        }
    }
}