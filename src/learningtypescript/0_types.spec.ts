describe('data types in typescript', () => {
  xit('demo', () => {
    const a = 10; const b = 20;

    const answer = a + b;

    expect(answer).toBe(30);
  });

  describe('declaring variables', () => {

    it('implicit typing', () => {
      const x = 'Cat';

      const y = 12;

      expect(typeof x).toBe('string');
      expect(typeof y).toBe('number');
      console.log('Jeff Was Here');

    });

    it('explicit typing', () => {
      let x: number;
      let y: string;
      let z: number | string;


      // eslint-disable-next-line prefer-const
      x = 42;

      // eslint-disable-next-line prefer-const
      y = 'Dog';
      z = 42;
      z = 'Cat';


    });
    it('using const', () => {
      const x = 12;

      expect(x).toBe(12);

      // All const means is that you can't reassign the variable to something completely new.

      const friends = ['Billy', 'Sean', 'Amy'];

      friends[2] = 'Jessika';

      // friends = ['Jim', 'Lee'];

      const movie = {
        title: 'Dune',
        director: 'Lynch'
      };

      expect(movie.title).toBe('Dune');

      movie.director = 'Denis Villeneauve';

      // movie = {
      //   title: 'Mullholand Drive',
      //   director: 'Lynch'
      // }

    });


  });
  describe('literals in typescript', () => {

    describe('string literals', () => {
      it('can use double or single quotes', () => {
        const x = 'Bird';
        // eslint-disable-next-line @typescript-eslint/quotes
        const y = "Bird";

        expect(x).toEqual(y);

        //let author = 'Flannery O\'Connor';
        const author = 'Flannery O\'Connor';
        const quote = 'She said "Hello!".';
      });

    });
  });

});

