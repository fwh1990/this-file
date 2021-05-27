const { getFileName, getDirName, getRequire } = require('./index');

it('match filename', () => {
  expect(getFileName()).toEqual(__filename);
});

it('match dirname', () => {
  expect(getDirName()).toEqual(__dirname);
});

it('require commonjs file', () => {
  const require = getRequire();
  expect(require('./fixture.cjs').x).toEqual(123);
});
