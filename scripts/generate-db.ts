// import fs
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

// import schedule object from schedule.ts
// const schedule = require("../src/data/schedule").schedule;
import { schedule } from "../src/data/schedule";

// convert schedule object to JSON
const scheduleJSON = JSON.stringify(schedule);

// write JSON to file
// ../db/v2/schedule.json

// path join __dirname + "/../db/v2/schedule.json"
const filePath = path.join(__dirname, "../db/v2/schedule.json");
fs.writeFileSync(filePath, scheduleJSON);

// execute command `./node_modules/prettier/bin-prettier.js --write .`
// execute bash command
// prettier js path
const prettierPath = path.join(
  __dirname,
  "../node_modules/prettier/bin-prettier.js"
);

exec(
  `${prettierPath} --write ${filePath}`,
  // @ts-ignore
  (err, stdout) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  }
);
