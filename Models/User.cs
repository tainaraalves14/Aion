using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Aion.Models
{
    public class User : IdentityUser
    {
        [StringLength(60)]
        public string Nome { get; set; }

        public int UserNameLimitChange { get; set; } = 10;

        public byte[] FotoPerfil { get; set; }

        [DataType(DataType.Date)]
        public DateTime DataNasc { get; set; }
    }
}