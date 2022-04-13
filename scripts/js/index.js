var MyQuestions = [];
function QuestionConstructor(
  Question,
  Answer_1,
  Answer_2,
  Answer_3,
  Answer_4,
  CorrectAnswer
) {
  this.Question = Question;
  this.Answer_1 = Answer_1;
  this.Answer_2 = Answer_2;
  this.Answer_3 = Answer_3;
  this.Answer_4 = Answer_4;
  this.CorrectAnswer = CorrectAnswer;
}

function addAnswers_DropDown(Answer) {
  if (Answer == "Answer 1") {
    document.getElementById("Option_1").style.display = "inline";

    document.getElementById("Option_1").innerHTML =
      document.getElementById("Answer 1").value;

    if (document.getElementById("Option_1").innerHTML == "") {
      document.getElementById("Option_1").style.display = "none";
    }
  } else if (Answer == "Answer 2") {
    document.getElementById("Option_2").style.display = "inline";
    document.getElementById("Option_2").innerHTML =
      document.getElementById("Answer 2").value;
    if (document.getElementById("Option_2").innerHTML == "") {
      document.getElementById("Option_2").style.display = "none";
    }
  } else if (Answer == "Answer 3") {
    document.getElementById("Option_3").style.display = "inline";
    document.getElementById("Option_3").innerHTML =
      document.getElementById("Answer 3").value;
    if (document.getElementById("Option_3").innerHTML == "") {
      document.getElementById("Option_3").style.display = "none";
    }
  } else if (Answer == "Answer 4") {
    document.getElementById("Option_4").style.display = "inline";
    document.getElementById("Option_4").innerHTML =
      document.getElementById("Answer 4").value;
    if (document.getElementById("Option_4").innerHTML == "") {
      document.getElementById("Option_4").style.display = "none";
    }
  }
}

function NextButton() {
  if (MyQuestions.length < 5) {
    BuildQuestion();
    document.getElementById(
      "Question_builder_counter"
    ).innerHTML = `Question Counter ${MyQuestions.length}/5`;
  }
  if (MyQuestions.length > 0) {
    document.getElementById("Finish_Btn").style.display = "inline";
  }
  if (MyQuestions.length == 5) {
    document.getElementById("Next_Btn").style.display = "none";
  }
}

function Question_builder_counter_animation() {
  const element = document.getElementById("Question_builder_counter");
  element.classList.add("animate__animated", "animate__heartBeat");

  element.addEventListener("animationend", () => {
    document.getElementById("Question_builder_counter").className = "";
  });
}

function FinishButton() {
  const SerializeArray = JSON.stringify(MyQuestions);
  $.ajax({
    url: "scripts/php/add.php",
    type: "post",
    dataType: "json",
    data: { Helper: "Send", Info: SerializeArray },
    success: function (result) {
      console.log(result.a);
      if (result.a == "New record created successfully") {
        document.getElementById("Error_Div").innerHTML = "";
        document.getElementById(
          "Error_Div"
        ).innerHTML += `<ul class="list-group" id="list_errors">
            <li class="list-group-item">Action Result:</li>`;
        document.getElementById(
          "list_errors"
        ).innerHTML += `<li class="list-group-item list-group-item-success">${result.a}</li>
            <li class="list-group-item list-group-item-primary">Page Reloaded in 3s</li>`;
        document.getElementById("Error_Div").innerHTML += "</ul>";
      }
    },
  });
  setTimeout(() => {
    refresh_page();
  }, 100000000000);
}

function BuildQuestion() {
  const Question = document.getElementById("Question").value;
  const Answer_1 = document.getElementById("Answer 1").value;
  const Answer_2 = document.getElementById("Answer 2").value;
  const Answer_3 = document.getElementById("Answer 3").value;
  const Answer_4 = document.getElementById("Answer 4").value;
  const CorrectAnswer = document.getElementById("dropdownselection").value;
  const Errors = BuilQuestionErrors();
  if (Errors.length == 0) {
    MyQuestions.push(
      new QuestionConstructor(
        Question,
        Answer_1,
        Answer_2,
        Answer_3,
        Answer_4,
        CorrectAnswer
      )
    );
    clear();
    Question_builder_counter_animation();
  }
}

function BuilQuestionErrors() {
  const Errors = [];
  if (document.getElementById("Question").value == "") {
    Errors.push("Question Input Can't be null");
  }
  if (document.getElementById("Answer 1").value == "") {
    Errors.push("Answer 1 Input Can't be null");
  }
  if (document.getElementById("Answer 2").value == "") {
    Errors.push("Answer 2 Input Can't be null");
  }
  if (document.getElementById("Answer 3").value == "") {
    Errors.push("Answer 3 Input Can't be null");
  }
  if (document.getElementById("Answer 4").value == "") {
    Errors.push("Answer 4 Input Can't be null");
  }
  if (
    document.getElementById("dropdownselection").value ==
    "Click here and choose your correct answer"
  ) {
    Errors.push("Please Select Correct Answer");
  }
  if (
    document.getElementById("Answer 1").value !=
    document.getElementById("Option_1").innerHTML
  ) {
    Errors.push("Something Wrong");
  }
  if (
    document.getElementById("Answer 2").value !=
    document.getElementById("Option_2").innerHTML
  ) {
    Errors.push("Something Wrong");
  }
  if (
    document.getElementById("Answer 3").value !=
    document.getElementById("Option_3").innerHTML
  ) {
    Errors.push("Something Wrong");
  }
  if (
    document.getElementById("Answer 4").value !=
    document.getElementById("Option_4").innerHTML
  ) {
    Errors.push("Something Wrong");
  }
  if (Errors.length > 0) {
    document.getElementById("Error_Div").innerHTML = "";
    document.getElementById(
      "Error_Div"
    ).innerHTML += `<ul class="list-group" id="list_errors">
        <li class="list-group-item">Errors:</li>`;
    for (let index = 0; index < Errors.length; index++) {
      document.getElementById(
        "list_errors"
      ).innerHTML += `<li class="list-group-item list-group-item-danger">${Errors[index]}</li>`;
    }
    document.getElementById("Error_Div").innerHTML += "</ul>";
  } else {
    document.getElementById("Error_Div").innerHTML = "";
  }
  return Errors;
}

function AddToDataBase(Question) {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "add.php?q=" + Question);
  xmlhttp.send();
}

function clear() {
  document.getElementById("Question").value = "";
  document.getElementById("Answer 1").value = "";
  document.getElementById("Answer 2").value = "";
  document.getElementById("Answer 3").value = "";
  document.getElementById("Answer 4").value = "";
  document.getElementById("Option_1").innerHTML = "";
  document.getElementById("Option_2").innerHTML = "";
  document.getElementById("Option_3").innerHTML = "";
  document.getElementById("Option_4").innerHTML = "";
  document.getElementById("Option_1").style.display = "none";
  document.getElementById("Option_2").style.display = "none";
  document.getElementById("Option_3").style.display = "none";
  document.getElementById("Option_4").style.display = "none";
  document.getElementById("dropdownselection").value =
    "Click here and choose your correct answer";
}

function refresh_page() {
  location.reload();
}
