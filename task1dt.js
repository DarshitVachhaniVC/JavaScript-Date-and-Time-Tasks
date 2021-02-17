let input = prompt("Enter the month and the year seperated by commas");
let monthvar,yearvar;
function daysinamonth(month,year)
{
    return new Date(year,month,0).getDate();
}
monthvar=input.split(",")[0];
yearvar=input.split(",")[1];
document.write("No. of days in this month is " ,daysinamonth(monthvar,yearvar));
