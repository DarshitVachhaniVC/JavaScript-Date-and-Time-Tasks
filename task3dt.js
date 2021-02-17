let input =prompt("Enter the first date in mm/yyyy format",);
let monthvar1,yearvar1,monthvar2,yearvar2;
monthvar1=parseInt(input.split("/")[0]);
yearvar1=parseInt(input.split("/")[1]);
input =prompt("Enter the second date in mm/yyyy format",);
monthvar2=parseInt(input.split("/")[0]);
yearvar2=parseInt(input.split("/")[1]);
diffinmonths(monthvar1,yearvar1,monthvar2,yearvar2);
function diffinmonths(mon1,year1,mon2,year2)
{
    /*console.log(year1)
    console.log(year2)
    let diff = year1-year2;*/
    let diff = 12 * (Math.abs(year1-year2)) + Math.abs(mon1-mon2);
    console.log("The difference between boht dates is ",diff);
}