<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <link rel="stylesheet" href="styles.css">
    <script src="QuestionPlayer.js"></script>
    <title>QuestionPlayer</title>
  </head>
  <body class="animate__animated animate__zoomIn animate__slow" id="QuestionPlayerBody">
  <div class="container text-center text-black mt-6">
        <img src="quiz_player.png" class="img-rounded" alt="Cinque Terre">
        <h1>Quiz Player</h1>
        <p>Strong minds discuss <strong>ideas</strong>, average minds discuss <strong>events</strong>, weak minds discuss <strong>people</strong> -Socrates</p>
    </div>
    <div class="container text-center text-black mt-4 d-flex justify-content-center" id="SearchQuestionId">
    <div class="form-group w-50">
        <label for="Question">Choose Question Pack</label>
        <select class="form-select" id="dropdownselection" aria-label="Default select example">
            <option selected>Click here and choose Question Pack</option>
            <?php include 'search.php';
select_from_db_questions(); ?>
        </select>
        <button type="button" class="btn btn-primary mt-4" onclick="Send()">Search</button>
    </div>
    </div>
    <div lass="container text-center text-black mt-4" id="CorrectWrongCounter"></div>
    
  </body>
</html>
