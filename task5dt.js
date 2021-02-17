let date =new Date(2021,01,17);
//date = prompt("Enter a date in yyyy-mm-dd format");
let weeks = prompt("Enter no. of weeks you want to add");
date.setDate( date.getDate() + weeks*7);
document.write(date);
