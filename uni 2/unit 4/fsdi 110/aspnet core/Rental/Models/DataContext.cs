using Microsoft.EntityFrameworkCore;

namespace Rental.Models{

    // this class will handles the connections to db and helps to retrieve/store/update data
    // if something changes on the models/tables, exec:
    // dotnet ef migrations add <someName>
    // dotnet ef database update
    public class DataContext: DbContext{

        public DataContext( DbContextOptions<DataContext> options ) : base(options){

        }

        // specify which models need to be converted into db tables
        public DbSet<Car> Cars {get; set; }

    }
}