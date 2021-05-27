import { platform } from 'os';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const reg = /([^\(\s]+):\d+:\d+\)?$/;

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

const parseErrorToFileName = (e: Error) => {
  const initiator: string = e.stack!.split('\n')[2]!;
  let path = initiator.match(reg)![1]!;
  if (~path.indexOf('file')) {
    path = fileURLToPath(path);
  }

  if (path[0] === '/' && platform() === 'win32') {
    path = path.slice(1);
  }

  return path;
};
