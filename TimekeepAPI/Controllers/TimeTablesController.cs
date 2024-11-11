using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using genericBackend.Data;
using genericBackend.Models;

namespace genericBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TimeTablesController : ControllerBase
    {
        private readonly TimeTableDbContext _context;

        public TimeTablesController(TimeTableDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<TimeTable>> PostTimeTable(TimeTable timeTable)
        {
            _context.TimeTables.Add(timeTable);
            await _context.SaveChangesAsync();
            
            return CreatedAtAction(nameof(GetTimeTable), new { id = timeTable.ID}, timeTable);
        }

        [HttpGet("{id?}")]
        public async Task<ActionResult<IEnumerable<TimeTable>>> GetTimeTable(int? id)
        {
            if (id == null || id == 0)
            {
                return Ok(await _context.TimeTables.ToListAsync());
            }

            var timeTable = await _context.TimeTables.FindAsync(id);
            if (timeTable == null)
            {
                return NotFound();
            }

            return Ok(timeTable);
        }

        [HttpDelete("{id?}")]
        public async Task<IActionResult> DeleteTimeTable(int? id)
        {
            if (id == null || id == 0)
            {
                _context.TimeTables.RemoveRange(_context.TimeTables);
                await _context.SaveChangesAsync();
                return NoContent();
            }

            var timeTable = await _context.TimeTables.FindAsync(id);
            if (timeTable == null)
            {
                return NotFound();
            }

            _context.TimeTables.Remove(timeTable);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
