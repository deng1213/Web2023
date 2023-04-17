let startDate = new Date();

function setYearAndMonthAndDay(year,month,day){
    startDate.setFullYear(year);
    startDate.setMonth(month-1,day);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

$("#firstDate").click(function() {
  //console.log("in");
  var input = document.getElementById('firstDate');

  input.addEventListener('input', function() {
    var selectedDate = input.value;
  
    //console.log("y "+selectedDate);

    var dateObject = new Date(selectedDate);
    var year = dateObject.getFullYear();
    var month = dateObject.getMonth() + 1; 
    var day = dateObject.getDate();

    // console.log("year"+year);
    // console.log("month"+month);
    // console.log("day"+day);
    setYearAndMonthAndDay(year,month,day);
    //updateTable();
  });


});

$(document).ready(function() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; // 一月是0，所以要加1
  var yyyy = today.getFullYear();
  
  if (dd < 10) {
    dd = '0' + dd;
  }
  
  if (mm < 10) {
    mm = '0' + mm;
  }
  
  today = yyyy + '-' + mm + '-' + dd;

  $('#start-date').val(today);
  //console.log("today"+today)
});
