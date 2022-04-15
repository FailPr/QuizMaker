var Question=[];
var CorrectWrongCounter={Correct:0,Correct_Question:{Question:[],Answer:[]},Wrong:0,Wrong_Question:{Question:[],Answer:[]}};
function Send()
{
    const i =document.getElementById('dropdownselection').value;
    $.ajax({
        url: "scripts/php/search.php",
        type: "post",
        dataType: "json",
        data: { Helper: "Send", Info: i },
        success: function (result) {
            if(result.a=="Error")
            {
                return;
            }

            Question=result.a;
            Question=JSON.parse(Question);
            show();
        },
      });
}

function show()
{
    const rand = Math.floor(Math.random() * Question.length);
    document.getElementById("SearchQuestionId").innerHTML="";
    document.getElementById("SearchQuestionId").innerHTML=`
    <div class="container text-center text-black animate__animated animate__zoomIn animate__slow">
        <div class="container text-center text-black mt-4">
            <h1 id="Question">${Question[rand].Question}</h1>
        </div>
        <div class="container text-center text-black mt-4 animate__animated animate__zoomIn animate__slow" id="Buttons_1">
        <button type="button" class="btn btn-outline-primary mt-4 btn-lg btn-block" style="width: 300px;" id="Answer_1" value="${Question[rand].Answer_1}" onclick="AnswerCheck(this.value)"><p id="answerButtonP">${Question[rand].Answer_1}</p></button>
        <button type="button" class="btn btn-outline-primary mt-4 btn-lg btn-block "style="width: 300px;"id="Answer_2" value="${Question[rand].Answer_2}" onclick="AnswerCheck(this.value)"><p id="answerButtonP">${Question[rand].Answer_2}</p></button>
        </div>
        <div class="container text-center text-black mt-4 animate__animated animate__zoomIn animate__slow" id="Buttons_2">
        <button type="button" class="btn btn-outline-primary mt-4 btn-lg btn-block "style="width: 300px;" id="Answer_3" value="${Question[rand].Answer_3}" onclick="AnswerCheck(this.value)"><p id="answerButtonP">${Question[rand].Answer_3}</p></button>
        <button type="button" class="btn btn-outline-primary mt-4 btn-lg btn-block "style="width: 300px;" id="Answer_4" value="${Question[rand].Answer_4}" onclick="AnswerCheck(this.value)"><p id="answerButtonP">${Question[rand].Answer_4}</p></button>
        </div>
    </div>`;
}

function AnswerCheck(Answer)
{
    const index=FindQuestion();
    if(Question[index].CorrectAnswer==Answer)
    {
        console.log("Correct");
        CorrectWrongCounter.Correct+=1;
        CorrectWrongCounter.Correct_Question.Question.push(Question[index].Question);
        CorrectWrongCounter.Correct_Question.Answer.push(Answer);
        Button_Colors(index);
        setTimeout(() => {  RemoveQuestionFromArray(index); random_question(); }, 1000);

    }
    else
    {
        console.log("Incorrect");
        CorrectWrongCounter.Wrong_Question.Question.push(Question[index].Question);
        CorrectWrongCounter.Wrong_Question.Answer.push(Answer);
        CorrectWrongCounter.Wrong+=1;
        Button_Colors(index);
        setTimeout(() => {  RemoveQuestionFromArray(index); random_question(); }, 1000);
    }
}

function Button_Colors(i)
{
    const Buttons=[];
    Buttons.push("Answer_1");
    Buttons.push("Answer_2");
    Buttons.push("Answer_3");
    Buttons.push("Answer_4");
    for (let index = 0; index < Buttons.length; index++) 
    {
        if(document.getElementById(Buttons[index]).value == Question[i].CorrectAnswer)
        {
            document.getElementById(Buttons[index]).className="btn btn-success mt-4 btn-lg btn-block disabled";
        }
        else
        {
            document.getElementById(Buttons[index]).className="btn btn-danger mt-4 btn-lg btn-block disabled";
        }
        document.getElementById(Buttons[index]).style.cursor="not-allowed";
    }
    setTimeout(() => {    for (let index = 0; index < Buttons.length; index++) 
        {
            document.getElementById(Buttons[index]).className="btn btn-outline-primary mt-4 btn-lg btn-block ";
            document.getElementById(Buttons[index]).style.cursor="";
        }}, 500);

}

function FindQuestion()
{
    find = document.getElementById('Question').innerHTML;
    const index = Question.map(object => object.Question).indexOf(find);
    return index;
}

function RemoveQuestionFromArray(index)
{
    if (index > -1) {
        Question.splice(index, 1);
      }
}

function random_question()
{
    if(Question.length>0)
    {
        const rand = Math.floor(Math.random() * Question.length);
        console.log(Question[rand]);
        document.getElementById("Question").innerHTML=Question[rand].Question;
        document.getElementById("Answer_1").innerHTML=Question[rand].Answer_1;
        document.getElementById("Answer_1").value=Question[rand].Answer_1;
        document.getElementById("Answer_2").innerHTML=Question[rand].Answer_2;
        document.getElementById("Answer_2").value=Question[rand].Answer_2;
        document.getElementById("Answer_3").innerHTML=Question[rand].Answer_3;
        document.getElementById("Answer_3").value=Question[rand].Answer_3;
        document.getElementById("Answer_4").innerHTML=Question[rand].Answer_4;
        document.getElementById("Answer_4").value=Question[rand].Answer_4;
        return rand;
    }
    else
    {
        document.getElementById("Question").innerHTML="Quiz End";
        document.getElementById("Question").className="animate__animated animate__zoomIn animate__slow";
        document.getElementById("Buttons_1").innerHTML="";
        document.getElementById("Buttons_2").innerHTML="";
        document.getElementById("CorrectWrongCounter").innerHTML=`
        <div class="container text-center text-black mt-4 animate__animated animate__zoomIn animate__slow" id="CorrectWrongDiv">
        <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Correct Answers: ${CorrectWrongCounter.Correct}
          <div class="image-parent">
              <img src="src/accept.png" class="img-fluid" alt="quixote">
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
        Wrong Answers: ${CorrectWrongCounter.Wrong}
        <div class="image-parent">
            <img src="src/cancel.png" class="img-fluid" alt="quixote">
        </div>
      </li>
      <li onclick="ReloadPage()" class="list-group-item d-flex justify-content-between align-items-center">
      HomePage
      <div class="image-parent">
          <img src="src/list.png" class="img-fluid" alt="quixote">
      </div>
    </li>
        </ul>
        </div>`;
        console.log(CorrectWrongCounter);
    }

}
function ReloadPage()
{
    window.location.href='index.php';
}