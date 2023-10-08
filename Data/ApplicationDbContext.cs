using Aion.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Aion.Data;

public class ApplicationDbContext : IdentityDbContext<User>
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    public DbSet<Atribuicao> atribuicoes { get; set; }

    public DbSet<Curso> cursos { get; set; }

    public DbSet<Disciplina> disciplinas { get; set; }

    public DbSet<Disponibilidade> disponibilidades { get; set; }

    public DbSet<Formacao> formacoes { get; set; }

    public DbSet<Grade> grades { get; set; }

    public DbSet<GradeDisciplinas> gradeDisciplinas { get; set; }

    public DbSet<PeriodoLetivo> periodoLetivos { get; set; }

    public DbSet<Professor> professores { get; set; }

    public DbSet<Turma> turmas { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        #region Many to Many - GradeDisciplina
            builder.Entity<GradeDisciplinas>()
                .HasOne(gd => gd.Grade)
                .WithMany(g => g.GradeDisciplinas)
                .HasForeignKey(gd => gd.GradeId);

            builder.Entity<GradeDisciplinas>()
                .HasOne(gd => gd.Disciplina)
                .WithMany(d => d.GradeDisciplinas)
                .HasForeignKey(gd => gd.DisciplinaId);
        #endregion


        #region Populate Roles
        var roles = new List<IdentityRole>()
        {
            new IdentityRole
            {
                Id = Guid.NewGuid().ToString(),
                Name = "Administrador",
                NormalizedName = "ADMINISTRADOR"
            },
            new IdentityRole
            {
                Id = Guid.NewGuid().ToString(),
                Name = "Professor",
                NormalizedName = "PROFESSOR"
            },
        };
        builder.Entity<IdentityRole>().HasData(roles);
        #endregion

        #region Populate Users
        var hash = new PasswordHasher<User>();
        byte[] avatarPic = System.IO.File.ReadAllBytes(
            System.IO.Directory.GetCurrentDirectory() + @"\wwwroot\img\photos\rafael.jpg");
        var users = new List<User>()
        {
            new User
            {
                Id = Guid.NewGuid().ToString(),
                Nome = "Rafael Bueno Gonzales",
                UserName = "Admin",
                NormalizedUserName = "ADMIN",
                Email = "rafaelbuenog2020@gmail.com",
                NormalizedEmail = "RAFAELBUENOG2020@GMAIL.COM",
                EmailConfirmed = true,
                PasswordHash = hash.HashPassword(null, "123456"),
                SecurityStamp = hash.GetHashCode().ToString(),
                FotoPerfil = avatarPic,
                DataNasc = DateTime.Parse("17/09/2005")
            }
        };
        builder.Entity<User>().HasData(users);
        #endregion

        #region Populate User Role
        builder.Entity<IdentityUserRole<string>>().HasData(
            new IdentityUserRole<string>
            {
                UserId = users[0].Id,
                RoleId = roles[0].Id
            },
            new IdentityUserRole<string>
            {
                UserId = users[0].Id,
                RoleId = roles[1].Id
            }
        );
        #endregion
    }
}
