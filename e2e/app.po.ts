export class HowToFlexboxPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('how-to-flexbox-app h1')).getText();
  }
}
