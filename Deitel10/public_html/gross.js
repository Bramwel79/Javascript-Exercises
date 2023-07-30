/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function getCount()
{
    var low = parseInt(document.getElementById("min").value);
    var high = parseInt(document.getElementById("max").value);
    var normalSalary = 200;
    var commission_percent = 0.09;
    var temp;
    var count = 0;
    var extra; //salary above normal salary
    var grossSales;
            
    for(var a = low;a <= high;++a)
    {
        if(a < normalSalary)
        {
            alert("Salary is less than " + normalSalary);
                  //document.getElementById("result")
                  // .innerHTML = "salary is less than minimum.";//+ "<br />";
        }
        
        if(a >= normalSalary)
        {
            extra = a - normalSalary;
            grossSales = 1 / commission_percent * extra;
            
            temp = normalSalary + (grossSales * commission_percent);
            
            if(temp === a)
            {
                count += 1;
            }
            
        }
        
    }
    
  document.getElementById("result")
     .innerHTML = count + " employees earned between " + low + " and " + high;

}