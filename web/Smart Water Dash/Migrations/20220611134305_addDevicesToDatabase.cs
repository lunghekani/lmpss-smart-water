using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Smart_Water_Dash.Migrations
{
    public partial class addDevicesToDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_FgPassword",
                table: "FgPassword");

            migrationBuilder.RenameTable(
                name: "FgPassword",
                newName: "FgPassowrd");

            migrationBuilder.AddPrimaryKey(
                name: "PK_FgPassowrd",
                table: "FgPassowrd",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "Devices",
                columns: table => new
                {
                    deviceId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    userName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    userId = table.Column<int>(type: "int", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Created = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Devices", x => x.deviceId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Devices");

            migrationBuilder.DropPrimaryKey(
                name: "PK_FgPassowrd",
                table: "FgPassowrd");

            migrationBuilder.RenameTable(
                name: "FgPassowrd",
                newName: "FgPassword");

            migrationBuilder.AddPrimaryKey(
                name: "PK_FgPassword",
                table: "FgPassword",
                column: "Id");
        }
    }
}
