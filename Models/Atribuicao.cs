using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Aion.Models;

[Table("Atribuicao")]
public class Atribuicao
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    
    public int ProfessorId { get; set; }

    public int GradeDisciplinasId { get; set; }

    public int TurmaId { get; set; }

    // Se a Turma for A, a matriz será verdadeira;
    // Se a turma for B, a matriz será falsa;
    public bool? Matriz { get; set; }

    [ForeignKey("ProfessorId")]
    public Professor Professor { get; set; }

    [ForeignKey("GradeDisciplinasId")]
    public GradeDisciplinas GradeDisciplinas { get; set; }

    [ForeignKey("TurmaId")]
    public Turma Turma { get; set; }

}
