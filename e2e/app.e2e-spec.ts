import { LandAppPage } from './app.po';

describe('land-app App', () => {
  let page: LandAppPage;

  beforeEach(() => {
    page = new LandAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
