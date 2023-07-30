/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function isEqual(one,two)
{
    one = document.getElementById("s1").value;
    two = document.getElementById("s2").value;
    var n = one.localeCompare(two);
    
    if(n === 0)
    {
        document.getElementById("result").innerHTML = one + " is equal to " +
                two;
    }
    if(n === -1)
    {
        document.getElementById("result").innerHTML = one + " is greater than " 
                + two;
    }
    if(n === 1)
    {
        document.getElementById("result").innerHTML = one + " is less than " +
                two;
    }
    
}
function generateLimerick()
{
    var limerick = new Array("There was an Old Man with a beard",
                             "Who said, It is just as I feared!",
                             "Two Owls and a Hen",
                             "Four Larks and a Wren",
                             "Have all built their nests in my beard!");
                                
    var x = 0;
    var textArea = document.getElementById("story");
    textArea.value = '\r\n';
    
    for(x = 0;x <5;++x)
    {
        textArea.value += limerick[x] + '\r\n';
    }
    textArea.value += "\nNot satisfactory";
}
function composeStory()
{
    var article = new Array("the","a","one","some","any");
    var noun  = new Array("boy","girl","dog","town","car");
    var verb = new Array("drove","jumped","ran","walked","skipped");
    var preposition = new Array("to","from","over","under","on");
    var no;
    var startLine = "One upon a time ....";
    var endLine = "THE END";
    var textArea = document.getElementById("story");
    textArea.value = startLine + '\r\n';
    var x = 0;
    
    //sentence order: article,noun,verb,prepostion,article and noun
    for(x = 0; x < 20;++x)
    {
        no = Math.floor(Math.random() * 5);
        
        textArea.value += article[no] + " " + noun[no] + " " + verb[no] + " " +
                 preposition[no] + " " + article[no] + " " + noun[no] + '\r\n';
         
    }
    
    textArea.value += endLine;
    
}

function getWordLengthOccurence()
{
    var input = document.getElementById("inputfield").value;
    var textArea = document.getElementById("area");
    textArea.value = 'Word Length    Occurrences\r\n';
    var no = new Array();
    no = input.split(" ");
    var totals = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0);
            
    for(x = 0; x < no.length;++x)
    {
        switch(no[x].length)
        {
            case 0:
                totals[0] = totals[0] + 1;
                break;
            case 1:
                totals[1] = totals[1] + 1;
                break;
            case 2:
                totals[2] = totals[2] + 1;
                break;
            case 3:
                totals[3] = totals[3] + 1;
                break;
            case 4:
                totals[4] = totals[4] + 1;
                break;
            case 5:
                totals[5] = totals[5] + 1;
                break;
            case 6:
                totals[6] = totals[6] + 1;
                break;
            case 7:
                totals[7] = totals[7] + 1;
                break;
            case 8:
                totals[8] = totals[8] + 1;
                break;
            case 9:
                totals[9] = totals[9] + 1;
                break;
            case 10:
                totals[10] = totals[10] + 1;
                break;
            case 11:
                totals[11] = totals[11] + 1;
                break;
            case 12:
                totals[12] = totals[12] + 1;
                break;
            case 13:
                totals[13] = totals[13] + 1;
                break;
            case 14:
                totals[14] = totals[14] + 1;
                break;
            case 15:
                totals[15] = totals[15] + 1;
                break;
            case 16:
                totals[16] = totals[16] + 1;
                break;
            case 17:
                totals[17] = totals[17] + 1;
                break;
            case 18:
                totals[18] = totals[18] + 1;
                break;
            case 19:
                totals[19] = totals[19] + 1;
                break;
            case 20:
                totals[20] = totals[20] + 1;
                break;
            case 21:
                totals[21] = totals[21] + 1;
                break;
            case 22:
                totals[22] = totals[22] + 1;
                break;
            case 23:
                totals[23] = totals[23] + 1;
                break;
            case 24:
                totals[24] = totals[24] + 1;
                break;
            case 25:
                totals[25] = totals[25] + 1;
                break;
            case 26:
                totals[26] = totals[26] + 1;
                break;
            default:
                totals[27] = totals[27] + 1;
        }
                           
    }
    for(x = 0; x < totals.length;++x)
    {
        if(totals[x] > 0)
        {
           textArea.value += x + '\t\t' +  totals[x] + '\r\n';
        }
    }
     textArea.value += '\r\nTotal Words = ' + no.length;
       
}

