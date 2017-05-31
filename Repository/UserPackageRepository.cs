using Altai.Core;
using NugetPackageManager.Data;
using NugetPackageManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NugetPackageManager.Repository
{
  public class UserPackageRepository : AltaiRepository<UserPackage, PackageContext>, IUserPackageRepository
  {

    public UserPackageRepository(PackageContext context) : base(context) { }

    public  void DeleteUserPackage(int userId, int packageId)
    {
      var UserPackage = Context.UserPackages.FirstOrDefault(f => f.UserId == userId && f.PackageId == packageId);

    
      Context.UserPackages.Remove(UserPackage);

      
      Context.SaveChanges();
    }
  }
}
