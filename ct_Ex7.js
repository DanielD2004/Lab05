// For: 22f EECS1012, York University, Lassonde School of Engineering (LAS) 
// in Ex7 to Ex13, change the name of the following function properly
 
 function readInteger() {
 
   
   /* this statement defines an object reference to the 
      html element having an ID "output".
      Every time you want to output something, use outputObj */
      var outputObj = document.getElementById("output");  
  
      /* this statement add some message to our output Object used for Ex8
         you would need to change the message to be appropriate in Ex9 to E13 */
      //  outputObj.innerHTML = "number: " + a + "<br><br>its digits: "; // uncomment this line for Ex8
    
      // translate the rest of your flowcharts to js here:
   
      // pre con: num is an integer
      // post con: output if num is even or odd, until 0 is inputted, then output program ended

      while (true) {
         num = parseInt(prompt("Please enter a number: "));
         if (num == 0) {
            outputObj.innerHTML += "<br><br>" + "program ended";
            document.getElementsByTagName("button")[0].setAttribute("disabled","true");
            return;
         }
         else if (num % 2 == 0) {
            number = "even";
            outputObj.innerHTML += "<br>" + num + ": " + number;
         }
         else {
            number = "odd";
            outputObj.innerHTML += "<br>" + num + ": " + number;
         }
      } 

      // factorial_B(a);  // for Ex11  call function factorial_B, passing a
    
    
      //the following statements inform the user that the program ended
      //and disable the button.  Ctrol+F5 to refresh the browser in order to start over 
    
    // for Ex11   take input named num  and computer num!
    //factorial_B (num) {
        // num is the input, calculate factorial of num. Use num as variable name.
    
   }
   
    
   
 
// This is a comment for github