function getWordsOccurence()
{
    var input = document.getElementById("inputfield").value;
    var textArea = document.getElementById("area");
    textArea.value = 'Word                Occurrences\r\n';
    var no = new Array();
    no = input.split(" ");
    var totals = [];
    var n;
    
    for(x = 0; x < no.length;++x)//the total array will initially have 1 for each element
    {
        totals[x] = 1;
    }
         
    for(x = 0; x < no.length;++x)
    {
        for(y = x+1;y < no.length;++y)
        {
            n = no[x] === no[y];
            if(n === true)
            {
               totals[x] = totals[x] + 1;
               totals[y] = totals[y] - 1;
            }
                        
        }
                             
    }
    
    for(x = 0; x < no.length;++x)
    {
        if(totals[x] >= 1)
        {
           textArea.value += no[x] + '\t\t\t\t\t' +  totals[x] + '\r\n';
        }
    }
     textArea.value += '\r\nTotal Words = ' + no.length;
       
}

function getWordsOccurence2()
{
     var input = document.getElementById("inputfield").value;
    var textArea = document.getElementById("area");
    textArea.value = 'Word                Occurrences\r\n';
    var no = new Array();
    no = input.split(" ");
    no.sort();
    var totals = [];
    var n;
    
    for(x = 0; x < no.length;++x)//the total array will initially have 1 for each element
    {
        totals[x] = 1;
    }
         
    for(x = 0; x < no.length;++x)
    {
        for(y = x+1;y < no.length;++y)
        {
            n = no[x] === no[y];
            if(n === true)
            {
               totals[x] = totals[x] + 1;
               totals[y] = totals[y] - 1;
            }
                        
        }
                             
    }
    
    for(x = 0; x < no.length;++x)
    {
        if(totals[x] >= 1)
        {
           textArea.value += no[x] + '\t\t\t\t\t' +  totals[x] + '\r\n';
        }
    }
     textArea.value += '\r\nTotal Words = ' + no.length;
       
}
function phoneTokenise()
{
    var input = document.getElementById("no").value;
    var no = new Array();
    var code;
    var telno1;
    var telno2;
    no = input.split(" ");
    code = no[0].substring(1,4);
    telno1 = no[1].substring(0,3);
    telno2 = no[1].substring(4,8);
    document.getElementById("areacode").innerHTML = code;
    telno = telno1.concat(telno2);
    document.getElementById("phoneno").innerHTML = telno;
}

function tokenise()
{
    var suffix = "ay";
    var sentence = document.getElementById("no").value;
    var tokens = new Array();
    var changeOne,changeTwo;
    var newToken = " ";
    var len;
    
    tokens = sentence.split( " " );
    for(var x = 0; x < tokens.length;++x)
    {
        len = tokens[0].length;
        changeOne = tokens[x].substring(0,1);
        changeTwo = tokens[x].substring(1,len);
        newToken = (changeTwo.concat(changeOne)).concat(suffix);
        printLatinWord(newToken);
    }
    
}
function printLatinWord(word)
{
    var textArea = document.getElementById("area");
    textArea.value += word + '\r\n';
}

function reverseTokenise()
{
    var sentence = document.getElementById("no").value;
    var textArea = document.getElementById("tokens");
    var tokens = new Array();
    tokens = sentence.split( " " );
    for(var x = tokens.length-1; x >= 0;--x)
    {
        textArea.value += tokens[x] + '\r\n';
    }
    
}

