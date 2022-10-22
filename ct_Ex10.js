// For: 22f EECS1012, York University, Lassonde School of Engineering (LAS) 
// in Ex7 to Ex13, change the name of the following function properly

function reverseSame(){
     /* this statement add some message to our output Object used for Ex8
      you would need to change the message to be appropriate in Ex9 to E13 */
 
   // // translate the rest of your flowcharts to js here:
   
   // pre con: num is a positive integer
   // post con: Output if num is equal to it's reverse

   // /* this statement defines an object reference to the 
   //    html element having an ID "output".
   //    Every time you want to output something, use outputObj */
   var outputObj = document.getElementById("output");

   // // this statement receives some data and parses it to integer
   var num = parseInt(prompt("Please enter a number: ", ""));

   let digits = [];
   let reverseDigits = [];
   let equal = "yes";
   outputObj.innerHTML = "number: " + num + "<br><br>equal to its reverse? "; // uncomment this line for Ex8 
   while (num > 0){
      let digit = num % 10;
      num = Math.floor(num/10);
      digits.unshift(digit);
      reverseDigits.push(digit);
      }  

   for (let i = 0; i < digits.length; i++){
      if (reverseDigits[i] != digits[i]){
         equal = "no";
         break;
      }
   }

   outputObj.innerHTML += equal;
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
