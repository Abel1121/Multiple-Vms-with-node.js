const path = require('path')
const { exec } = require('child_process');
const vmrunDirection = document.querySelector('.app_vmrunDirection');
const selectInput = document.querySelector('.select_input');
const chooseVirtualMachine = document.querySelector('.file_input');
const locactionNewMachine = document.querySelector('.locaction_input');
const nameNewVms = document.querySelector('.nameNew_input');
const buttonStart = document.querySelector('.buttonStart');
selectInput.addEventListener("change", e => {
    vmrunDirection.innerHTML = path.dirname(document.querySelector(".select_input").files[0].path)
    console.log(path.dirname("Defoult Vmrun locaction is " + document.querySelector(".select_input").files[0].path))
})
chooseVirtualMachine.addEventListener("change", e => {
  //chooseVirtualMachine.innerHTML = path.dirname(document.querySelector(".select_input").files[0].path)
  console.log("Vmware to clone is " + document.querySelector(".file_input").files[0].path)
 })
 locactionNewMachine.addEventListener("change", e => {
  console.log("New machine will be put in " + path.dirname(document.querySelector(".locaction_input").files[0].path))

  //   vmrunDirection.innerHTML = path.dirname(document.querySelector(".select_input").files[0].path)
 })
 nameNewVms.addEventListener("change", e => {
  console.log("New Vms have name " + nameNewVms.value)
})

buttonStart.addEventListener("click", e => {
  const VMwareClone = document.querySelector(".file_input").files[0].path
  const nameNewClone = path.dirname(document.querySelector(".locaction_input").files[0].path) + nameNewVms.value;
  const howMany = +document.querySelector('.howMany_input').value;
  const Vmfunction = document.querySelector('.function_input').value
  const VMfunctionVersion = document.querySelector('.version_input').value
  console.log(path.dirname("Defoult Vmrun locaction is " + document.querySelector(".select_input").files[0].path))
  console.log("Vmware to clone is " + document.querySelector(".file_input").files[0].path)
  console.log("New machine will be put in " + path.dirname(document.querySelector(".locaction_input").files[0].path))
  console.log("New Vms have name: " + nameNewVms.value)

  process.chdir(path.dirname(document.querySelector(".select_input").files[0].path));
  console.log(`Your locaction now is : ${process.cwd()}`);

  for (let i = 1; i <= howMany; i++) {
    exec(`vmrun ${Vmfunction} ${VMwareClone} ${nameNewClone + (i) + `\\` + nameNewVms.value + (i) + `.vmx`} ${VMfunctionVersion}`, (error, stdout, stderr) => {
      if (error) {
        throw error;
      }
      console.log(stdout);
    });
  }
  })
//const selectedVmrun = path.dirname(document.querySelector(".select_input").files[0].path);
//process.chdir(`${selectedVmrun}`);
//console.log(path.dirname(document.querySelector(".select_input").files[0].path))