function changeCase()
{
    var sentence = document.getElementById("no").value;
    var textArea = document.getElementById("tokens");
    
    textArea.value += sentence.toLowerCase() + '\r\n';
    textArea.value += sentence.toUpperCase() + '\r\n';
}

function SearchChar()
{
    var param  = document.getElementById("ch").value;
   
    var input = document.getElementById("inputfield").value;
     
    var len = input.length;
    
    var count = 0;
    var ans;
    while(len !== 0)
    {
        ans = input.indexOf(param);
       
        if(ans >= 0)
        {
            input = input.substring(ans + 1);//start at next character 
            len = input.length + 1; //len will be reduced by 1 at line 159
            ++count;
        }
        --len;
    }
    
    document.getElementById("results").innerHTML = param + " appears " + count +
            " time(s)";
}

function SearchAllChar()
{
    var alphabet = new Array("a","b","c","d","e","f","g","h","i","j","k",
                             "l","m","n","o","p","q","r","s","t","u","v",
                             "w","x","y","z");
    var totals = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    
    var dat =  document.getElementById("inputfield").value;
    var input = dat.toLowerCase(); 
    var len = input.length;
    var chr;
    var count = 0;
    var sum = 0;
   
    while(len !== 0)
    {
        chr = input.substring(count,count + 1);

        switch(chr)
        {
            case alphabet[0]:
                totals[0] = totals[0] + 1;
                break;
            case alphabet[1]:
                totals[1] = totals[1] + 1;
                break;
            case alphabet[2]:
                totals[2] = totals[2] + 1;
                break;
            case alphabet[3]:
                totals[3] = totals[3] + 1;
                break;
            case alphabet[4]:
                totals[4] = totals[4] + 1;
                break;
            case alphabet[5]:
                totals[5] = totals[5] + 1;
                break;
            case alphabet[6]:
                totals[6] = totals[6] + 1;
                break;
            case alphabet[7]:
                totals[7] = totals[7] + 1;
                break;
            case alphabet[8]:
                totals[8] = totals[8] + 1;
                break;
            case alphabet[9]:
                totals[9] = totals[9] + 1;
                break;
            case alphabet[10]:
                totals[10] = totals[10] + 1;
                break;
            case alphabet[11]:
                totals[11] = totals[11] + 1;
                break;
            case alphabet[12]:
                totals[12] = totals[12] + 1;
                break;
            case alphabet[13]:
                totals[13] = totals[13] + 1;
                break;
            case alphabet[14]:
                totals[14] = totals[14] + 1;
                break;
            case alphabet[15]:
                totals[15] = totals[15] + 1;
                break;
            case alphabet[16]:
                totals[16] = totals[16] + 1;
                break;
            case alphabet[17]:
                totals[17] = totals[17] + 1;
                break;
            case alphabet[18]:
                totals[18] = totals[18] + 1;
                break;
            case alphabet[19]:
                totals[19] = totals[19] + 1;
                break;
            case alphabet[20]:
                totals[20] = totals[20] + 1;
                break;
            case alphabet[21]:
                totals[21] = totals[21] + 1;
                break;
            case alphabet[22]:
                totals[22] = totals[22] + 1;
                break;
            case alphabet[23]:
                totals[23] = totals[23] + 1;
                break;
            case alphabet[24]:
                totals[24] = totals[24] + 1;
                break;
            case alphabet[25]:
                totals[25] = totals[25] + 1;
                break;
            case alphabet[26]:
                totals[26] = totals[26] + 1;
            break;
        }
               
        ++count;
        --len;
    }
    var textArea = document.getElementById("area");
    textArea.value = 'Character      Count \r\n';
    for(var x = 0; x < 26;++x)
    {
        if(totals[x] > 0 )
        {
           textArea.value += alphabet[x] + '\t\t' +  totals[x] + '\r\n';
           sum = sum + totals[x];
        }
    }
    textArea.value += '\r\nTotal Characters = ' + sum;
    
}

