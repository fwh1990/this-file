const { createContext } = require('./index');

const context = createContext();

it('match filename', () => {
  expect(context.__filename).toEqual(__filename);
});

it('match dirname', () => {
  expect(context.__dirname).toEqual(__dirname);
});

it('require commonjs file', () => {
  expect(context.require('./fixture.cjs').x).toEqual(123);
});
