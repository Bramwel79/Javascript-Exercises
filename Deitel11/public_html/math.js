/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function testMath()
{
    var s = document.getElementById("area");
    s.value = "max(33,56)= " + Math.max(33,56) + '\r\n';
    s.value += "min(3,-1)= " + Math.min(3,-1) + '\r\n';
    s.value += "abs(-1)= " + Math.abs(-1) + '\r\n';
    s.value += "sqrt(89)= " + Math.sqrt(89) + '\r\n';
    s.value += "PI = " + Math.PI + '\r\n';
    s.value += "ceil(97.56) = " + Math.ceil(97.56) + '\r\n';
    s.value += "floor(97.56) = " + Math.floor(97.56) + '\r\n';
    s.value += "cos(45)= " + Math.cos(45) + '\r\n';
    s.value += "sin(30) = "+ Math.sin(30) + '\r\n';
    
}

function roundToInteger(number)
{
    var y;
    number = document.getElementById("no").value;
    y = Math.floor(number * 1 ) / 1;
    document.getElementById("result").innerHTML = number + 
            " rounded to integer = " + y;
}

function roundToTenths(number)
{
    var y;
    number = document.getElementById("no").value;
    y = Math.floor(number * 10 + 0.5 ) / 10;
    document.getElementById("result").innerHTML = number + 
            " rounded to tenths = " + y;
}

function roundToHundredths(number)
{
    var y;
    number = document.getElementById("no").value;
    y = Math.floor(number * 100 + 0.5 ) / 100;
    document.getElementById("result").innerHTML = number + 
            " rounded to hundredths = " + y;
}

function roundToThousandths(number)
{
    var y;
    number = document.getElementById("no").value;
    y = Math.floor(number * 1000 + 0.5 ) / 1000;
    document.getElementById("result").innerHTML = number + 
            " rounded to thousandths = " + y;
}

function roundToInteger2(number)
{
    var y;
    number = document.getElementById("no").value;
    y = Math.round(number * 1 ) / 1;
    document.getElementById("result").innerHTML = number + 
            " rounded to integer = " + y;
}

function roundToTenths2(number)
{
    var y;
    number = document.getElementById("no").value;
    y = Math.round(number * 10 + 0.5 ) / 10;
    document.getElementById("result").innerHTML = number + 
            " rounded to tenths = " + y;
}

function roundToHundredths2(number)
{
    var y;
    number = document.getElementById("no").value;
    y = Math.round(number * 100 + 0.5 ) / 100;
    document.getElementById("result").innerHTML = number + 
            " rounded to hundredths = " + y;
}

function roundToThousandths2(number)
{
    var y;
    number = document.getElementById("no").value;
    y = Math.round(number * 1000 + 0.5 ) / 1000;
    document.getElementById("result").innerHTML = number + 
            " rounded to thousandths = " + y;
}

window.addEventListener("load",testMath,false);