function getStringsBeginningWithb()
{
    var input = document.getElementById("inputfield").value;
    var textArea = document.getElementById("area");
    textArea.value = 'Strings beginning with b are\r\n';
    var tokens = new Array();
    tokens = input.split(" ");
    
    for(var x = 0; x < tokens.length;++x)
    {
        var b = tokens[x].charAt(0);
        var n = b.localeCompare("b");
        if (n === 0)
        {
           textArea.value += tokens[x] + '\r\n';   
        }
        
    }
}

function getStringsEndingWithed()
{
    var input = document.getElementById("inputfield").value;
    var textArea = document.getElementById("area");
    textArea.value = 'Strings ending with ed are\r\n';
    var tokens = new Array();
    tokens = input.split(" ");
    
    for(var x = 0; x < tokens.length;++x)
    {
        var e = tokens[x].charAt(tokens[x].length - 2);
        var d = tokens[x].charAt(tokens[x].length - 1);
        
        var ecompare = e.localeCompare("e");
        var dcompare = d.localeCompare("d");
        
        if (ecompare === 0 && dcompare === 0)
        {
           textArea.value += tokens[x] + '\r\n';   
        }
        
    }
}

function getCharacterFromCode()
{
    var input = parseInt(document.getElementById("inputfield").value);
    var textArea = document.getElementById("area");
    textArea.value = 'Code    Character \r\n';
    
    var res = String.fromCharCode(input);
    textArea.value +=  input + '\t\t' + res;
    
}

function getCharacterFromCodeAll()
{
    var textArea = document.getElementById("area");
    textArea.value = 'Code    Character \r\n';
    
    for(var x = 0; x < 256;++x)
    {
        textArea.value +=  x + '\t\t' + String.fromCharCode(x) + '\r\n';
    }
      
}

function personalIndexOfMethod()
{
    var wordinput = document.getElementById("inputfield").value;
    var charinput = document.getElementById("inputfield2").value;
    var ans;
    var temp;
      
    for( var x = 0; x < wordinput.length ;++x)
    {
        temp = wordinput.substr(x,1);
        ans = temp.localeCompare(charinput);
        if(ans === 0)
        {
           document.getElementById("dis") .innerHTML = charinput + " is found " +
                      " at position " +  x  +  " in " + wordinput;
          break;
        }
    }
    
}

function personalLastIndexOfMethod()
{
    var wordinput = document.getElementById("inputfield").value;
    var charinput = document.getElementById("inputfield2").value;
    var ans;
    var temp;
      
    for( var x = wordinput.length; x > 0 ;--x)
    {
        temp = wordinput.substr(x,1);
        ans = temp.localeCompare(charinput);
        
        if(ans === 0)
        {
          document.getElementById("dis") .innerHTML = "last " + charinput +
               " is found " + " at position " +  x  +  " in " + wordinput;
           break;
        }
        
    }
    
}

function getThreeLetterWord()
{
    var wordinput = document.getElementById("inputf").value;
    var x = wordinput.length;
    var no;
    var a;
    var b;
    var c;
    var textArea = document.getElementById("area");
    
    if(x < 5)
    {
       document.getElementById("displayerror") .innerHTML = "Enter a 5 letter" + 
              "word";
    }
    else
    {
        for( var x = 0; x < 60 ;++x)
        {
            no = Math.floor(Math.random() * 3);
            a = wordinput.substr(no,1);
            
            no = Math.floor(Math.random() * 3);
            b = wordinput.substr(no,1);
            
            no = Math.floor(Math.random() * 3);
            c = wordinput.substr(no,1);
            
            'ideally a dictionary check would need to be performed on the word'
            textArea.value += a + b + c + '\r\n';
            
        }
        
    }
}

