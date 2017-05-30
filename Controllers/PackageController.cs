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


    [Route("api/package/list"), HttpGet]
    public List<Package> ListPackages()
    {      
      return _packageManager.GetPackages();
    }
  }
}
