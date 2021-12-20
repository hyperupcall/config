# config

![github ci](https://github.com/eankeen/config/workflows/Test%20CI/badge.svg?branch=master) ![github badge](https://img.shields.io/github/license/eankeen/config) ![gitHub issues](https://img.shields.io/github/issues/eankeen/config)

A deno module that helps you load configuration.

## Usage

```ts
// IMPORTANT: recommend pinning to specific version (see below)
import { Config } from "https://raw.githubusercontent.com/eankeen/config/master/mod.ts"

const config = await Config.load({
  file: 'fileName'
})
if (!config) {
  console.log("config is 'undefined' when no config files were found")
}

// example including defaults
await Config.load({
  file: 'fileName'
  searchDir: Deno.cwd()
})
```

### Versions

You can pin to a specific version of Deno / std that are compatable. here is a version list:

```sh
# eankeen/config v1.1
# correlates with deno 1.3.0 and std v0.63.0
https://raw.githubusercontent.com/eankeen/config/v1.1/mod.ts

# eankeen/config 1.0.3
# correlates with deno 1.0.3 and std v0.53.0
https://raw.githubusercontent.com/eankeen/config/v1.0.3/mod.ts
```

### Options

- `file` the name of your file
- `searchDir` the directory to start searching. this is the directory that might include a `.config` file

### Priority

The ordering is as follows. Modules are loaded from `.config` folder first, then the parent to that folder. Rc files in `.config` never start with a dot.

- `.config/file.config.ts`
- `.config/file.config.js`
- `.config/file.toml`
- `.config/file.json`
- `.config/file.yaml`
- `.config/file.yml`
- `file.config.ts`
- `file.config.js`
- `.file.toml`
- `.file.json`
- `.file.yaml`
- `.file.yml`
