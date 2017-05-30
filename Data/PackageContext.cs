using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NugetPackageManager.Models;

namespace NugetPackageManager.Data
{
  public class PackageContext : DbContext
  {
    

    public PackageContext(DbContextOptions<PackageContext> options) : base(options) { }
    public PackageContext() { }

   
    public DbSet<User> Users { get; set; }

    public DbSet<Package> Packages { get; set; }

    public DbSet<UserPackage> UserPackages { get; set; }
  }
}
