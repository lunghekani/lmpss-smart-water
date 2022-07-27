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
        public DbSet<FgPassword> FgPassowrd { get; set; }
        public DbSet<Login> Login { get; set; }
        public DbSet<Signup> Signup { get; set; }
        public DbSet<DeviceModel> Devices { get; set; }
        public DbSet<Graphs> Graphs { get; set; }

    }
}
