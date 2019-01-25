import { Quotes } from './quotes';

describe('Quotes', () => {
  it('should create an instance', () => {
    expect(new Quotes(1,'ff','gg',2,3)).toBeTruthy();
  });
});
