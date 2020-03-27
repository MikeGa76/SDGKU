using System;
using Microsoft.AspNetCore.Mvc;
using Rental.Models;
using System.Collections.Generic;
using System.Linq;

namespace Rental.Controllers
{
    
    public class CatalogController : Controller
    {
        private DataContext dbContext;
        public CatalogController(DataContext context){
            this.dbContext = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public IActionResult SaveCar([FromBody] Car theCar){
            Console.WriteLine("User is saving  car");
            Console.WriteLine(theCar.Make);
        
            theCar.Id = 1;
            return Json(theCar);
        }


        [HttpGet]
        public IActionResult GetCatalog(){
            // return Content("hello get");
            var list = dbContext.Cars.ToList(); // retrieve all records from Car table
            return Json(list);
        }
    }
}