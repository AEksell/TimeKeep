using Microsoft.EntityFrameworkCore;
using genericBackend.Models;
namespace genericBackend.Data
{
    public class TimeTableDbContext: DbContext
    {
            public TimeTableDbContext(DbContextOptions<TimeTableDbContext> options) : base(options) { }

            public DbSet<TimeTable> TimeTables { get; set; }
        
    }
}
