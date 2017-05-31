using Altai.Core;
using NugetPackageManager.Data;
using NugetPackageManager.Models;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace NugetPackageManager.Repository
{
    public class UserRepository : AltaiRepository<User, PackageContext>, IUserRepository
  {

    public UserRepository(PackageContext context) : base(context) { }

    public List<User> GetUsers()
    {
      return Context.Users.ToList();
    }
    public override void DeleteById(int UserId)
    {
      var User = Context.Users.FirstOrDefault(f => f.Id == UserId);

      // find the affected userUsers
      var affectedUserPackages = Context.UserPackages.Where(r => r.UserId == UserId).ToList();

      Context.UserPackages.RemoveRange(affectedUserPackages);

      Context.Users.Remove(User);
      Context.SaveChanges();
    }

    public List<int> GetCurrentUserPackages(int userId)
    {
      return Context.UserPackages.Where(f => f.UserId == userId).Select(g => g.PackageId).ToList();
    }

    }
}
