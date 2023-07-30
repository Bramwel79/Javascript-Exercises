/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function getCurrentTimeDate()
{
    var now = new Date();
    alert(now.toUTCString());
} 

function getYesterdayTimeDate()
{
    var now = new Date();
    //3 600 000 milliseconds = 1 hour
    var newDate = new Date(now.getTime()- (3600000*24));
    alert(newDate.toUTCString());
    
}

function getTimeDateTenYearsAgo()
{
    var newDate = new Date();
    newDate.setFullYear(newDate.getFullYear() - 10);
    alert(newDate.toUTCString());
    
}

function getTimeDateOneWeekLater()
{
    var newDate = new Date();
    newDate.setFullYear(newDate.getFullYear(),
                        newDate.getMonth(),
                        newDate.getDate()+ 7);
    alert(newDate.toUTCString());                    
}
