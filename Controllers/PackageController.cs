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
 
  public class PackageController : AltaiController
  {
    private readonly IPackageManager _packageManager;

    public PackageController(IPackageManager packageManager)
    {
      _packageManager = packageManager;
    }


    [Route("api/package"), HttpGet]
    public List<Package> ListPackages()
    {      
      return _packageManager.GetPackages();
    }

    [Route("api/package"), HttpPost]
    public Package CreateConditions([FromBody]Package newPackage)
    {
      return _packageManager.CreatePackage(newPackage);
    }

    [Route("api/package/{packageId}"), HttpDelete]
    public void Delete(int packageId)
    {
      _packageManager.DeleteById(packageId);
    }

    [Route("api/package/{userId}"), HttpGet]
    public List<Package> GetUserPackagesByUserId(int userId)
    {
      var packages = _packageManager.GetUserPackagesByUserId(userId);
      return packages;
    }
  }
}
