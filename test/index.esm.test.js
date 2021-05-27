import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { getFileName, getDirName } from './index.js';

it('match filename', () => {
  expect(getFileName()).toEqual(fileURLToPath(import.meta.url));
});

it('match dirname', () => {
  expect(getDirName()).toEqual(dirname(fileURLToPath(import.meta.url)));
});
