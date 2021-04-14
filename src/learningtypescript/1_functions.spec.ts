/* eslint-disable prefer-arrow/prefer-arrow-functions */
describe('functions', () => {

  describe('basic syntax and parameters', () => {

    it('parmeters and return types', () => {

      function formatName(first: string, last: string, mi?: string): string {

        const fullName = `${last}, ${first}`;
        // if (mi) {
        //   fullName += ` ${mi}.`;
        // }
        // return fullName;
        return mi ? fullName + ` ${mi}.` : fullName;
      }

      expect(formatName('Han', 'Solo')).toBe('Solo, Han');
      expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');


    });

    describe('complex return types', () => {

      it('the normal way', () => {

        interface NameInfo { fullName: string; numberOfLetters: number };
        function formatName(first: string, last: string, mi?: string): NameInfo {
          let fullName = `${last}, ${first}`;
          fullName = mi ? fullName + ` ${mi}.` : fullName;
          return {
            fullName,
            numberOfLetters: fullName.length
          };

        }

        // const result = formatName('Han', 'Solo');
        // expect(result.fullName).toBe('Solo, Han');
        // expect(result.numberOfLetters).toBe(9);
        // object destructuring
        const { fullName, numberOfLetters: len } = formatName('Han', 'Solo');
        expect(fullName).toBe('Solo, Han');
        expect(len).toBe(9);
      });

      it('using an array return type [tuple]', () => {

        function formatName(first: string, last: string, mi?: string): [string, number] {
          let fullName = `${last}, ${first}`;
          fullName = mi ? fullName + ` ${mi}.` : fullName;
          return [fullName, fullName.length];
        }

        const [n, l] = formatName('Han', 'Solo');
        expect(n).toBe('Solo, Han');
        expect(l).toBe(9);

        const numbers = [1, 2, 3, 4, 5,];

        const [, second, third, ...allTheRest] = numbers;
        expect(second).toBe(2);
        expect(third).toBe(3);
        expect(allTheRest).toEqual([4, 5]);


      });


    });


    it('javascript truth table', () => {
      expect(undefined).toBeFalsy();
      expect(null).toBeFalsy();
      expect(0).toBeFalsy();
      expect('').toBeFalsy();

      expect(-1).toBeTruthy();
      expect(1).toBeTruthy();
      expect(' ').toBeTruthy();
      expect('D').toBeTruthy();

      const someValueFromAnApi: any = {
        name: 'Bob Smith',
        customerId: '93939',
        // contactInfo: {
        //   phone: '555-1212',
        //   //email: 'bob@aol.com'
        // }
      };

      if (someValueFromAnApi.contactInfo) {
        if (someValueFromAnApi.contactInfo.email) {
          expect(someValueFromAnApi.contactInfo.email).toBe('bob@aol.com');
        }
      }

      // optional chaining, a.k.a. Elvis Operator
      if (someValueFromAnApi?.contactInfo?.email) {

      }
    });

  });
});