function readDate()
{
    var dat = document.getElementById("inputf").value;
    var textArea = document.getElementById("area");
    var secs = Date.parse(dat);
    var theDate = new Date(secs);
    
    textArea.value += "to string = " + theDate.toString() + '\r\n';
    textArea.value += "to date string = " + theDate.toDateString() + '\r\n';
    textArea.value += "to GMT string = " + theDate.toGMTString() + '\r\n';
    textArea.value += "to ISO string = " + theDate.toISOString() + '\r\n';
    textArea.value += "to locale date string = " + theDate.toLocaleDateString() + '\r\n';
    textArea.value += "to UTC string = " + theDate.toUTCString() + '\r\n';
    
}

function printChequeAmount()
{
    var max = 9;
    var wordinput = document.getElementById("inputf").value;
    if(wordinput < 0)
    {
        alert("Enter positive figure");
        return;
    }
    var senLength = wordinput.length;
    var padding ="";
    
    if(senLength < max)
    {
        for(x = 0; x < max - senLength;++x)
        {
           padding += "*";
        }
        
        document.getElementById("results") .innerHTML = "Cheque amount = " + 
                padding.concat(wordinput);
    }
    else
    {
        document.getElementById("results") .innerHTML = "Cheque amount = " +
                wordinput;
    }
     
}
function getTens(text)
{
    var result = "";
    var cresults = "";
    
    if(text.substring(0,1).localeCompare("1") === 0)
    {
            switch(text)
            {
                case "10":
                    result = " TEN ";
                    break;
                case "11":
                    result = " ELEVEN ";
                    break;
                case "12":
                    result = " TWELVE ";
                    break;
                case "13":
                    result = " THIRTEEN ";
                    break;
                case "14":
                    result = " FOURTEEN ";
                    break;
                case "15":
                    result = " FIFTEEN ";
                    break;
                case "16":
                    result = " SIXTEEN ";
                    break;
                case "17":
                    result = " SEVENTEEN ";
                    break;
                case "18":
                    result = " EIGHTEEN ";
                    break;
                case "19":
                    result = " NINETEEN ";
                    break;
            }
    }
    else
    {
            switch(text.substring(0,1))
            {
                case "2":
                    result = " TWENTY ";
                    break;
                case "3":
                    result = " THIRTY ";
                    break;
                case "4":
                    result = " FOURTY ";
                    break;
                case "5":
                    result = " FIFTY ";
                    break;
                case "6":
                    result = " SIXTY ";
                    break;
                case "7":
                    result = " SEVENTY ";
                    break;
                case "8":
                    result = " EIGHTY ";
                    break;
                case "9":
                    result = " NINETY ";
                    break;
            }
        cresults = getDigit(text.substring(1));  
        result += cresults;
    }
    return result;
}

function getDigit(digit)
{
    var ans = "";
    switch(digit)
    {
        case "1":
            ans = " ONE ";
            break;
        case "2":
            ans = " TWO ";
            break;
        case "3":
            ans = " THREE ";
            break;
        case "4":
            ans = " FOUR ";
            break;
        case "5":
            ans = " FIVE ";
            break;
        case "6":
            ans = " SIX ";
            break;
        case "7":
            ans = " SEVEN ";
            break;
        case "8":
            ans = " EIGHT ";
            break;
        case "9":
            ans = " NINE ";
            break;
            
    }
    
    return ans;
}

function getHundreds(text)
{
    var ans = "";
    var hund = "";
    var tns = "";
    var cnts = "";
    
    if(parseInt(text) === 0)
       return ans;
    
    text = "000" + text; //pad 000 to text e.g 6 will be 0006 , 999 will be 000999
    text = text.slice(-3);
    
    if(text.substring(0,1)!== "0") //get hundreds
    {
        hund = getDigit(text.substring(0,1)) + " HUNDRED ";
    }
    if(text.substring(1)!== "0") //get tens and digits
    {
        tns = getTens(text.substring(1));
    }
    else //get digits
    {
        cnts = getDigit(text.substring(2));
    }
    ans = hund + tns + cnts;
   
    return ans;

}

