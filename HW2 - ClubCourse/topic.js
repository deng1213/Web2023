let topic =[
    "課程介紹",
    "環境準備&Lab1",
    "國定假日",
    "Lab2 & Lab3",
    "Lab4"
];

let starDate = new Date();

function setMonthAndDay(month,day){
    starDate.setMonth(month-1,day);
    starDate.setHours(0);
    starDate.setMinutes(0);
    starDate.setSeconds(0);
}

setMonthAndDay(2,21);