using Microsoft.EntityFrameworkCore;

using TimekeepAPI.Models;
namespace TimekeepAPI.Data
{
    public class TimeTableDbContext : DbContext
    {

        public DbSet<TimeTable> TimeTables { get; set; }

        public TimeTableDbContext(DbContextOptions<TimeTableDbContext> options)
            : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=Timekeep.db");
        }
    }
}
