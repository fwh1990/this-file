# node-rootdir

If you are a author of open source repository, you may want to support both commonjs and es-module for users since it's a confused period. It's hard to use `__dirname` and `import.meta.url` in one file specially for typescript project.

# Installation

```bash
yarn add node-rootdir
```

# Usage

```typescript
import { getRootDir } from 'node-rootdir';

const rootDir = getRootDir('YOUR_NODE_MODULES_PACKAGE_NAME', {
  source: './src',
  esmodule: './es',
  commonjs: './lib',
});
```

For development or testing, you will get `/xxx/yyy/zzz/YOUR_NODE_MODULES_PACKAGE_NAME/src`.
After publish to npm, you will get `/xxx/yyy/zzz/YOUR_NODE_MODULES_PACKAGE_NAME/{es|lib}`, es or lib, it depends on user.
