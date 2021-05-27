# node-rootdir

If you are a author of open source repository, you may want to support both commonjs and es-module for users since it's a confused period. It's hard to use `__dirname` and `import.meta.url` in one file specially for typescript project.

# Installation

```bash
yarn add node-rootdir
```

# Usage

```typescript
import { getDirName, getFileName } from 'node-rootdir';

const __filename = getFileName();
const __dirname = getDirName();
```
