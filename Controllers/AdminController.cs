using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Aion.Models;
using Aion.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace Aion.Controllers;

[Authorize(Roles = "Administrador")]
public class AdminController : Controller
{
    private readonly ILogger<AdminController> _logger;
    private readonly ApplicationDbContext _context;
    private readonly SignInManager<User> _signInManager;
    private readonly UserManager<User> _userManager;
    private readonly IUserStore<User> _userStore;
    private readonly IUserEmailStore<User> _emailStore;

    public AdminController(ILogger<AdminController> logger,
        ApplicationDbContext context,
        SignInManager<User> signInManager,
        UserManager<User> userManager,
        IUserStore<User> userStore)
    {
        _logger = logger;
        _context = context;
        _signInManager = signInManager;
        _userManager = userManager;
        _userStore = userStore;
        _emailStore = (IUserEmailStore<User>)_userStore;
    }

    public IActionResult PeriodoLetivo()
    {
        List<PeriodoLetivo> periodos = _context.periodoLetivos.ToList();
        ViewData["hasPeriodo"] = periodos.Count() < 1 ? false : true;
        return View(periodos);
    }

    [HttpPost]
    public IActionResult PeriodoLetivo(int year, int semester)
    {
        if (ModelState.IsValid)
        {
            PeriodoLetivo periodo = new()
            {
                Ano = year,
                Semestre = semester,
            };
            _context.periodoLetivos.Add(periodo);
            _context.SaveChanges();
        }

        List<PeriodoLetivo> periodos = _context.periodoLetivos.ToList();
        ViewData["hasPeriodo"] = periodos.Count() < 1 ? false : true;
        return View(periodos);
    }

