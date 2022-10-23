// For: 22f EECS1012, York University, Lassonde School of Engineering (LAS) 
// in Ex7 to Ex13, change the name of the following function properly

function fibonacci(){
     /* this statement add some message to our output Object used for Ex8
      you would need to change the message to be appropriate in Ex9 to E13 */
   
   // pre con: num is a positive integer greater than 1
   // post con: Output first num values of fibonacci sequence
 
   // // translate the rest of your flowcharts to js here:
   
   // /* this statement defines an object reference to the 
   //    html element having an ID "output".
   //    Every time you want to output something, use outputObj */
   var outputObj = document.getElementById("output");
      
   // this statement receives some data and parses it to integer
   num = parseInt(prompt("Please enter a number: "));

   secondLast = 0;
   last = 1;
   newValue = 0;
   list = [0, " " + 1];
   
   for (let i = 0; i < num-2; i++) {
      newValue = last + secondLast;
      secondLast = last;
      last = newValue;
      list.push(" " + newValue);
   }

   outputObj.innerHTML = "number: " + num;
   outputObj.innerHTML += "<br><br>Fibonacci: " + list;
   outputObj.innerHTML += "<br><br>" + "program ended";
   document.getElementsByTagName("button")[0].setAttribute("disabled","true");

}

