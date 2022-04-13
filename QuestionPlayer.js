var Question=[];
function Send()
{
    const i =document.getElementById('dropdownselection').value;
    $.ajax({
        url: "search.php",
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
    <div class="container text-center text-black">
        <div class="container text-center text-black mt-4">
            <h1 id="Question">${Question[rand].Question}</h1>
        </div>
        <div class="container text-center text-black mt-4" id="Buttons_1">
        <button type="button" class="btn btn-outline-primary mt-4 btn-lg btn-block" style="width: 300px;" id="Answer_1" value="${Question[rand].Answer_1}" onclick="AnswerCheck(this.value)">${Question[rand].Answer_1}</button>
        <button type="button" class="btn btn-outline-primary mt-4 btn-lg btn-block "style="width: 300px;"id="Answer_2" value="${Question[rand].Answer_2}" onclick="AnswerCheck(this.value)">${Question[rand].Answer_2}</button>
        </div>
        <div class="container text-center text-black mt-4" id="Buttons_2">
        <button type="button" class="btn btn-outline-primary mt-4 btn-lg btn-block "style="width: 300px;" id="Answer_3" value="${Question[rand].Answer_3}" onclick="AnswerCheck(this.value)">${Question[rand].Answer_3}</button>
        <button type="button" class="btn btn-outline-primary mt-4 btn-lg btn-block "style="width: 300px;" id="Answer_4" value="${Question[rand].Answer_4}" onclick="AnswerCheck(this.value)">${Question[rand].Answer_4}</button>
        </div>
    </div>`;
}

function AnswerCheck(Answer)
{
    const index=FindQuestion();
    if(Question[index].CorrectAnswer==Answer)
    {
        console.log("Correct");
        Button_Colors(Answer,index);
        setTimeout(() => {  RemoveQuestionFromArray(index); random_question(); }, 1000);

    }
    else
    {
        console.log("Incorrect");
        Button_Colors(Answer,index);
        setTimeout(() => {  RemoveQuestionFromArray(index); random_question(); }, 1000);
    }
}

function Button_Colors(Answer,i)
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
            document.getElementById(Buttons[index]).className="btn btn-success mt-4 btn-lg btn-block";
        }
        else
        {
            document.getElementById(Buttons[index]).className="btn btn-danger mt-4 btn-lg btn-block"
        }
    }
    setTimeout(() => {    for (let index = 0; index < Buttons.length; index++) 
        {
            document.getElementById(Buttons[index]).className="btn btn-outline-primary mt-4 btn-lg btn-block";
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
        document.getElementById("Buttons_1").innerHTML="";
        document.getElementById("Buttons_2").innerHTML="";
    }
}