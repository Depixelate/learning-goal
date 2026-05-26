import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));

async function readJson(path) {
  const content = await readFile(join(root, path), "utf8");
  return JSON.parse(content);
}

const marketplace = await readJson(".agents/plugins/marketplace.json");
assert.equal(marketplace.name, "learning-goal");
assert.equal(marketplace.interface.displayName, "Personal Learning Goal");
assert.equal(marketplace.plugins.length, 1);
assert.deepEqual(marketplace.plugins[0].source, {
  source: "local",
  path: "./learning-goal",
});
assert.equal(marketplace.plugins[0].policy.installation, "INSTALLED_BY_DEFAULT");
assert.equal(marketplace.plugins[0].policy.authentication, "ON_INSTALL");
assert.equal(marketplace.plugins[0].category, "Education");

const plugin = await readJson("learning-goal/.codex-plugin/plugin.json");
assert.equal(plugin.name, "learning-goal");
assert.equal(plugin.version, "1.0.0");
assert.equal(plugin.license, "CC-BY-4.0");
assert.equal(plugin.skills, "./skills/");
assert.equal(plugin.repository, "https://github.com/Depixelate/learning-goal");
assert.equal(plugin.author.email, "sukesshvelusamy@gmail.com");
assert.equal(plugin.interface.displayName, "Learning Goal");
assert.equal(plugin.interface.category, "Education");
assert.ok(plugin.interface.capabilities.includes("Interactive"));
assert.ok(plugin.interface.capabilities.includes("Write"));
assert.equal(plugin.interface.websiteURL, "https://github.com/Depixelate/learning-goal");

const readme = await readFile(join(root, "README.md"), "utf8");
assert.match(readme, /# Personal Learning Goal Codex Plugin/);
assert.match(readme, /codex plugin marketplace add "\/Users\/velusamykaruppagounder\/Documents\/Learning Goal"/);
assert.doesNotMatch(readme, /DrCatHicks\/learning-goal\.git/);
assert.doesNotMatch(readme, /Claude Code plugin marketplace/);

const skill = await readFile(join(root, "learning-goal/skills/learning-goal/SKILL.md"), "utf8");
assert.match(skill, /Codex sessions/);
assert.doesNotMatch(skill, /Claude offers this exercise/);
