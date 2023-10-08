using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Aion.Models;

[Table("Curso")]
public class Curso
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required(ErrorMessage = "Informe o Nome do Curso")]
    [StringLength(50, ErrorMessage = "O Nome do Curso deve possuir no máximo 50 caracteres")]
    public string Nome { get; set; }

    // Sem/Anual
    [Required(ErrorMessage = "Informe o Tipo do Curso")]
    public string Tipo { get; set; }

    [Required(ErrorMessage = "Informe a Quantidade de Semestres no Curso")]
    public int QtdeSem { get; set; }
}