function printChequeValue()
{
    var and = " AND ";
    var multiples = new Array("","","THOUSAND","MILLION","BILLION","TRILLION");
    
    var wordinput = document.getElementById("inputf").value;
    if(wordinput < 0)
    {
        alert("Enter positive figure");
        return;
    }
    if(wordinput > 999999999999999.99)
    {
        alert("Maximum allowed is 999.99 Trillion");
        return;
    }
    
    var dot = wordinput.indexOf(".");
    if(dot < 0) 
    {
        wordinput = wordinput.concat(".00");
    }
    dot = wordinput.indexOf(".");
    
    var cents = getTens(wordinput.substring(dot+1));
    var wholenumber = wordinput.substring(0,dot);
    var tempwhole;
    var count = 1;
    var temp;
    var shillings = "";
    
    do
    {
        temp = getHundreds(wholenumber.slice(-3));
        
        if(temp !== "")
        {
            shillings = temp + multiples[count] + shillings;
        }
        if(wholenumber.length > 3)
        {
            tempwhole = wholenumber.substring(0,wholenumber.length-3);
            wholenumber = tempwhole;
        }
        else
        {
            wholenumber = "";
        }
        count += 1;
      
    }while(wholenumber !== "");
    
    switch(shillings)
    {
        case "":
            shillings += " ZERO SHILLINGS";
            break;
        case "ONE":
            shillings += " ONE SHILLING";
            break;
        default:
            shillings += " SHILLINGS";
            break;
    }
    
    switch(cents)
    {
        case "":
            cents += " ZERO CENTS ONLY";
            break;
        case "ONE":
            cents += " ONE CENT ONLY";
            break;
        default:
            cents += " CENTS ONLY";
            break;
    }
    
    document.getElementById("results") .innerHTML = "Cheque amount = " +
                shillings + and +  cents;
        
    document.getElementById("results2") .innerHTML = "Cheque amount = " +
                shillings + and +  wordinput.substring(dot+1) + " / 100";
    
    
}

