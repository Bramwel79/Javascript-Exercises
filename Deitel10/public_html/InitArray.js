/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function start()
{
    var f = [10,45,52,36,41,25,96,27,89];
    var gg = [23,45,67,23,90];
    var aa = [1,2,3,4,5,6,7,8,9,10,11];
    var bb = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    
    
    showArray("Array is " + "<br>",f,
      document.getElementById("display"));
    outputArrayElement("Seventh element in array is ",f,7,
      document.getElementById("displayf")); 
      
    showArray("Original Array is " + "<br>",gg,
      document.getElementById("original"));  
      
    initialiseArray(gg);
      
    showArray("Initialised Array is " + "<br>",gg,
      document.getElementById("initialise")); 
    
    var a = new Array(100);
   
    for(var x  = 0; x < a.length;++x)
    {
        a[x] = parseInt(Math.random() * 10);
        
    }
    var ans = totalArray(a);
    
    showArray("Array is " + "<br>",a,
      document.getElementById("total")); 
    document.getElementById("ans").innerHTML = "Total = " + ans;  
    
    copyArray(aa,bb);
    showArray("Array is " + "<br>",bb,
      document.getElementById("copy")); 
      
    var aaa = new Array(99);
    var item;
   
    for(var x  = 0; x < aaa.length;++x)
    {
        item = Math.random() * 100;
        aaa[x] = item.toFixed(2);
        
    }  
    showArray("Array is " + "<br>",aaa,
      document.getElementById("size"));
   document.getElementById("small").innerHTML = "Smallest = " + getSmallest(aaa); 
   document.getElementById("big").innerHTML = "Largest = " + getLargest(aaa);
}

function getLargest(a)
{
   var largest = a[0];
   for(var x = 0; x < a.length;++x)
   {
       for(var y = x+1;y < a.length;++y)
       {
           if(a[y] > largest)
           {
               largest = a[y];
           }
       }
   }
   
   return largest;
}

function getSmallest(a)
{
   var smallest = a[0];
   for(var x = 0; x < a.length;++x)
   {
       for(var y = x+1;y < a.length;++y)
       {
           if(a[y] < smallest)
           {
               smallest = a[y];
           }
       }
   }
   
   return smallest;
}

function copyArray(a,b)
{
    for(var x = 0; x < 11;++x)
    {
        b[x] = a[x];
    }
}

function totalArray(a)
{
    var total = 0;
    for(var y in a)
    {
        total += a[y];
    }
    return total;
}

function initialiseArray(g)
{
    for(var j in g)
    {
        g[j] = 8;
    }
}

function showArray(heading, theArray,output)
{
    output.innerHTML = heading + theArray.join(" ");
}

function outputArrayElement(heading,theArray,element,output)
{
    var results = heading;
    results += theArray[element-1]; //arrays start at 0
    output.innerHTML = results;
}
function outputArray(heading, theArray,output)
{
    var results = "";
    
    for(var row in theArray)
    {
        results += "<ul>";
        for(var column in theArray[row])
        {
            results += "<li>" + theArray[row][column] + "</li>";
        }
        
        results += "</ul>";
    }
    
    output.innerHTML = results;
}

window.addEventListener("load",start,false);