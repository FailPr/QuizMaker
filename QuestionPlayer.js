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
        <div class="container text-center text-black mt-4">
        <button type="button" class="btn btn-outline-primary mt-4 btn-lg btn-block" style="width: 300px;" id="${Question[rand].Answer_1}" onclick="AnswerCheck(this.id)">${Question[rand].Answer_1}</button>
        <button type="button" class="btn btn-outline-primary mt-4 btn-lg btn-block "style="width: 300px;"id="${Question[rand].Answer_2}" onclick="AnswerCheck(this.id)">${Question[rand].Answer_2}</button>
        </div>
        <div class="container text-center text-black mt-4">
        <button type="button" class="btn btn-outline-primary mt-4 btn-lg btn-block "style="width: 300px;" id="${Question[rand].Answer_3}" onclick="AnswerCheck(this.id)">${Question[rand].Answer_3}</button>
        <button type="button" class="btn btn-outline-primary mt-4 btn-lg btn-block "style="width: 300px;" id="${Question[rand].Answer_4}" onclick="AnswerCheck(this.id)">${Question[rand].Answer_4}</button>
        </div>
    </div>`;
}

function AnswerCheck(Answer)
{
    const index=FindQuestion();
    if(Question[index].CorrectAnswer==Answer)
    {
        console.log("Correct");
    }
    else
    {
        console.log("Incorrect");
    }
}

function FindQuestion()
{
    find = document.getElementById('Question').innerHTML;
    const index = Question.map(object => object.Question).indexOf(find);
    return index;
}