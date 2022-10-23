// For: 22f EECS1012, York University, Lassonde School of Engineering (LAS) 
// in Ex7 to Ex13, change the name of the following function properly

function triangle(){
 
   // // translate the rest of your flowcharts to js here:
   
   // pre-con: num is a positive integer
   // post-con: Output triangle with 
   //           height and width of num

   /* this statement defines an object reference to the 
      html element having an ID "output".
      Every time you want to output something, use outputObj */
   var outputObj = document.getElementById("output");

   // this statement receives some data and parses it to integer
   num = parseInt(prompt("Please enter a number: "));   
   
   outputObj.innerHTML = "number: " + num + "<br>"
   outputObj.style.textAlign = "left"

   for (let i = 0; i < num; i++){
      outputObj.innerHTML += "<br>"
      for (let j = 0; j < i + 1; j++){
         outputObj.innerHTML += "[]  "
      }
   }

   outputObj.innerHTML += "<br><br> program ended <br><br>";
   document.getElementsByTagName("button")[0].setAttribute("disabled","true");

}

