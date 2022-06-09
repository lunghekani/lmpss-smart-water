using Microsoft.EntityFrameworkCore;
using Smart_Water_Dash.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Smart_Water_Dash.Data
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet <Users> Users { get; set; }
        
    }
}
