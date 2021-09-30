import { shortenString } from './string';


describe('Can accurately shorten heading', () => {
  test("Handle long heading", () => {
    expect(shortenString('A 3-week-long intimate workshop-style course with the person who coined the term “Passion Economy”', 40)).toBe('A 3-week-long intimate workshop-style co...');
  });  
  
  test("Does not affect shorter heading", () => {
    expect(shortenString('A 3-week-long intimate workshop', 40)).toBe('A 3-week-long intimate workshop');
  });
})

