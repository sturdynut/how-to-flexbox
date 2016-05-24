import { HowToFlexboxPage } from './app.po';

describe('how-to-flexbox App', function() {
  let page: HowToFlexboxPage;

  beforeEach(() => {
    page = new HowToFlexboxPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('how-to-flexbox works!');
  });
});
