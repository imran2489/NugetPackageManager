using System;
using System.Collections.Generic;
using System.Linq;


namespace NugetPackageManager.Models
{
    public class UserPackage
    {
        public Int32 Id { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }

        public int PackageId { get; set; }
        public Package Package { get; set; }
    }
}