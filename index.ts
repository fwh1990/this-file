import { dirname } from 'path';
import { fileURLToPath } from 'url';
import * as search from './search.js';

const currentRoot = dirname(fileURLToPath(import.meta.url));

export const getRootDir = search.search(currentRoot, true);
