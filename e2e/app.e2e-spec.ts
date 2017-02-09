import { WaiterprojectPage } from './app.po';

describe('waiterproject App', function() {
  let page: WaiterprojectPage;

  beforeEach(() => {
    page = new WaiterprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