function doConversion()
{
    var selected = document.getElementById("choices");
    var selectedTextOne = selected.options[selected.selectedIndex].text;
    
    var selected2 = document.getElementById("choices2");
    var selectedTextTwo = selected2.options[selected2.selectedIndex].text;
    
    var amt = parseFloat(document.getElementById("inputf").value);
    //alert(amt);
    var ans;
    
    if(selected.selectedIndex === 0 && selected2.selectedIndex === 4)
    {
       ans = amt * 100; 
       document.getElementById("ans").innerHTML =  ans + " centimetre(s)" +
               " = " + amt + " metre(s)"; 
    }
    
    else if(selected.selectedIndex === 0 && selected2.selectedIndex === 5)
    {
       ans = amt * 30.48; 
       document.getElementById("ans").innerHTML = ans + " centimetre(s)" +
               " = " + amt + " foot(feet)"; 
    }
    
    else if(selected.selectedIndex === 5 && selected2.selectedIndex === 0)
    {
       ans = amt / 30.48; 
       document.getElementById("ans").innerHTML = ans + " foot(feet)" +
               " = " + amt + " centimetre(s)"; 
    }
    
    else if(selected.selectedIndex === 0 && selected2.selectedIndex === 6)
    {
       ans = amt * 2.54;
       document.getElementById("ans").innerHTML = ans + " centimetre(s)" +
               " = " + amt + " inche(s)"; 
    }
    
    else if(selected.selectedIndex === 6 && selected2.selectedIndex === 0)
    {
       ans = amt / 2.54;
       document.getElementById("ans").innerHTML = ans + " inche(s)" +
               " = " + amt + " centimetre(s)"; 
    }
    
    else if(selected.selectedIndex === 1 && selected2.selectedIndex === 7)
    {
       ans = amt * 0.946352946; 
       document.getElementById("ans").innerHTML = ans + " litre(s)" +
               " = " + amt + " quart(s)";
    }
    
    else if(selected.selectedIndex === 7 && selected2.selectedIndex === 1)
    {
       ans = amt / 0.946352946; 
       document.getElementById("ans").innerHTML = ans + " quart(s)" +
               " = " + amt + " litre(s)";
    }
    
    else if(selected.selectedIndex === 2 && selected2.selectedIndex === 3)
    {
       ans = amt * 1000; 
       document.getElementById("ans").innerHTML = ans + " gramme(s)" +
               " = " + amt + " kilogram(s)"; 
    }
    
    else if(selected.selectedIndex === 3 && selected2.selectedIndex === 2)
    {
       ans = amt / 1000; 
       document.getElementById("ans").innerHTML = ans + " kilogram(s)" +
               " = " + amt + " gramme(s)"; 
    }
    
    else if(selected.selectedIndex === 4 && selected2.selectedIndex === 0)
    {
       ans = amt / 100; 
       document.getElementById("ans").innerHTML = ans + " metre(s)" +
               " = " + amt + " centimetres()"; 
    }
    
    else if(selected.selectedIndex === 4 && selected2.selectedIndex === 5)
    {
       ans = amt / 3.2808399; 
       document.getElementById("ans").innerHTML = ans + " metre(s)" +
               " = " + amt + " foot(feet)"; 
    }
    
    else if(selected.selectedIndex === 5 && selected2.selectedIndex === 4)
    {
       ans = amt * 3.2808399; 
       document.getElementById("ans").innerHTML = ans + " foot(feet)" +
               " = " + amt + " metre(s)"; 
    }
    
    else if(selected.selectedIndex === 4 && selected2.selectedIndex === 6)
    {
       ans = amt / 39.3700787; 
       document.getElementById("ans").innerHTML = ans + " metre(s)" +
               " = " + amt + " inche(s)"; 
    }
    
    else if(selected.selectedIndex === 6 && selected2.selectedIndex === 4)
    {
       ans = amt * 39.3700787; 
       document.getElementById("ans").innerHTML = ans + " inche(s)" +
               " = " + amt + " metre(s)"; 
    }
    
    else if(selected.selectedIndex === 5 && selected2.selectedIndex === 6)
    {
       ans = amt / 12; 
       document.getElementById("ans").innerHTML = ans + " foot(feet)" +
               " = " + amt + " inche(s)"; 
    }
    
    else if(selected.selectedIndex === 6 && selected2.selectedIndex === 5)
    {
       ans = amt * 12; 
       document.getElementById("ans").innerHTML = ans + " inche(s)" +
               " = " + amt + " foot(feet)"; 
    }
    
    
    else
    {
       document.getElementById("ans").innerHTML = "Invalid Conversion";
    }
    
    //reverse
//    if(selected.selectedIndex === 4 && selected2.selectedIndex === 0)
//    {
//       ans = amt / 100; 
//       document.getElementById("ans").innerHTML = "There are " + ans + " metres" +
//               " in " + amt + " centimetres"; 
//    }
//    
//    else if(selected.selectedIndex === 5 && selected2.selectedIndex === 0)
//    {
//       ans = amt / 30.48; 
//       document.getElementById("ans").innerHTML = "There are " + ans + " feet" +
//               " in " + amt + " centimetres";  
//    }
//    
//    else if(selected.selectedIndex === 6 && selected2.selectedIndex === 0)
//    {
//       ans = amt / 2.54; 
//       document.getElementById("ans").innerHTML = "There are " + ans + " inches" +
//               " in " + amt + " centimetres";
//    }
//    
//    else if(selected.selectedIndex === 7 && selected2.selectedIndex === 1)
//    {
//       ans = amt / 0.946352946; 
//       document.getElementById("ans").innerHTML = "There are " + ans + " quarts" +
//               " in " + amt + " litres";  
//    }
//    
//    else if(selected.selectedIndex === 3 && selected2.selectedIndex === 2)
//    {
//       ans = amt / 1000; 
//       document.getElementById("ans").innerHTML = "There are " + ans + " kilograms" +
//               " in " + amt + " grammes";  
//    }
//    
//    else
//    {
//       document.getElementById("ans").innerHTML = "Invalid Conversion";
//    }
    
}