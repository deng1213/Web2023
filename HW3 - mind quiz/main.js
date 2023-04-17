$(function(){
    let currentQuiz =null;
    $("#startButton").on("click",function(){
        //console.log("!!");
        if(currentQuiz == null){
            currentQuiz = 0;
            $("#options").empty();
            $("#question").text(questions[0].question);

            //forEach function three parameters: array element, array index, array
            questions[0].answers.forEach(function(element, index, array){
                $("#options").append(
                    `<input name='options' type="radio" value='${index}'>`+
                    `<label>${element[0]}</label><br><br>`
                );
                $("#startButton").attr("value","下一題");

            });
            
        }
        else{
            $.each($(":radio"),function(index,value){
                //console.log(index+":"+value.checked);
                if(value.checked){
                    //go to result:A,B,C,D
                    if(isNaN(questions[currentQuiz].answers[index][1])){
                        let finalResult = questions[currentQuiz].answers[index][1];
                        $("#question").text(finalAnswers[finalResult][0]);
                        $("#options").empty();
                        $("#options").append(
                            `${finalAnswers[finalResult][1]}`+
                            `<br><br>`
                        );
                        currentQuiz=null;
                        $("#startButton").attr("value","重新開始");
                    }
                    //next question
                    else{
                        currentQuiz = questions[currentQuiz].answers[index][1] - 1;
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        questions[currentQuiz].answers.forEach(function(element, index, array){
                            $("#options").append(
                                `<input name='options' type="radio" value='${index}'>`+
                                `<label>${element[0]}</label><br><br>`
                            );
                        });

                    }
                    return false;
                }

            });
            

        }


    });






});