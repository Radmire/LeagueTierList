import { LeagueTierListPage } from './app.po';

describe('league-tier-list App', () => {
  let page: LeagueTierListPage;

  beforeEach(() => {
    page = new LeagueTierListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
