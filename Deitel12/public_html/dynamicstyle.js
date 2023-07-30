/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function start()
{
  var inputColor = prompt( "Enter a color name for the " +
          "background of this page", "" );
  var inputFont = prompt( "Enter a font for this page", "" );
  document.body.setAttribute( "style","background-color: " + inputColor + ";" +
          "font-family: " + inputFont + ";");
 
} // end function start

 window.addEventListener( "load", start, false );