    [HttpPost, ActionName("EditPeriodo")]
    public IActionResult EditPeriodo(int id, int year, int semester)
    {
        var periodo = _context.periodoLetivos.FirstOrDefault(p => p.Id == id);
        periodo.Ano = year;
        periodo.Semestre = semester;

        if (ModelState.IsValid)
        {
            try
            {
                _context.Update(periodo);
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PeriodoExists(periodo.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
        }
        return RedirectToAction(nameof(PeriodoLetivo));
    }

    [HttpPost, ActionName("DeletePeriodo")]
    public IActionResult DeletePeriodoLetivo(int id)
    {
        var periodo = _context.periodoLetivos.Find(id);
        _context.periodoLetivos.Remove(periodo);
        _context.SaveChanges();
        return RedirectToAction(nameof(PeriodoLetivo));
    }

    public IActionResult Grades()
    {
        ViewData["Cursos"] = _context.cursos.OrderBy(c => c.Nome);
        List<Grade> grades = _context.grades.Include(c => c.Curso).ToList();
        ViewData["hasGrade"] = grades.Count() < 1 ? false : true;
        return View(grades);
    }

    [HttpPost]
    public IActionResult Grades(DateTime date, string course, string number)
    {
        int curso = _context.cursos.FirstOrDefault(c => c.Nome.Equals(course)).Id;
        
        if (ModelState.IsValid)
        {
            Grade grid = new()
            {
                Data = date,
                CursoId = curso,
                Numero = number,
            };
            _context.grades.Add(grid);
            _context.SaveChanges();
        }

        ViewData["Cursos"] = _context.cursos.OrderBy(c => c.Nome);
        List<Grade> grades = _context.grades.Include(c => c.Curso).ToList();
        return View(grades);
    }

    [HttpPost, ActionName("DeleteGrade")]
    public IActionResult DeleteGrade(int id)
    {
        var grade = _context.grades.Find(id);
        _context.grades.Remove(grade);
        _context.SaveChanges();
        return RedirectToAction(nameof(Grades));
    }

    [HttpPost, ActionName("EditGrade")]
    public IActionResult EditGrade(int id, DateTime date, string course, string number)
    {
        int curso = _context.cursos.FirstOrDefault(c => c.Nome.Equals(course)).Id;
        var grade = _context.grades.FirstOrDefault(g => g.Id == id);
        grade.Data = date;
        grade.CursoId = curso;
        grade.Numero = number;

        if (ModelState.IsValid)
        {
            try
            {
                _context.Update(grade);
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GradeExists(grade.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
        }
        return RedirectToAction(nameof(Grades));
    }

    public IActionResult Cursos()
    {
        List<Curso> cursos = _context.cursos.ToList();
        ViewData["hasCurso"] = cursos.Count() < 1 ? false : true;
        return View(cursos);
    }

    [HttpPost]
    public IActionResult Cursos(string name, string type, int qtySem)
    {
        if (ModelState.IsValid)
        {
            Curso course = new()
            {
                Nome = name,
                Tipo = type,
                QtdeSem = qtySem
            };
            _context.cursos.Add(course);
            _context.SaveChanges();
        }

        // Recarrega automáticamente a página quando adicionado
        List<Curso> cursos = _context.cursos.ToList();
        return View(cursos);
    }

    [HttpPost, ActionName("DeleteCurso")]
    public IActionResult DeleteCurso(int id)
    {
        var curso = _context.cursos.Find(id);
        _context.cursos.Remove(curso);
        _context.SaveChanges();
        return RedirectToAction(nameof(Cursos));
    }

    [HttpPost, ActionName("EditCurso")]
    public IActionResult EditCurso(int id, string name, string type, int qtySem)
    {
        var curso = _context.cursos.FirstOrDefault(c => c.Id == id);
        curso.Nome = name;
        curso.Tipo = type;
        curso.QtdeSem = qtySem;

        if (ModelState.IsValid)
        {
            try
            {
                _context.Update(curso);
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CursoExists(curso.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
        }
        return RedirectToAction(nameof(Cursos));
    }

    public IActionResult Materias()
    {

        List<Disciplina> materias = _context.disciplinas.ToList();
        ViewData["hasMateria"] = materias.Count() < 1 ? false : true;
        return View(materias);
    }

    [HttpPost]
    public IActionResult Materias(string name)
    {
        Disciplina sub = new()
        {
            Nome = name
        };
        _context.disciplinas.Add(sub);
        _context.SaveChanges();

        // Recarrega automáticamente a página quando adicionado
        List<Disciplina> materias = _context.disciplinas.ToList();
        return View(materias);
    }

    [HttpPost, ActionName("DeleteMateria")]
    [ValidateAntiForgeryToken]
    public IActionResult DeleteMateria(int id)
    {
        var disciplina = _context.disciplinas.Find(id);
        _context.disciplinas.Remove(disciplina);
        _context.SaveChanges();
        return RedirectToAction(nameof(Materias));
    }

    public IActionResult Turmas()
    {
        ViewData["Grades"] = _context.grades.Include(c => c.Curso).OrderBy(g => g.Curso.Nome);
        ViewData["Periodos"] = _context.periodoLetivos.OrderBy(p => p.Ano);
        List<Turma> turmas = _context.turmas.Include(g => g.Grade).ThenInclude(c => c.Curso)
        .Include(p => p.PeriodoLetivo).ToList();
        ViewData["hasTurma"] = turmas.Count() < 1 ? false : true;
        return View(turmas);
    }

    [HttpPost]
    public IActionResult Turmas(string name, string grid, string schYear)
    {
        var periodoSplit = schYear.Split(", Sem: ");
        int grade = _context.grades.FirstOrDefault(c => c.Curso.Nome.Equals(grid)).Id;
        int periodo = _context.periodoLetivos.FirstOrDefault(p => p.Ano.Equals(Int32.Parse(periodoSplit[0]))
            && p.Semestre.Equals(Int32.Parse(periodoSplit[1]))).Id;
        Turma tur = new()
        {
            Nome = name,
            GradeId = grade,
            AnoSemIngresso = periodo,
        };
        _context.turmas.Add(tur);
        _context.SaveChanges();

        // Recarrega automáticamente a página quando adicionado
        ViewData["Grades"] = _context.grades.Include(c => c.Curso).OrderBy(g => g.Curso.Nome);
        ViewData["Periodos"] = _context.periodoLetivos.OrderBy(p => p.Ano);
        List<Turma> turmas = _context.turmas.Include(g => g.Grade).ThenInclude(c => c.Curso)
        .Include(p => p.PeriodoLetivo).ToList();
        return View(turmas);
    }

    [HttpPost, ActionName("EditTurma")]
    public IActionResult Turmas(int id, string name, string grid, string schYear)
    {
        var turma = _context.turmas.FirstOrDefault(t => t.Id == id);
        var periodoSplit = schYear.Split(", Sem: ");
        int grade = _context.grades.FirstOrDefault(c => c.Curso.Nome.Equals(grid)).Id;
        int periodo = _context.periodoLetivos.FirstOrDefault(p => p.Ano.Equals(Int32.Parse(periodoSplit[0]))
            && p.Semestre.Equals(Int32.Parse(periodoSplit[1]))).Id;

        turma.Nome = name;
        turma.GradeId = grade;
        turma.AnoSemIngresso = periodo;

        if (ModelState.IsValid)
        {
            try
            {
                _context.Update(turma);
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TurmaExists(turma.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
        }
        return RedirectToAction(nameof(Turmas));
    }

    [HttpPost, ActionName("DeleteTurma")]
    public IActionResult DeleteTurma(int id)
    {
        var turma = _context.turmas.Find(id);
        _context.turmas.Remove(turma);
        _context.SaveChanges();
        return RedirectToAction(nameof(Turmas));
    }

    public IActionResult Professores()
    {
        ViewData["Materias"] = _context.disciplinas.OrderBy(m => m.Nome);
        List<Professor> professores = _context.professores.Include(p => p.Formacao).ThenInclude(f => f.Disciplina).ToList();
        ViewData["hasProfessor"] = professores.Count() < 1 ? false : true;
        return View(professores);
    }

    [HttpPost]
    public async Task<IActionResult> Professores(string name, string email, string phone, string subjects)
    {
        // Cria o usuário do professor
        string userName = (name.Split(' ')[0] + "." + name.Split(' ')[name.Split(' ').Count() - 1]).ToLower();
        var user = await _userManager.FindByEmailAsync(email);
        if (user != null)
        {
            ModelState.AddModelError("", "Esse email já encontra-se cadastrado");
            return View();
        }
        user = Activator.CreateInstance<User>();
        user.Nome = name;
        user.PhoneNumber = phone;
        user.EmailConfirmed = true;
        await _userStore.SetUserNameAsync(user, userName, CancellationToken.None);
        await _emailStore.SetEmailAsync(user, email, CancellationToken.None);
        var result = await _userManager.CreateAsync(user, "@Aion123");
        var userId = await _userManager.GetUserIdAsync(user);

        await _userManager.AddToRoleAsync(user, "Professor");

        // Cria e cadastra o professor
        Professor prof = new()
        {
            Nome = name,
            Email = email,
            Telefone = phone,
            UserId = userId,
            Usuario = userName,
            Senha = "@Aion123"
        };
        _context.professores.Add(prof);
        _context.SaveChanges();

        foreach (var subject in subjects.Split(','))
        {
            var formacao = new Formacao()
            {
                ProfessorId = prof.Id,
                DisciplinaId = _context.disciplinas.FirstOrDefault(d => d.Nome.Equals(subject)).Id
            };
            _context.formacoes.Add(formacao);
        }
        _context.SaveChanges();

        // Recarrega automáticamente a página quando adicionado
        ViewData["Materias"] = _context.disciplinas.OrderBy(m => m.Nome);
        List<Professor> professores = _context.professores.Include(p => p.Formacao).ThenInclude(f => f.Disciplina).ToList();
        return View(professores);
    }

    [HttpPost, ActionName("EditProfessor")]
    public IActionResult EditProfessor(int id, string phone, string subjects)
    {
        var professor = _context.professores.FirstOrDefault(p => p.Id == id);
        professor.Telefone = phone;

        if (ModelState.IsValid)
        {
            try
            {
                _context.Update(professor);
                _context.SaveChanges();

                var formacoes = _context.formacoes.Where(f => f.ProfessorId == id).ToList();
                _context.formacoes.RemoveRange(formacoes);

                foreach (var subject in subjects.Split(','))
                {
                    var formacao = new Formacao()
                    {
                        ProfessorId = id,
                        DisciplinaId = _context.disciplinas.FirstOrDefault(d => d.Nome.Equals(subject)).Id
                    };
                    _context.formacoes.Add(formacao);
                }
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProfessorExists(professor.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
        }
        return RedirectToAction(nameof(Professores));
    }

    [HttpPost, ActionName("DeleteProfessor")]
    public IActionResult DeleteProfessor(int id)
    {
        var professor = _context.professores.Find(id);
        _context.professores.Remove(professor);
        _context.SaveChanges();
        return RedirectToAction(nameof(Professores));
    }

    public IActionResult Atribuicoes()
    {
        ViewData["Professores"] = _context.professores.OrderBy(p => p.Nome);
        // ViewData["GradeDisciplinas"] = _context.gradeDisciplinas.Include(g => g.Grade).ThenInclude(c => c.Curso).OrderBy(g => g.Grade.Curso.Nome);
        ViewData["GradeDisciplinas"] = _context.gradeDisciplinas.Include(d => d.Disciplina).OrderBy(d => d.Disciplina.Nome);
        ViewData["Turmas"] = _context.turmas.OrderBy(t => t.Nome);
        List<Atribuicao> atribuicoes = _context.atribuicoes.Include(p => p.Professor)
            .Include(t => t.Turma)
            .Include(g => g.GradeDisciplinas).ThenInclude(g => g.Grade).ThenInclude(c => c.Curso)
            .Include(g => g.GradeDisciplinas).ThenInclude(d => d.Disciplina).ToList();
        ViewData["hasAtribuicao"] = _context.atribuicoes.Count() < 1 ? false : true;
        return View(atribuicoes);
    }

    [HttpPost]
    public IActionResult Atribuicoes(string teacher, string gridSub, string turma, bool isMatriz)
    {
        int professor = _context.professores.FirstOrDefault(p => p.Nome.Equals(teacher)).Id;
        int gradeDisciplina = _context.gradeDisciplinas.FirstOrDefault(gd => gd.Disciplina.Nome.Equals(gridSub)).Id;
        int tur = _context.turmas.FirstOrDefault(t => t.Nome.Equals(turma)).Id;
        Atribuicao atr = new()
        {
            ProfessorId = professor,
            GradeDisciplinasId = gradeDisciplina,
            TurmaId = tur,
            Matriz = isMatriz,
        };
        _context.Add(atr);
        _context.SaveChanges();

        ViewData["Professores"] = _context.professores.OrderBy(p => p.Nome);
        // ViewData["GradeDisciplinas"] = _context.gradeDisciplinas.Include(g => g.Grade).ThenInclude(c => c.Curso).OrderBy(g => g.Grade.Curso.Nome);
        ViewData["GradeDisciplinas"] = _context.gradeDisciplinas.Include(d => d.Disciplina).OrderBy(d => d.Disciplina.Nome);
        ViewData["Turmas"] = _context.turmas.OrderBy(t => t.Nome);
        List<Atribuicao> atribuicoes = _context.atribuicoes.Include(p => p.Professor)
            .Include(t => t.Turma)
            .Include(g => g.GradeDisciplinas).ThenInclude(g => g.Grade).ThenInclude(c => c.Curso)
            .Include(g => g.GradeDisciplinas).ThenInclude(d => d.Disciplina).ToList();
        return View(atribuicoes);
    }

    [HttpPost, ActionName("EditAtribuicoes")]
    public IActionResult EditAtribuicoes(int id, string teacher, string gridSub, string turma, bool isMatrizEdt)
    {
        var atribuicao = _context.atribuicoes.FirstOrDefault(a => a.Id == id);
        int professor = _context.professores.FirstOrDefault(p => p.Nome.Equals(teacher)).Id;
        int gradeDisciplina = _context.gradeDisciplinas.FirstOrDefault(gd => gd.Disciplina.Nome.Equals(gridSub)).Id;
        int tur = _context.turmas.FirstOrDefault(t => t.Nome.Equals(turma)).Id;
        atribuicao.ProfessorId = professor;
        atribuicao.GradeDisciplinasId = gradeDisciplina;
        atribuicao.TurmaId = tur;
        atribuicao.Matriz = isMatrizEdt;

        if (ModelState.IsValid)
        {
            try
            {
                _context.Update(atribuicao);
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AtribuicaoExists(atribuicao.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
        }
        return RedirectToAction(nameof(Atribuicoes));
    }

    [HttpPost, ActionName("DeleteAtribuicoes")]
    public IActionResult DeleteAtribuicoes(int id)
    {
        var atribuicao = _context.atribuicoes.Find(id);
        _context.atribuicoes.Remove(atribuicao);
        _context.SaveChanges();
        return RedirectToAction(nameof(Atribuicoes));
    }

    public IActionResult GradeDisciplinas()
    {
        ViewData["Grades"] = _context.grades.Include(c => c.Curso).OrderBy(g => g.Curso.Nome);
        ViewData["Disciplinas"] = _context.disciplinas.OrderBy(d => d.Nome);
        List<GradeDisciplinas> gradeDisciplinas = _context.gradeDisciplinas.Include(g => g.Grade).ThenInclude(c => c.Curso)
        .Include(d => d.Disciplina).ToList();
        ViewData["hasGradeDisciplina"] = _context.gradeDisciplinas.Count() < 1 ? false : true;
        return View(gradeDisciplinas);
    }

    [HttpPost]
    public IActionResult GradeDisciplinas(string grid, string sub, int semester, bool hasDivision, int workload)
    {
        int grade = _context.grades.FirstOrDefault(c => c.Curso.Nome.Equals(grid)).Id;
        int materia = _context.disciplinas.FirstOrDefault(d => d.Nome.Equals(sub)).Id;
        GradeDisciplinas gridSub = new()
        {
            GradeId = grade,
            DisciplinaId = materia,
            Semestre = semester,
            TemDivisao = hasDivision,
            CargaHoraria = workload,
        };
        _context.gradeDisciplinas.Add(gridSub);
        _context.SaveChanges();

        ViewData["Grades"] = _context.grades.Include(c => c.Curso).OrderBy(g => g.Curso.Nome);
        ViewData["Disciplinas"] = _context.disciplinas.OrderBy(d => d.Nome);
        List<GradeDisciplinas> gradeDisciplinas = _context.gradeDisciplinas.Include(g => g.Grade).ThenInclude(c => c.Curso)
        .Include(d => d.Disciplina).ToList();
        return View(gradeDisciplinas);
    }

    [HttpPost, ActionName("EditGradeDisciplina")]
    public IActionResult EditGradeDisciplinas(int id, string grid, string sub, int semester, bool hasDivisionEdt, int workload)
    {
        int grade = _context.grades.FirstOrDefault(c => c.Curso.Nome.Equals(grid)).Id;
        int materia = _context.disciplinas.FirstOrDefault(d => d.Nome.Equals(sub)).Id;
        var gradeDisciplina = _context.gradeDisciplinas.FirstOrDefault(g => g.Id == id);
        gradeDisciplina.GradeId = grade;
        gradeDisciplina.DisciplinaId = materia;
        gradeDisciplina.Semestre = semester;
        gradeDisciplina.TemDivisao = hasDivisionEdt;
        gradeDisciplina.CargaHoraria = workload;

        if (ModelState.IsValid)
        {
            try
            {
                _context.Update(gradeDisciplina);
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GradeDisciplinaExists(gradeDisciplina.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
        }
        return RedirectToAction(nameof(GradeDisciplinas));
    }

    [HttpPost, ActionName("DeleteGradeDisciplina")]
    public IActionResult DeleteGradeDisciplinas(int id)
    {
        var gradeDisciplina = _context.gradeDisciplinas.Find(id);
        _context.gradeDisciplinas.Remove(gradeDisciplina);
        _context.SaveChanges();
        return RedirectToAction(nameof(GradeDisciplinas));
    }

    public IActionResult Horarios()
    {
        ViewData["DiaSemana"] = Enum.GetValues(typeof(DiaSemana)).Cast<DiaSemana>();
        var horarios = new List<string> 
        { "07:10", "08:00", "08:50", "10:00", "10:50", "11:40", "13:10", "14:00"};
        ViewData["HorariosAula"] = horarios;
        ViewData["Turmas"] = _context.turmas;
        return View();
    }

    //////////////////////////////////////////////////

    private bool PeriodoExists(int id)
    {
        return _context.periodoLetivos.Any(p => p.Id == id);
    }

    private bool CursoExists(int id)
    {
        return _context.cursos.Any(c => c.Id == id);
    }

    private bool GradeExists(int id)
    {
        return _context.grades.Any(g => g.Id == id);
    }

    private bool ProfessorExists(int id)
    {
        return _context.professores.Any(p => p.Id == id);
    }

    private bool TurmaExists(int id)
    {
        return _context.turmas.Any(t => t.Id == id);
    }

    private bool AtribuicaoExists(int id)
    {
        return _context.atribuicoes.Any(a => a.Id == id);
    }

    private bool GradeDisciplinaExists(int id)
    {
        return _context.atribuicoes.Any(g => g.Id == id);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View("Error!");
    }
}
