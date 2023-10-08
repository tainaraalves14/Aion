using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Aion.Models;

[Table("Professor")]
public class Professor
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required(ErrorMessage = "Informe o Nome")]
    [StringLength(100, ErrorMessage = "O Nome deve possuir no máximo 100 caracteres")]
    public string Nome { get; set; }

    [Display(Name = "E-mail")]
    [Required(ErrorMessage = "Informe o E-mail")]
    [StringLength(50, ErrorMessage = "O email deve possuir no máximo 50 caracteres")]
    public string Email { get; set; }

    [Required(ErrorMessage = "Informe o Telefone")]
    [StringLength(15, ErrorMessage = "O Telefone deve possuir no máximo 15 caracteres")]
    public string Telefone { get; set; }

    [Display(Name = "Usuário")]
    [Required(ErrorMessage = "Informe seu nome de Usuário")]
    [StringLength(30, ErrorMessage = "O nome de Usuário deve possuir no máximo 30 caracteres")]
    public string Usuario { get; set; }

    [Required(ErrorMessage = "Informe sua Senha")]
    [StringLength(100, ErrorMessage = "A Senha deve possuir no máximo 100 caracteres")]
    public string Senha { get; set; }
    
    public string UserId { get; set; }

    [ForeignKey("UserId")]
    public User User { get; set; }

    public List<Formacao> Formacao { get; set; }
}
