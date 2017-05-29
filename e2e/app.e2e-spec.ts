import { NugetPackageManagerPage } from './app.po';

describe('nuget-package-manager App', () => {
  let page: NugetPackageManagerPage;

  beforeEach(() => {
    page = new NugetPackageManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
