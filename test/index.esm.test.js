import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createContext } from './index.js';

const context = createContext();

it('match filename', () => {
  expect(context.filename).toEqual(fileURLToPath(import.meta.url));
});

it('match dirname', () => {
  expect(context.dirname).toEqual(dirname(fileURLToPath(import.meta.url)));
});

it('require commonjs file', () => {
  expect(context.require('./fixture.cjs').x).toEqual(123);
});
