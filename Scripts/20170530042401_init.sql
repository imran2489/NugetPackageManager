IF OBJECT_ID(N'__EFMigrationsHistory') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

CREATE TABLE [Packages] (
    [Id] int NOT NULL IDENTITY,
    [Name] nvarchar(255),
    CONSTRAINT [PK_Packages] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [Users] (
    [Id] int NOT NULL IDENTITY,
    [AddressVisible] bit NOT NULL,
    [CurrentFunction] nvarchar(255),
    [DateOfBirth] datetime2,
    [DateOfBirthVisible] bit,
    [Education] nvarchar(255),
    [EducationVisible] bit,
    [EmailVisible] bit,
    [FirstName] nvarchar(255),
    [FunctionVisible] bit,
    [GenderVisible] bit,
    [HasAcceptedDisclaimer] bit NOT NULL,
    [LanguageVisible] bit,
    [LastName] nvarchar(255),
    [NumberComments] int NOT NULL,
    [NumberUploads] int NOT NULL,
    [Password] nvarchar(255),
    [Photo] varbinary(max),
    [ResetPasswordGUID] uniqueidentifier NOT NULL,
    [StreetAndNumber] nvarchar(255),
    [UserName] nvarchar(255),
    CONSTRAINT [PK_Users] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [UserPackages] (
    [Id] int NOT NULL IDENTITY,
    [PackageId] int NOT NULL,
    [UserId] int NOT NULL,
    CONSTRAINT [PK_UserPackages] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_UserPackages_Packages_PackageId] FOREIGN KEY ([PackageId]) RE
FERENCES [Packages] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_UserPackages_Users_UserId] FOREIGN KEY ([UserId]) REFERENCES
[Users] ([Id]) ON DELETE CASCADE
);

GO

CREATE INDEX [IX_UserPackages_PackageId] ON [UserPackages] ([PackageId]);

GO

CREATE INDEX [IX_UserPackages_UserId] ON [UserPackages] ([UserId]);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20170530042401_init', N'1.1.1');

GO