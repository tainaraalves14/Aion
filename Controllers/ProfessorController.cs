using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Aion.Models;
using Aion.Data;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace Aion.Controllers;

[Authorize(Roles = "Professor")]
public class ProfessorController : Controller
{
    private readonly ILogger<ProfessorController> _logger;

    private readonly ApplicationDbContext _context;

    public ProfessorController(ILogger<ProfessorController> logger, ApplicationDbContext context)
    {
        _logger = logger;
        _context = context;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult RegDados()
    {
        var days = Enum.GetValues(typeof(DiaSemana)).Cast<DiaSemana>();
        return View(days);
    }

    public IActionResult HorarioFinal()
    {
        return View();
    }

    public IActionResult Config()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View("Error!");
    }
}
