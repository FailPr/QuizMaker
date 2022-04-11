<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="styles.css">
    <script src="index.js"></script>
</head>
    <title>Document</title>
  </head>
  <body>
    <div class="container text-center text-white mt-4 ">
        <img src="quiz.png" class="img-rounded" alt="Cinque Terre">
        <h1>Quiz Maker</h1>
        <p>Make your own quiz</p>
        <p id='Question_builder_counter'>Question Counter 0/5</p>
    </div>
    <div class="container-sm text-white">
    <div class="form-group">
        <label for="Question">Question:</label>
        <input type="email" class="form-control" id="Question" placeholder="Question...">
    </div>
    <div class="form-group">
        <label for="Question">Answer 1:</label>
        <input type="email" class="form-control" id="Answer 1" onkeyup='addAnswers_DropDown(this.id)' placeholder="Answer 1...">
    </div>
    <div class="form-group">
        <label for="Question">Answer 2:</label>
        <input type="email" class="form-control" id="Answer 2" onkeyup='addAnswers_DropDown(this.id)' placeholder="Answer 2...">
    </div>
    <div class="form-group">
        <label for="Question">Answer 3:</label>
        <input type="email" class="form-control" id="Answer 3" onkeyup='addAnswers_DropDown(this.id)' placeholder="Answer 3...">
    </div>
    <div class="form-group">
        <label for="Question">Answer 4:</label>
        <input type="email" class="form-control" id="Answer 4" onkeyup='addAnswers_DropDown(this.id)' placeholder="Answer 4...">
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
  </body>
</html>
