/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var sales = new Array(3);
sales[0] = new Array(5);
sales[1] = new Array(5);
sales[2] = new Array(5);

function display()
{
    for ( var row in sales )
    {
      for ( var col in sales[ row ] )
      {
         document.getElementById("ans").innerHTML = "[" + sales[row] +"]" + 
                 "[" + sales[col] + "]" + "<br>";
            sales[ row ][ col ] = 0; 
      }
    }
}
