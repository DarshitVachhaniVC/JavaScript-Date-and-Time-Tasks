let date = new Date(2021,01,16);
let day = date.getDay();
let diff = 7 - day;
if(day == 0)
{
    document.write("Today is the end of the week ",date);
}
else
{
    date.setDate( date.getDate() + diff);
    document.write(date);
}
/*let date = new Date(2020,11,30);//Date Object//Input for 30th december 2020
let datevar = date.getDate();//Date variable
let day = date.getDay();//Day variable
let monvar =date.getMonth();//Month Varibale
let yearvar =date.getFullYear();//year Variable


let monthlastdate = new Date(yearvar,monvar+1,0).getDate();

let diff = 7-day;
let weekend;
weekend=datevar+diff;
console.log("weekend",weekend);
console.log("Month last date",monthlastdate);
if(weekend>monthlastdate)
{
    console.log(weekend-monthlastdate);
}
else
{
    console.log(weekend);
}*/






