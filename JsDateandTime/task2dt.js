let input = prompt("Enter the month and the year seperated by commas",);
let monthvar,yearvar;
let daysofweek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let months=["January",];
function lastdayofthemonth(month,year)
{
    return daysofweek[new Date(year,month,0).getDay()];
}
monthvar=parseInt(input.split(",")[0]);
yearvar=input.split(",")[1];
document.write("Last day of " ,monthvar," ", yearvar ," is ",lastdayofthemonth(monthvar,yearvar));
