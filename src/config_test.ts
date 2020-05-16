import { assertEquals, assert } from "https://deno.land/x/std@0.51.0/testing/asserts.ts"
import * as path from "https://deno.land/x/std@0.51.0/path/mod.ts";
import { Config } from "./config.ts"

const { test } = Deno

const _dirname = path.dirname(new URL(import.meta.url).pathname)
const testDir = (fixturesDir: string): string => path.join(_dirname, 'fixtures', fixturesDir)

test({
  name: "finds config",
  async fn(): Promise<void> {
    Config.load({
      searchDir: testDir('json'),
      file: 'file'
    })
  }
})
