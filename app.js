const { exec } = require('child_process');
console.log(`Starting directory: ${process.cwd()}`);
process.chdir("C:/Program Files (x86)/VMware/VMware Workstation");
console.log(`Now im in: ${process.cwd()}`);
exec('vmrun clone F:/Windows7Prox64/Windows7Prox64.vmx F:/Windows7Prox64(1)/Windows7Prox64(1).vmx linked', (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});
console.log(`Copy 1 Vms done`);