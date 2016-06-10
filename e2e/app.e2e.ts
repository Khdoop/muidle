import { MuidlePage } from './app.po';

describe('muidle App', function() {
  let page: MuidlePage;

  beforeEach(() => {
    page = new MuidlePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('muidle works!');
  });
});
