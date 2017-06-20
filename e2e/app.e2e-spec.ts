import { TierListPage } from './app.po';

describe('tier-list App', () => {
  let page: TierListPage;

  beforeEach(() => {
    page = new TierListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
