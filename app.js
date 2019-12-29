const { execFile } = require('child_process');
console.log(`Starting directory: ${process.cwd()}`);
process.chdir("C:/Program Files (x86)/VMware/VMware Workstation");
console.log(`Now im in: ${process.cwd()}`);
// const child = execFile('', [ls], (error, stdout, stderr) => {
//   if (error) {
//     throw error;
//   }
//   console.log(stdout);
// });