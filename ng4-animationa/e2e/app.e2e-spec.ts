import { Ng4AnimationaPage } from './app.po';

describe('ng4-animationa App', () => {
  let page: Ng4AnimationaPage;

  beforeEach(() => {
    page = new Ng4AnimationaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
