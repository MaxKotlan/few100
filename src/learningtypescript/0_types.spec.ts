describe('data types in typescript', () => {
    it('demo', () => {
        const a = 10; const b= 20;
        const answer = a + b;
        expect(answer).toBe(30);
    });

    describe('declaring variables', () => {
        it('implicit typing', () => {
            let x: string | number;
            // eslint-disable-next-line prefer-const
            x = 'cat';

            const y = 12;
            expect(typeof x).toBe('string');
            expect(typeof y).toBe('number');
        });

        it('explicity typing', () => {
            let x: number;
            let y: string;
            // eslint-disable-next-line prefer-const
            x = 42;
            // eslint-disable-next-line prefer-const
            y = 'Dog';

            let z: number | string;
            z = 42;
            z = 'Cat';

        });

            it('why var is bad', () => {
                {
                  var x = 10;
                }
                expect(x).toEqual(10);
            });
    });
    describe('literals in typescript', () => {
      describe('string literals', () => {
          it('can use double or single quotes', () => {
              // eslint-disable-next-line @typescript-eslint/quotes
              const x = "Bird";
              const y = 'Bird';
              const z = `Bird`;
              expect(x).toEqual(y);
              expect(x).toEqual(z);
          });
          it('using const', () => {
              const x = 12;
              expect(x).toBe(12);
              const friends = ['billy', 'sean', 'amy'];
              friends[2] = 'Jessika';
              // friends = ['jim', 'lee'];
              const movie = {
                title: 'Dune',
                director: 'Lynch'
              };
              expect(movie.title).toBe('Dune');
          });
          it('back ticks', () => {
            const drink = `Beer`;
            expect(drink).toEqual('Beer');

            const myLifeStory = `
              Chapter 1.
              It was a dark and stormy night.
            `;

            const details = `
            <div>Name Here</div>
            <p>Other Stuff</p>`;

            const name = 'Amy';
            const age = 42;
            // const message = 'My friend ' + name + ' is ' + age + ' years old';
            const message = `My friend ${name} is ${age} years old`;
            expect(message).toBe('My friend Amy is 42 years old');
          });

    });

    describe('number literals', () => {
      it('various ways to represent a number', () => {


        const bigNumber = 123_888_222_123;
        const favoriteColor = 0xFF;
        const someBits = 0b10101010111;
        const perms = 0o333;

        const age = 51;
        const ageAsString = '51.2345';
        const ageAsNumber = parseInt(ageAsString, 10);
        expect(ageAsNumber).toBe(51);

      });
    });

    describe('booleans', () => {
          it('has named booleans', () => {
              let fulltime: boolean;
              fulltime = true;
              expect(fulltime).toBeTrue();
              fulltime = false;
              expect(fulltime).toBeFalse();
          });

    });

        it('literal unions', () => {
          type AccountType = 'gold' | 'platinum';
          const myAccount: AccountType = 'gold';
        });
        describe('object literals', () => {
          interface Book {
            title: string;
            author: string;
            numberOfPages: number;
            genre?: 'fiction' | 'non-fiction' | 'fantasy' | 'comic';
          }
          const book: Book = {
            title: 'Walden',
            author: 'Hank Thoreau',
            numberOfPages: 212,
            genre: 'non-fiction'
          };
          const book2: Book = {
            title: 'Walden',
            author: 'Hank Thoreau',
            numberOfPages: 212
          };
          expect(book.title).toBe('Walden');
          // eslint-disable-next-line @typescript-eslint/dot-notation
          expect(book['author']) .toBe('Hank Thoreau');
          book.author = 'Henry Thoreau';
        });
        describe('Array Literals', () => {
              it('will infer data types', () => {
                  const favoriteNumbers = [3,10,20,108];

                  const friends = ['Billy', 'Amy', 'Joe'];
                  friends[0] = 'three';

                  expect(friends[1]).toBe('Amy');
                  expect(favoriteNumbers[0]).toBe(3);

                  expect(favoriteNumbers).toEqual([3,10,20,108]);

                  // const friend = { name: 'Bill', age: 42 };
                  // const friend2 = { name: 'Bill', age: 42 };
                  // expect(friend).toEqual(friend2);
                  const favoriteColor: (string | number)[] = ['Blue', 0xFF, 'Green'];
                  const favoriteColures: Array<string | number> = ['Yellow', 0x00];

              });

        });
    });
});
