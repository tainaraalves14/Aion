using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Aion.Models;

[Table("Disponibilidade")]
public class Disponibilidade
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Display(Name = "Dias da Semana")]
    [Required(ErrorMessage = "Informe o Dias disponíveis")]
    public DiaSemana DiaSemana { get; set; }

    [Display(Name = "Horário de início")]
    [Required(ErrorMessage = "Informe o Horário de início")]
    public string HoraInicio { get; set; }

    [Display(Name = "Horário Final")]
    [Required(ErrorMessage = "Informe o Horário final")]
    public string HoraFim { get; set; }

    public int ProfessorId { get; set; }

    public int AnoSemIngresso { get; set; }

    [ForeignKey("ProfessorId")]
    public Professor Professor { get; set; }

    [ForeignKey("AnoSemIngresso")]
    public PeriodoLetivo PeriodoLetivo { get; set; }
}
