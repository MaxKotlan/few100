// import * as fromMathUtils from 'src/app/utils/math';
import { isEven, makeUpper } from '../app/utils';


describe('array methods', () => {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  describe('visiting each member of an array', () => {
    it('has forEach', () => {

      let total = 0;
      numbers.forEach(n => total += n);

      expect(total).toBe(45);

    });

  });

  describe('methods that produce a new array', () => {

    it('filtering a list', () => {
      // LINQ where
      const evens = numbers.filter(isEven);

      expect(evens).toEqual([2, 4, 6, 8]);
      expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('map - when you want to get from point a to point b', () => {
      // LINQ select


      const doubled = numbers.map(n => n + n);
      expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);

      const asStrings = numbers.map(n => n.toString());

      //expect(asStrings).toEqual(['2', '4', '6']);

      const doubledEvens = numbers.filter(n => n % 2 === 0).map(n => n * 2);
      //expect(doubledEvens).toEqual([2, 4, 6, 7, 8]);
    });

  });
  describe('methods that produce a single (scalar) value', () => {

    it('checking membership of an array', () => {
      // c# LiNQ All
      const isEven = (n: number) => n % 2 === 0;

      const allEven = numbers.every(isEven);
      expect(allEven).toBeFalse();

      // LINQ any
      const anyEven = numbers.some(n => n % 2 === 0);
      expect(anyEven).toBeTrue();


    });

    it('boiling down an array to a single value', () => {

      const total = numbers.reduce((s, n) => s + n);
      expect(total).toBe(45);

      const bigTotal = numbers.reduce((state, next) => state + next, 100);
      expect(bigTotal).toEqual(145);
    });

  });

});
