using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Aion.Models;

[Table("Turma")]
public class Turma
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required(ErrorMessage = "Informe o Nome da Turma")]
    [StringLength(20, ErrorMessage = "O Nome da Turma deve possuir no máximo até 20 caracteres")]
    public string Nome { get; set; }

    [Display(Name = "Ano e Semestre de Ingresso")]
    public int AnoSemIngresso { get; set; }
    
    public int GradeId { get; set; }

    [ForeignKey("AnoSemIngresso")]
    public PeriodoLetivo PeriodoLetivo { get; set; }
    
    [ForeignKey("GradeId")]
    public Grade Grade { get; set; }
}
