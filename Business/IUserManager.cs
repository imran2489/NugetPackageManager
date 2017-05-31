using NugetPackageManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NugetPackageManager.Business
{
    public interface IUserManager
  {
    List<User> GetUsers();
    User CreateUser(User newUser);
    void DeleteById(int userId);
    void UpdateUserPackages(int userId, List<Package> packages);
  }
}
