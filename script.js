// write js code here if required
const date=new Date();
let calendar=`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
let time=date.toLocaleTimeString();

const p=document.getElementById("timer");
timer.innerText=`${calendar},${time}`