using Altai.Core;
using NugetPackageManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NugetPackageManager.Repository
{
  public interface IPackageRepository : IAltaiRepository<Package>
  {
    List<Package> GetPackages();
  }
}
