// const { exec } = require('child_process');
// const directVmWare = process.stdin;
// directVmWare.setEncoding('utf-8');
// console.log(`Starting directory: ${process.cwd()}`);
// console.log("Please input VmWare locaction (Press ENTER if it is default locaction)");
// directVmWare.on('data', function (data) {
//   if(data === '\r\n'){
//       process.chdir("C:/Program Files (x86)/VMware/VMware Workstation");
//       console.log(`You are here: ${process.cwd()}`);

//   } else {
//       process.chdir(data.slice(0, -2));
//       console.log(`You are here: ${process.cwd()}`);
//   }
// });
// directVmWare.off
// const whatUwannaDo = process.stdin;
// whatUwannaDo.setEncoding('utf-8');
// whatUwannaDo.on('data', function (data) {
//   console.log("What u wanna do? Tell mi maj friend. (linked or clone)")
//   if(data === 'linked\r\n'){

//     console.log(`You are here: ${process.cwd()}`);

//   } else if (data === 'clone\r\n') {

//     console.log(`You are here: ${process.cwd()}`);
//   } else {
//     console.log ('sorry i dont have this options yet')
// }
// });
// exec('vmrun clone F:/Windows7Prox64/Windows7Prox64.vmx F:/Windows7Prox64(1)/Windows7Prox64(1).vmx linked', (error, stdout, stderr) => {
//   if (error) {
//     throw error;
//   }
//   console.log(stdout);
// });
// console.log(`Copy 1 Vms done`);
// const { exec } = require('child_process');
// process.stdin.setEncoding('utf8');
// async function get() {
//   return new Promise((resolve, reject) => {
//     console.log("Please input VmWare locaction (Press ENTER if it is default locaction)");
//       process.stdin.once('data', function direct(data) {
//         if(data === '\r\n'){
//                 process.chdir("C:/Program Files (x86)/VMware/VMware Workstation");
//                 console.log(`You are here: ${process.cwd()}`);
//                 console.log('Are u sure?');
//                 process.stdin.once('data', data => {
//                   if(data === 'yes\r\n') { resolve(WhatToDo())
//                   } else { get() }
//                 })
//             } else {
//                 process.chdir(data.slice(0, -2));
//                 console.log(`You are here: ${process.cwd()}`);
//                 process.stdin.once('data', data => {
//                   if(data === 'yes\r\n') resolve(WhatToDo())
//                   get()
//                 })
//             }
//   })
// });
// }
// let option;
// async function WhatToDo() {
//   return new Promise((resolve, reject, ) => {
//     console.log("What u wanna do clone or linked");
//       process.stdin.once('data', linked => {
//           option = linked
//           console.log(`U choose ${option} are u sure?`)
//                 process.stdin.once('data', data => {
//                   if(data === 'yes\r\n') resolve(lastPhase())
//                   else WhatToDo()
//   })
// });
// })}
// let from;
// let howMany;

// async function lastPhase() {
//   return new Promise((resolve, reject, ) => {
//     console.log("What Vms wanna clone (Press ENTER if it is F:/Windows7Prox64/Windows7Prox64.vmx)");
//   process.stdin.once('data', data => {
//     if(data === '\r\n'){
//       data = "F:/Windows7Prox64/Windows7Prox64.vmx"
//     from = data
//     console.log(`U choose ${from} are u sure?`)    
// }
// console.log("How many Vms u whont?");
// process.stdin.once('data', data => {
//   howmany = data
//   for(let i=1; i <= howmany; i++) {
//   exec(`vmrun clone ${from} F:/Windows7Prox64(${i})/Windows7Prox64(${i}).vmx ${option}`, (error, stdout, stderr) => {
//     if (error) {
//       throw error;
//     }
//     console.log(stdout);
//   });
  
// }})})
// })}

// async function main() {
//   await get();
//   await WhatToDo();
//   await lastPhase()
//   await process.exit()
// }

// main()
const functions = document.getElementById("functions")
const versions = document.getElementById("versions")
const choosenFunction = document.querySelector('.function_input').value;
const myObj = 
{
  "clone": "full,linked",
  "other": "something,everything"
}
const myJson = JSON.stringify(myObj)
for(let i=0; i < Object.keys(myObj).length; i++ ) {
  functions.innerHTML += `<option>${Object.keys(myObj)[i]}</option>`
}
const myObjMap = new Map(Object.entries(myObj));
versions.addEventListener("click", e => {
  for(let i=0; i < Object.keys(myObj).length; i++ ) {
    versions.innerHTML += `<option>${myObjMap.get(document.querySelector('.function_input').value).split(",")[i]}</option>`
  }
  console.log("updated")
})
  