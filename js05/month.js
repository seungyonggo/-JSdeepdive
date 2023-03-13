// 월을 영어로 변환한다.
let month = 8;
let monthName;

switch (month) {
  case 1:
    monthName = "January";
    break;
  case 2:
    monthName = "February";
    break;
  case 3:
    monthName = "March";
    break;
  case 4:
    monthName = "April";
    break;
  case 5:
    monthName = "May";
    break;
  case 6:
    monthName = "June";
    break;
  case 7:
    monthName = "Juny";
    break;
  case 8:
    monthName = "August";
    break;
  case 9:
    monthName = "Septemver";
    break;
  case 10:
    monthName = "October";
    break;
  case 11:
    monthName = "Novemver";
    break;
  case 12:
    monthName = "December";
    break;
    dafault: monthName = "Invalid month";
}
console.log(monthName);
