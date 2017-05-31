using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;


namespace NugetPackageManager.Models
{
    public class Package
    {
        public Package()
        {
            UserPackages = new List<UserPackage>();
        }

        public Int32 Id { get; set; }


        [MaxLength(255)]
        public string Name { get; set; }

        public virtual ICollection<UserPackage> UserPackages { get; set; }

        [NotMapped]
        public bool Linked { get; set; }
  }
}