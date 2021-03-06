﻿using NugetPackageManager.Models;
using NugetPackageManager.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NugetPackageManager.Business
{
  public class PackageManager : IPackageManager
  {
    private readonly IPackageRepository _packageRepository;

    public PackageManager(IPackageRepository packageRepository)
    {
      _packageRepository = packageRepository;
    }

    public List<Package> GetPackages()
    {
      return _packageRepository.GetPackages();
    }

    public Package CreatePackage(Package newPackage)
    {
     
      return _packageRepository.Add(newPackage);
    }

    public void DeleteById(int packageId)
    {
      _packageRepository.DeleteById(packageId);

    }

    public List<Package> GetUserPackagesByUserId(int userId)
    {
      return _packageRepository.GetUserPackagesByUserId(userId);
    }
  }
}
