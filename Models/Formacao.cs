using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Aion.Models
{
    [Table("Formacao")]
    public class Formacao
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public int ProfessorId { get; set; }

        public int DisciplinaId { get; set; }

        [ForeignKey("ProfessorId")]
        public Professor Professor { get; set; }
    
        [ForeignKey("DisciplinaId")]
        public Disciplina Disciplina { get; set; }

    }
}