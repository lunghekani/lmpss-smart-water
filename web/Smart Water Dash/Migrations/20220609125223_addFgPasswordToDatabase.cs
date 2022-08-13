using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Smart_Water_Dash.Migrations
{
    public partial class addFgPasswordToDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_FgPassword",
                table: "FgPassword");

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "FgPassword",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "FgPassword",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_FgPassword",
                table: "FgPassword",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_FgPassword",
                table: "FgPassword");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "FgPassword");

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "FgPassword",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddPrimaryKey(
                name: "PK_FgPassword",
                table: "FgPassword",
                column: "Email");
        }
    }
}
