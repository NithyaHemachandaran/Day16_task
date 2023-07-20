var count=document.getElementById("0");
count.innerHTML="10";
var count1=document.getElementById("1");
setTimeout(()=>count1.innerHTML="9",1000);
var count2=document.getElementById("2");
setTimeout(()=>count2.innerHTML="8",2000);
var count3=document.getElementById("3");
setTimeout(()=>count3.innerHTML="7",3000);
var count4=document.getElementById("4");
setTimeout(()=>count4.innerHTML="6",4000);
var count5=document.getElementById("5");
setTimeout(()=>count5.innerHTML="5",5000);
var count6=document.getElementById("6");
setTimeout(()=>count6.innerHTML="4",6000);
var count7=document.getElementById("7");
setTimeout(()=>count7.innerHTML="3",7000);
var count8=document.getElementById("8");
setTimeout(()=>count8.innerHTML="2",8000);
var count9=document.getElementById("9");
setTimeout(()=>count9.innerHTML="1",9000);

document.body.append(count,count1,count2,count3,count4,count5,count6,count7,count8,count9);

var text=document.createElement("p")
setTimeout(()=>text.innerHTML="Happy Independence day",10000);
document.body.append(text);