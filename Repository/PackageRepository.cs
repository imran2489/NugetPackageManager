using Altai.Core;
using NugetPackageManager.Data;
using NugetPackageManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NugetPackageManager.Repository
{
  public class PackageRepository : AltaiRepository<Package, PackageContext>, IPackageRepository
  {

    public PackageRepository(PackageContext context) : base(context) { }

    public List<Package> GetPackages()
    {
      return Context.Packages.ToList();
    }
    public override void DeleteById(int packageId)
    {
      var package = Context.Packages.FirstOrDefault(f => f.Id == packageId);

      // find the affected userPackages
      var affectedUserPackages = Context.UserPackages.Where(r => r.PackageId == packageId).ToList();

      Context.UserPackages.RemoveRange(affectedUserPackages);

      Context.Packages.Remove(package);
      Context.SaveChanges();
    }

    public List<Package> GetUserPackagesByUserId(int userId)
    {
      var UserPackages = Context.UserPackages.Where(f => f.UserId == userId).ToList();
      var allPackages = Context.Packages.ToList();

      foreach (var package in allPackages)
      {
        if (UserPackages.Any(t => t.PackageId == package.Id))
          package.Linked = true;

        package.UserPackages = null;
      }

      return allPackages;
    }
  }
}
