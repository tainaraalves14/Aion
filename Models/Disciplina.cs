using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Aion.Models;

[Table("disciplina")]
public class Disciplina
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required(ErrorMessage = "Informe o Nome da Disciplina")]
    [StringLength(50, ErrorMessage = "O Nome da Disciplina deve possuir no máximo 50 caracteres")]
    public string Nome { get; set; }

    public ICollection<GradeDisciplinas> GradeDisciplinas { get; set; }
}
