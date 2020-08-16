import { assertEquals } from "https://deno.land/x/std@0.63.0/testing/asserts.ts";
import * as path from "https://deno.land/x/std@0.63.0/path/mod.ts";
import { Config } from "./config.ts";

const { test } = Deno;

let _dirname = path.dirname(new URL(import.meta.url).pathname);
if (Deno.build.os == "windows") _dirname = _dirname.slice(1);
const testDir = (fixturesDir: string): string =>
  path.join(_dirname, "fixtures", fixturesDir);

const moduleFileEndings = ["js", "ts", "js-config", "ts-config"];
for (const moduleFileEnding of moduleFileEndings) {
  test({
    name: `module find ${moduleFileEnding} config`,
    async fn(): Promise<void> {
      const config = await Config.load({
        searchDir: testDir(moduleFileEnding),
        file: "file",
      });

      assertEquals(config, {
        name: moduleFileEnding,
      });
    },
  });
}

const dotFiles: string[] = [
  "toml",
  "yaml",
  "yml",
  "json",
  "toml-config",
  "yaml-config",
  "yml-config",
  "json-config",
];
for (const dotFile of dotFiles) {
  test({
    name: `file find ${dotFile} config`,
    async fn(): Promise<void> {
      const config = await Config.load({
        searchDir: testDir(dotFile),
        file: "file",
      });

      assertEquals(config, {
        name: dotFile,
      });
    },
  });
}
