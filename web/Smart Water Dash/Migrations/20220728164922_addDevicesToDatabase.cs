using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Smart_Water_Dash.Migrations
{
    public partial class addDevicesToDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Graphs",
                columns: table => new
                {
                    readingId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    day = table.Column<DateTime>(type: "datetime2", nullable: false),
                    liters = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Graphs", x => x.readingId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Graphs");
        }
    }
}
