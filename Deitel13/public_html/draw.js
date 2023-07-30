/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function createCanvas()
{
    var side = 100;
    var tbody = document.getElementById( "tablebody" );

    for ( var i = 0; i < side; ++i )
    {
        var row = document.createElement( "tr" );

        for ( var j = 0; j < side; ++j )
        {
            var cell = document.createElement( "td" );
            row.appendChild( cell );
        } // end for

        tbody.appendChild( row );
    } // end for
    
   // register mousemove listener for the table
   document.getElementById( "canvas" ).addEventListener(
   "mousemove", processMouseMove, false );

} // end function createCanvas

 // processes the onmousemove event
 function processMouseMove( e )
{
    if ( e.target.tagName.toLowerCase() === "td" )
    {
       // turn the cell blue if the Ctrl key is pressed
       if(e.ctrlKey)
       {
           e.target.setAttribute( "class", "blue" );
       } // end if

       // turn the cell red if the Shift key is pressed
       if(e.shiftKey)
       {
          e.target.setAttribute( "class", "red" );
       } // end if
       
       // turn the cell white if the alt key is pressed
       if(e.altKey)
       {
          e.target.setAttribute( "class", "white" );
       } // end if
    } // end if
       //
} // end function processMouseMove

function eraseAll()
{
    var side = 100;
    var tbody = document.getElementById( "tablebody" );

    for ( var i = 0; i < side; ++i )
    {
        var row = document.getElementsByTagName( "tr" );

        for ( var j = 0; j < side; ++j )
        {
            var cell = document.getElementsByTagName( "td" );
            row.deleteCell(j);
        } // end for

        tbody.deleteCell(row );
    } // end for
}

function doErase()
{
    var obj =  document.getElementById("tablebody");
    obj.remove();
}
window.addEventListener( "load", createCanvas, false );
