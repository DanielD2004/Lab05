// For: 22f EECS1012, York University, Lassonde School of Engineering (LAS) 
// in Ex7 to Ex13, change the name of the following function properly

function factorial_A(){

   // // translate the rest of your flowcharts to js here:
   
   // pre con: num is a positive integer
   // post con: Output num factorial

   // /* this statement defines an object reference to the 
   //    html element having an ID "output".
   //    Every time you want to output something, use outputObj */
   var outputObj = document.getElementById("output");

   // this statement receives some data and parses it to integer
   num = parseInt(prompt("Please enter a number: "));
   
   let factorialA = 1;
   for (let i = 1; i < num+1; i++) {
      factorialA = factorialA * i;
   }
   outputObj.innerHTML = num + "!: " + factorialA + " (A)";

   factorial_B(num);  // for Ex11  call function factorial_B, passing a

   outputObj.innerHTML += "<br><br>" + "program ended";
   document.getElementsByTagName("button")[0].setAttribute("disabled","true");

}

 // for Ex11   take input named num  and computer num!
 function factorial_B (num) {
   var outputObj = document.getElementById("output");
   i = 1;
   let factorialB = 1;
   while (i < num + 1) {
      factorialB = factorialB * i;
      i++;
   }
   outputObj.innerHTML += "<br><br>" + num + "!: " + factorialB + " (B)";
}

