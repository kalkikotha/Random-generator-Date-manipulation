// Random generation of eight digit number 
var container = document.createElement("div");
container.setAttribute("class", "container");

var row = document.createElement("div");
row.setAttribute("class", "row");

var col = document.createElement("div");
col.setAttribute("class", "offset-2 col-8 text-center");

var p = document.createElement('h1');
p.innerHTML = "Random Generation of an Eight Digit Number:";
p.setAttribute('class','text-primary')

var button = document.createElement('button');
button.setAttribute('class', 'btn btn-secondary');
button.setAttribute('onclick', 'generated()');
button.innerHTML = "Click for Random number";

var p1 = document.createElement('h1');
p1.setAttribute('id', 'demo');
p1.setAttribute('class','text-info')

let count=[];
function generated() {
    var x= document.getElementById('demo');
    let digit= Math.floor((Math.random() * 9) + 1);
    if(count.length ===8){
        x.innerHTML=count.join('');
       
    }
    else{
        if(!count.includes(digit)){
            count.push(digit);
        }
        generated();
    }
   
}

col.append(p,button,p1);

// Exact age with time difference
var head = document.createElement("h1");
head.innerHTML = "For exact age with time difference enter DOB";
head.setAttribute('class','text-primary mt-5');

var inp=document.createElement("input");
inp.setAttribute("type",'text');
inp.setAttribute('class','form-control');
inp.setAttribute('placeholder','MM/DD/YYYY');

var button2 = document.createElement("button");
button2.setAttribute("class","btn btn-secondary");
button2.innerHTML = "Generate!";
button2.setAttribute("onclick", "diff()");

var day = document.createElement("h2");
day.setAttribute('class','text-info');
var year = document.createElement("h2");
year.setAttribute('class','text-info');
var month = document.createElement("h2");
month.setAttribute('class','text-info');
var min = document.createElement("h2");
min.setAttribute('class','text-info');
var sec = document.createElement("h2");
sec.setAttribute('class','text-info');
var msec = document.createElement("h2");
msec.setAttribute('class','text-info');

function diff(){
    var DOB = new Date(inp.value);
    var CDate = new Date();
    
    var timediff = CDate.getTime()-DOB.getTime();
    var daydiff = Math.floor(timediff/(1000 * 60 * 60 * 24));
    day.innerHTML="Days : " + daydiff;
    //year diff
    var yeardiff = (CDate.getFullYear() - DOB.getFullYear());
    year.innerHTML="Years : " + (yeardiff-1);
    //month diff
    var monthdiff = (yeardiff)*12 + (CDate.getMonth() - 1 - DOB.getMonth());
    month.innerHTML="Months : " + monthdiff;
    //minutes diff
    var minsdiff = (daydiff * 24 * 60);
    min.innerHTML="Minutes : " + minsdiff;
    //secnds diff
    var secdiff = (minsdiff * 60);
    sec.innerHTML="Seconds : " + secdiff;
    //milliseconds diff
    var msecdiff = (timediff);
    msec.innerHTML="Milli seconds : " + msecdiff;
}

col.append(head,inp,button2,day,year,month,min,sec,msec);

row.append(col);

container.append(row);

document.body.append(container);