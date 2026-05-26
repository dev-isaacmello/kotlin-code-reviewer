#!/usr/bin/env node

import fs from "fs"
import path from "path"
import os from "os"

const SKILLS_DIR = path.join(
  os.homedir(),
  ".agent-skills"
)

if (!fs.existsSync(SKILLS_DIR)) {
  fs.mkdirSync(SKILLS_DIR, {
    recursive: true
  })
}

const source = path.resolve("skill.md")

const destination = path.join(
  SKILLS_DIR,
  "kotlin-code-reviewer.md"
)

fs.copyFileSync(source, destination)

console.log("✔ kotlin-code-reviewer installed")
console.log(`Location: ${destination}`)