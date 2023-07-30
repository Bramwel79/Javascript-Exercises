/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var a = new Array( 5 );

function getNumber()
{
    var no;
    var number;
    no = prompt("Enter Number between 10 and 100: ");
    number = parseInt(no); 
    while(number < 10 || number > 100)
    {
        no = prompt("Re-Enter Number between 10 and 100: ");
        number = parseInt(no); 
        
    }
    return number;
    
}

function checkNumber(no)
{
   for(var x in a)
   {
      if(a[x] === no)
      {
        alert(no + " already exists in array.");
        return 1;
          
      }
   }
   
   return 0;
}

function display(no)
{
   document.getElementById("ans").innerHTML = no + " ";
   
}

function showArray(heading, theArray,output)
{
    output.innerHTML = heading + theArray.join(" ");
}

function printArray()
{
    var input;
    var count = 0;
    var no;
    var number;
    
    for(var x in a)
    {
        a[x] = 0;
    }
    
    while(count <= 4)
    {
        input = getNumber();
        
             
        if(checkNumber(input)=== 0)
        {
            a[count] = input;   
            ++count;
        }
        
    }
    
    showArray("Array is " + "<br>",a,
      document.getElementById("ans"));
    
}
