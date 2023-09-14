var counter = 1;

function printcounter(){
  console.clear()
  console.log(counter);
  counter = counter + 1;
}
setInterval(printcounter,1*1000);
