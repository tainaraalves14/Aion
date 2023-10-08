using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Aion.Models;

[Table("Grade")]
public class Grade
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    public int CursoId { get; set; }

    [Required(ErrorMessage = "Informe o Mês e Ano")]
    public DateTime Data { get; set; }

    [StringLength(150, ErrorMessage = "O número só pode conter até 150 caracteres")]
    public string Numero { get; set; }

    [ForeignKey("CursoId")]
    public Curso Curso { get; set; }

    public ICollection<GradeDisciplinas> GradeDisciplinas { get; set; }
}
