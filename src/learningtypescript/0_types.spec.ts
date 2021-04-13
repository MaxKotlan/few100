describe('data types in typescript', () => {
  xit('demo', () => {
    const a = 10, b = 20;

    const answer = a + b;

    expect(answer).toBe(30);
  });

  describe('declaring variables', () => {

    it('implicit typing', () => {
      let x = 'Cat';

      let y = 12;

      expect(typeof x).toBe('string');
      expect(typeof y).toBe('number');
      console.log('Jeff Was Here');

    });

    it('explicit typing', () => {
      let x: number;
      let y: string;
      let z: number | string;

      x = 42;
      y = 'Dog';
      z = 42;
      z = 'Cat';


    });
  });
  describe('literals in typescript', () => {

    describe('string literals', () => {
      it('can use double or single quotes', () => {
        let x = 'Bird';
        let y = "Bird";

        expect(x).toEqual(y);

        //let author = 'Flannery O\'Connor';
        let author = "Flannery O'Connor";
        let quote = 'She said "Hello!".';
      });

    });
  });

});

