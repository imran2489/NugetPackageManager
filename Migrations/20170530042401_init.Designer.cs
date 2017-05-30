using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using NugetPackageManager.Data;

namespace NugetPackageManager.Migrations
{
    [DbContext(typeof(PackageContext))]
    [Migration("20170530042401_init")]
    partial class init
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("NugetPackageManager.Models.Package", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name")
                        .HasMaxLength(255);

                    b.HasKey("Id");

                    b.ToTable("Packages");
                });

            modelBuilder.Entity("NugetPackageManager.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("AddressVisible");

                    b.Property<string>("CurrentFunction")
                        .HasMaxLength(255);

                    b.Property<DateTime?>("DateOfBirth");

                    b.Property<bool?>("DateOfBirthVisible");

                    b.Property<string>("Education")
                        .HasMaxLength(255);

                    b.Property<bool?>("EducationVisible");

                    b.Property<bool?>("EmailVisible");

                    b.Property<string>("FirstName")
                        .HasMaxLength(255);

                    b.Property<bool?>("FunctionVisible");

                    b.Property<bool?>("GenderVisible");

                    b.Property<bool>("HasAcceptedDisclaimer");

                    b.Property<bool?>("LanguageVisible");

                    b.Property<string>("LastName")
                        .HasMaxLength(255);

                    b.Property<int>("NumberComments");

                    b.Property<int>("NumberUploads");

                    b.Property<string>("Password")
                        .HasMaxLength(255);

                    b.Property<byte[]>("Photo");

                    b.Property<Guid>("ResetPasswordGUID");

                    b.Property<string>("StreetAndNumber")
                        .HasMaxLength(255);

                    b.Property<string>("UserName")
                        .HasMaxLength(255);

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("NugetPackageManager.Models.UserPackage", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("PackageId");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("PackageId");

                    b.HasIndex("UserId");

                    b.ToTable("UserPackages");
                });

            modelBuilder.Entity("NugetPackageManager.Models.UserPackage", b =>
                {
                    b.HasOne("NugetPackageManager.Models.Package", "Package")
                        .WithMany("UserPackages")
                        .HasForeignKey("PackageId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("NugetPackageManager.Models.User", "User")
                        .WithMany("UserPackages")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
