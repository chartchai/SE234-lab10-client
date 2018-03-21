import { Se234Lab10ClientPage } from './app.po';

describe('se234-lab10-client App', () => {
  let page: Se234Lab10ClientPage;

  beforeEach(() => {
    page = new Se234Lab10ClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
