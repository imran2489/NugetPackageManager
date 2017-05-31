using NugetPackageManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NugetPackageManager.Business
{
  public interface IPackageManager
  {
    List<Package> GetPackages();
    Package CreatePackage(Package newPackage);
    void DeleteById(int packageId);
    List<Package> GetUserPackagesByUserId(int userId);
  }
}
