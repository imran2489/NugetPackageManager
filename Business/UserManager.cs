using NugetPackageManager.Models;
using NugetPackageManager.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NugetPackageManager.Business
{
    public class UserManager : IUserManager
  {
    private readonly IUserRepository _userRepository;
    private readonly IUserPackageRepository _userPackageRepository;

    public UserManager(IUserRepository userRepository, IUserPackageRepository userPackageRepository)
    {
      _userRepository = userRepository;
      _userPackageRepository = userPackageRepository;
    }

    public List<User> GetUsers()
    {
      return _userRepository.GetUsers();
    }

    public User CreateUser(User newUser)
    {
      newUser.GenderVisible = true;
      newUser.FunctionVisible = true;
      newUser.AddressVisible = true;
      newUser.LanguageVisible = true;
      newUser.EmailVisible = true;
      newUser.Education = "College";
      return _userRepository.Add(newUser);
    }

    public void DeleteById(int userId)
    {
      _userRepository.DeleteById(userId);

    }

    public void UpdateUserPackages(int userId, List<Package> packages)
    {
      List<int> currentUserPackages = _userRepository.GetCurrentUserPackages(userId);

      foreach (var package in packages)
      {
        if (package.Linked && !currentUserPackages.Any(f => f == package.Id))
        {
          // Link package with userId
          _userPackageRepository.Add(new UserPackage() { PackageId = package.Id, UserId = userId });
        }
        else if (!package.Linked && currentUserPackages.Any(f => f == package.Id))
        {
          // unlink userPackage
          _userPackageRepository.DeleteUserPackage(userId, package.Id);
        }
      }
    }
  }
}

