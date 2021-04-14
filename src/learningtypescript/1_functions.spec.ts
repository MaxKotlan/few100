import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

/* eslint-disable prefer-arrow/prefer-arrow-functions */
describe('functions', () => {
  describe('asic syntax and parameters', () => {
    it('parameters and return types', () => {

      function formatName(first: string, last: string, mi?: string): string{
        let fullname = `${last}, ${first}`;
        if (mi){
          fullname += ` ${mi}.`;
        }
        return fullname;
      }

      expect(formatName('Han', 'Solo')).toBe('Solo, Han');
      expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');
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

      const someAPIValue: any = {
        name: 'Bob Smith',
        customerId: '123',
        contactInfo: {
          phone: '123-456',
          email: 'bob@aol.com'
        }
      };
      if(someAPIValue?.contactInfo?.email){
        expect(someAPIValue.contactInfo.email).toBe('bob@aol.com');
      }
    });
  });
});
