// For: 22f EECS1012, York University, Lassonde School of Engineering (LAS) 
// in Ex7 to Ex13, change the name of the following function properly

function seperateDigits(){

   // // translate the rest of your flowcharts to js here:

   // pre con: num is a positive integer
   // post con: Output all digits of num seperately

   // /* this statement defines an object reference to the 
   //    html element having an ID "output".
   //    Every time you want to output something, use outputObj */
   var outputObj = document.getElementById("output");

   // this statement receives some data and parses it to integer
   num = parseInt(prompt("Please enter a positive number: "));

   digits = [];
   outputObj.innerHTML = "number: " + num + "<br><br>its digits: "; // uncomment this line for Ex8 
   while (num > 0) {
      digit = num % 10;
      num = Math.floor(num / 10);
      digits.unshift(digit);  
   }
   outputObj.innerHTML += digits;
   outputObj.innerHTML += "<br><br>" + "program ended";
   document.getElementsByTagName("button")[0].setAttribute("disabled","true");

   // factorial_B(a);  // for Ex11  call function factorial_B, passing a
 
 
   //the following statements inform the user that the program ended
   //and disable the button.  Ctrol+F5 to refresh the browser in order to start over
   // document.getElementsByTagName("button")[0].setAttribute("disabled","true");
 
 // for Ex11   take input named num  and computer num!
 //factorial_B (num) {
     // num is the input, calculate factorial of num. Use num as variable name.
 
 
}
