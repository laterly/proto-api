#!/usr/bin/env node

const program = require("commander");
//快速创建模板
program
  .command("create <name>") // 定义名为 create 的命令，并接受一个名为 name 的参数
  .description("create a new project")
  .option("-f, --force", "overwrite target directory if it exists")
  .action(async (name, options) => {

    require("../lib/create.js")(name, options);
  });



program.parse(process.argv);
