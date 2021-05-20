import { existsSync, statSync } from 'fs';
import { dirname, resolve, relative } from 'path';

const userProjectRoot = process.cwd();

// @ts-ignore
const searchParent = (current: string, pkgName: string) => {
  const parent = dirname(current);

  if (!parent || parent === current) {
    throw new Error('Unknown root dir for package: ' + pkgName);
  }

  if (relative(userProjectRoot, parent) === '') {
    return parent;
  }

  const target = resolve(parent, pkgName);

  if (existsSync(target) && statSync(target).isDirectory()) {
    return target;
  }

  return searchParent(parent, pkgName);
};

export interface EntryDir {
  esmodule: string;
  commonjs: string;
  source: string;
}

export default (currentRoot: string, isESM: boolean) => {
  return (pkgName: string, entryDir: EntryDir) => {
    const dir = searchParent(currentRoot, pkgName);
    const sourceDir = resolve(dir, entryDir.source);
    const isSource = existsSync(sourceDir) && statSync(sourceDir).isDirectory();

    if (isSource) {
      return sourceDir;
    }

    return resolve(dir, isESM ? entryDir.esmodule : entryDir.commonjs);
  };
};
