<!DOCTYPE html>
<?php include 'scripts/php/databasebuilder.php'; ?>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/png" href="src/quiz.png"/>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <link rel="stylesheet" href="css/styles.css">
    <script src="scripts/js/index.js"></script>
</head>
    <title>QuizMaker</title>
  </head>
  <body class="animate__animated animate__zoomIn animate__slow">
    <div class="container text-center text-black mt-4 ">
        <img src="src/quiz.png" class="img-rounded" alt="Cinque Terre">
        <h1>Quiz Maker</h1>
        <p>Make your own quiz</p>
        <p id='Question_builder_counter'>Question Counter 0/5</p>
    </div>
    <div class="container-sm text-black">
    <div class="form-group">
        <label for="Question">Question:</label>
        <input type="email" class="form-control" id="Question">
    </div>
    <div class="form-group">
        <label for="Question">Answer 1:</label>
        <input type="email" class="form-control" id="Answer 1" onkeyup='addAnswers_DropDown(this.id)'>
    </div>
    <div class="form-group">
        <label for="Question">Answer 2:</label>
        <input type="email" class="form-control" id="Answer 2" onkeyup='addAnswers_DropDown(this.id)'>
    </div>
    <div class="form-group">
        <label for="Question">Answer 3:</label>
        <input type="email" class="form-control" id="Answer 3" onkeyup='addAnswers_DropDown(this.id)'>
    </div>
    <div class="form-group">
        <label for="Question">Answer 4:</label>
        <input type="email" class="form-control" id="Answer 4" onkeyup='addAnswers_DropDown(this.id)'>
    </div>
    <div class="form-group">
        <label for="Question">Choose your Correct Answer:</label>
        <select class="form-select" id="dropdownselection" aria-label="Default select example">
            <option selected>Click here and choose your correct answer</option>
            <option calss="d-none" id='Option_1'></option>
            <option calss="d-none" id='Option_2'></option>
            <option calss="d-none" id='Option_3'></option>
            <option calss="d-none" id='Option_4'></option>
        </select>
    </div>
</div>
<div class="container d-flex flex-row-reverse">
<div class="p-2"><button type="button" class="btn btn-warning"onclick="FinishButton()" id="Finish_Btn" >Finish</button></div>
  <div class="p-2"><button type="button" class="btn btn-success" onclick="NextButton()" id="Next_Btn">Next</button></div>
</div>
<div class="container text-center mt-4 mb-4">
    <button type="button" class="btn btn-outline-primary" onclick="window.location.href='index.php'">Main Menu</button>
</div>
<div class="container" id='Error_Div'>
</div>
  </body>
</html>
