const { getFileName, getDirName } = require('./index');

it('match filename', () => {
  expect(getFileName()).toEqual(__filename);
});

it('match dirname', () => {
  expect(getDirName()).toEqual(__dirname);
});
