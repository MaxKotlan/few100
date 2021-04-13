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

    it('why is var so bad anyhow', () => {

      const age = 22;

      if (age > 21) {
        // eslint-disable-next-line no-var
        var message = 'Old Enough';
      }


      expect(message).toBe('Old Enough');
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
        // eslint-disable-next-line @typescript-eslint/quotes
        const quote = "She said \"Hello!\".";
      });

      it('back ticks', () => {
        const drink = `Beer`;
        expect(drink).toEqual('Beer');

        const myLifeStory = `
        Chapter 1.

        It was a dark and stormy night.
        So I got a beer.
        `;

        const details = `
        <div>Name Here</div>
        <p>OTher stuff </div>`;

        const name = 'Amy';
        const age = 42;

        //const message = 'My friend ' + name + ' is ' + age + ' years old';
        const message = `My friend ${name} is ${age} years old`;
        expect(message).toBe('My friend Amy is 42 years old');

      });

    });


    describe('number literals', () => {
      it('there are various ways to represent a number', () => {


        const bigNumber = 123_888_222_123;
        const favoriteColor = 0xff; // base 16 hexadecimal
        const someBits = 0b1010101;
        const perms = 0o333; // Octal.

        const ageAsString = '051.35';

        const ageAsNumber = parseInt(ageAsString, 10);
        expect(ageAsNumber).toBe(51);

      });

    });

  });

  describe('booleans', () => {

    it('has named booleans', () => {
      let fullTime: boolean;

      fullTime = true;

      expect(fullTime).toBe(true);

      fullTime = false;
      expect(fullTime).toBe(false);

      // fullTime = 0;  // nope. none of this nonsense.

    });
  });
  it('literal unions', () => {
    type AccountType = 'gold' | 'platinum' | 'standard';

    const myAccount: AccountType = 'standard';

    expect(myAccount).toBe('standard');
  });
});

