using Altai.Core;
using Microsoft.AspNetCore.Mvc;
using NugetPackageManager.Business;
using NugetPackageManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NugetPackageManager.Controllers
{
    public class UserController : AltaiController
  {
    private readonly IUserManager _userManager;

    public UserController(IUserManager userManager)
    {
      _userManager = userManager;
    }


    [Route("api/user"), HttpGet]
    public List<User> ListUsers()
    {
      return _userManager.GetUsers();
    }

    [Route("api/user"), HttpPost]
    public User CreateConditions([FromBody]User newUser)
    {
      return _userManager.CreateUser(newUser);
    }

    [Route("api/user/{userId}"), HttpDelete]
    public void Delete(int userId)
    {
      _userManager.DeleteById(userId);
    }

    [Route("api/user"), HttpPut]
    public void UpdateUserPackages(int userId, [FromBody]List<Package> packages)
    {
      _userManager.UpdateUserPackages(userId, packages);
    }
  }
}
