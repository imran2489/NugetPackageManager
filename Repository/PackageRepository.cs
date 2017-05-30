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
  }
}
