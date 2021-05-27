import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { getFileName, getDirName, getRequire } from './index.js';

it('match filename', () => {
  expect(getFileName()).toEqual(fileURLToPath(import.meta.url));
});

it('match dirname', () => {
  expect(getDirName()).toEqual(dirname(fileURLToPath(import.meta.url)));
});

it('require commonjs file', () => {
  const require = getRequire();
  expect(require('./fixture.cjs').x).toEqual(123);
});
