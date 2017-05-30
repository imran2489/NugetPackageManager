using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;


namespace NugetPackageManager.Models
{
    public class User
    {
        public User()
        {
            UserPackages = new List<UserPackage>();
        }

        public int Id { get; set; }

        [MaxLength(255)]
        public string UserName { get; set; }
        [MaxLength(255)]
        public string Password { get; set; }

        [MaxLength(255)]
        public string Education { get; set; }

        public bool? EducationVisible { get; set; }

        public bool? LanguageVisible { get; set; }

        public bool? EmailVisible { get; set; }

        [Required]
        public Guid ResetPasswordGUID { get; set; }

        [MaxLength(255)]
        public string FirstName { get; set; }

        [MaxLength(255)]
        public string LastName { get; set; }

        public byte[] Photo { get; set; }

        public bool? GenderVisible { get; set; }

        public DateTime? DateOfBirth { get; set; }

        public bool? DateOfBirthVisible { get; set; }

        public bool HasAcceptedDisclaimer { get; set; }

        [MaxLength(255)]
        public string CurrentFunction { get; set; }

        public bool? FunctionVisible { get; set; }

        [MaxLength(255)]
        public string StreetAndNumber { get; set; }

        public bool AddressVisible { get; set; }

        public int NumberUploads { get; set; }

        public int NumberComments { get; set; }


        public virtual ICollection<UserPackage> UserPackages { get; set; }
    }
}