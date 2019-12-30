const { exec } = require('child_process');
const directVmWare = process.stdin;
directVmWare.setEncoding('utf-8');
console.log(`Starting directory: ${process.cwd()}`);
console.log("Please input VmWare locaction (Press ENTER if it default locaction)");
directVmWare.on('data', function (data) {

  if(data === '\r\n'){
      process.chdir("C:/Program Files (x86)/VMware/VMware Workstation");
      console.log(`You are here: ${process.cwd()}`);
  } else {
      process.chdir(data.slice(0, -2));
      console.log(`You are here: ${process.cwd()}`);
  }
});
// exec('vmrun clone F:/Windows7Prox64/Windows7Prox64.vmx F:/Windows7Prox64(1)/Windows7Prox64(1).vmx linked', (error, stdout, stderr) => {
//   if (error) {
//     throw error;
//   }
//   console.log(stdout);
// });
// console.log(`Copy 1 Vms done`);



// const standard_input = process.stdin;

// standard_input.setEncoding('utf-8');

// console.log("Please input text in command line.");

// standard_input.on('data', function (data) {

//     if(data === 'exit\r\n'){
//         console.log("User input complete, program exit.");
//         process.exit();
//     }else
//     {
//         console.log('User Input Data : ' + data);
//     }
// });
