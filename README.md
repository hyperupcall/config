# config

![github ci](https://github.com/hyperupcall/config/workflows/Test%20CI/badge.svg?branch=master)
![github badge](https://img.shields.io/github/license/hyperupcall/config)
![gitHub issues](https://img.shields.io/github/issues/hyperupcall/config)

A deno module that helps you load configuration.

> ⚠️ _Warning_ The examples in this README pull from `main`. you may want to "pin"
> to a particular version by using git tags in the URL to direct you at a particular
> version. For example, to use version 1.2.1 of `hyperupcall/config`, you would want
> to import `https://deno.land/x/config@v1.2.1/mod.ts`.

## Usage

```ts
import { Config } from "https://deno.land/x/config/mod.ts"

// Example
const config = await Config.load({
  file: 'fileName'
})
if (!config) {
  console.log("config is 'undefined' when no config files were found")
}

// Example including defaults
await Config.load({
  file: 'fileName'
  searchDir: Deno.cwd()
})
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
