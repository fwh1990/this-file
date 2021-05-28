import { platform } from 'os';
import { dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { createRequire } from 'module';

export const getDirName = () => {
  try {
    throw new Error();
  } catch (e) {
    return dirname(parseErrorToFileName(e));
  }
};

export const getFileName = () => {
  try {
    throw new Error();
  } catch (e) {
    return parseErrorToFileName(e);
  }
};

export const getRequire = () => {
  try {
    throw new Error();
  } catch (e) {
    return createRequire(pathToFileURL(parseErrorToFileName(e)));
  }
};

const reg = /([^\(\s]+):\d+:\d+\)?$/;

const parseErrorToFileName = (e: Error) => {
  const initiator: string = e.stack!.split('\n')[2]!;

  let path = initiator.match(reg)![1]!;
  if (path.indexOf('file://') === 0) {
    path = fileURLToPath(path);
  }

  if (path[0] === '/' && platform() === 'win32') {
    path = path.slice(1);
  }

  return path;
};
