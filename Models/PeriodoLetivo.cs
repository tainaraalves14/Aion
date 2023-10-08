using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Aion.Models;

[Table("PeriodoLetivo")]
public class PeriodoLetivo
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required(ErrorMessage = "Informe o Ano")]
    public int Ano { get; set; }
    
    // valor 1 ou 2
    [Required(ErrorMessage = "Informe o Semestre do Ano")]
    public int Semestre { get; set; }

}
