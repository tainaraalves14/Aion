using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Aion.Models;

[Table("GradeDisciplinas")]
public class GradeDisciplinas
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    public int GradeId { get; set; }

    public int DisciplinaId { get; set; }

    [Required(ErrorMessage = "Informe o Semestre do Ano")]
    public int Semestre { get; set; }

    [Required(ErrorMessage = "Informe se tem divisão")]
    public bool TemDivisao { get; set; }

    [Display(Name = "Carga Horária")]
    [Required(ErrorMessage = "Informe a Carga Horária")]
    public int CargaHoraria { get; set; }

    [ForeignKey("GradeId")]
    public Grade Grade { get; set; }

    [ForeignKey("DisciplinaId")]
    public Disciplina Disciplina { get; set; }
}
