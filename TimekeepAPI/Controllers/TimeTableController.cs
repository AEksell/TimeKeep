
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TimekeepAPI.Data;
using TimekeepAPI.Models;

namespace TimekeepAPI.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    public class TimeTableController : ControllerBase
    {
        private readonly TimeTableDbContext _context;

        public TimeTableController(TimeTableDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public JsonResult CreateTable(TimeTable timeTable)
        {
            if (timeTable.Id == 0)
            {
                _context.TimeTables.Add(timeTable);
            } else
            {
                return new JsonResult(NotFound());
            }
                _context.SaveChanges();

                return new JsonResult(Ok(timeTable));
        }

        [HttpGet]
        public async Task<ActionResult> GetTable(int? id)
        {
            if (id == null || id == 0)
            {
                var results = await _context.TimeTables.ToListAsync();
                return Ok(results);
            }

            var result = await _context.TimeTables.FindAsync(id);

            if (result == null)
            {
                return new JsonResult(NotFound());
            }

            return Ok(result);
        }
    }
}
