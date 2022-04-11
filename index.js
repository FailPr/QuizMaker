var MyQuestions = [];
function QuestionConstructor(Question,Answer_1,Answer_2,Answer_3,Answer_4,CorrectAnswer)
{
    this.Question = Question;
    this.Answer_1=Answer_1;
    this.Answer_2=Answer_2;
    this.Answer_3=Answer_3;
    this.Answer_4=Answer_4;
    this.CorrectAnswer=CorrectAnswer;
}

function addAnswers_DropDown(Answer)
{
    if(Answer=='Answer 1')
    {   document.getElementById('Option_1').style.display="inline";

        document.getElementById('Option_1').innerHTML=document.getElementById('Answer 1').value

        if(document.getElementById('Option_1').innerHTML=="")
        {
            document.getElementById('Option_1').style.display="none";
        }
    }
    else if(Answer=='Answer 2')
    {
        document.getElementById('Option_2').style.display="inline";
        document.getElementById('Option_2').innerHTML=document.getElementById('Answer 2').value
        if(document.getElementById('Option_2').innerHTML=="")
        {
            document.getElementById('Option_2').style.display="none";
        }
    }
    else if(Answer=='Answer 3')
    {
        document.getElementById('Option_3').style.display="inline";
        document.getElementById('Option_3').innerHTML=document.getElementById('Answer 3').value
        if(document.getElementById('Option_3').innerHTML=="")
        {
            document.getElementById('Option_3').style.display="none";
            console.log('true');
        }
    }
    else if(Answer=='Answer 4')
    {
        document.getElementById('Option_4').style.display="inline";
        document.getElementById('Option_4').innerHTML=document.getElementById('Answer 4').value
        if(document.getElementById('Option_4').innerHTML=="")
        {
            document.getElementById('Option_4').style.display="none";
            console.log('true');
        }
    }
}

function NextButton()
{
    if(MyQuestions.length<5)
    {
        console.log(MyQuestions);
        BuildQuestion();
        document.getElementById('Question_builder_counter').innerHTML=`Question Counter ${MyQuestions.length}/5`;
    }
}

function FinishButton()
{
    const SerializeArray = JSON.stringify(MyQuestions);
    console.log(SerializeArray);
    AddToDataBase(SerializeArray);
}

function BuildQuestion()
{
    const Question = document.getElementById("Question").value;
    const Answer_1 =document.getElementById("Answer 1").value;
    const Answer_2 =document.getElementById("Answer 2").value;
    const Answer_3 =document.getElementById("Answer 3").value;
    const Answer_4 =document.getElementById("Answer 4").value;
    const CorrectAnswer = document.getElementById("dropdownselection").value;
    MyQuestions.push(new QuestionConstructor(Question,Answer_1,Answer_2,Answer_3,Answer_4,CorrectAnswer));
}

function AddToDataBase(Question)
{
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "add.php?q=" + Question);
    xmlhttp.send();
}