import { Angular2FrontEndPage } from './app.po';

describe('angular2-front-end App', () => {
  let page: Angular2FrontEndPage;

  beforeEach(() => {
    page = new Angular2FrontEndPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
