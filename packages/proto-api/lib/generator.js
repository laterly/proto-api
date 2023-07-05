
const path = require('path');
const fs = require('fs');

class Generator {
  constructor(name, targetDir) {
    this.name = name;
    this.targetDir = targetDir;
  }

  async generateCode(filesPath) {
    console.log('filesPath',filesPath);
  }

  async create() {
    const directoryToSearch = path.join(process.cwd(), "proto");
    const fileArr = this.processProtoFiles(directoryToSearch, []);
    this.generateCode(fileArr);
    
  }

  processProtoFiles(directory, arr) {
    fs.readdirSync(directory).forEach((file) => {
      const filePath = path.join(directory, file);
      if (fs.statSync(filePath).isDirectory() && !filePath.includes('google')) {
        this.processProtoFiles(filePath, arr); // 递归处理子目录
      } else if (filePath.endsWith(".proto")) {
        arr.push(filePath);
      }
    });
    return arr;
  }
}

module.exports = Generator;