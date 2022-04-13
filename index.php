<!DOCTYPE html>
<?php include 'scripts/php/databasebuilder.php' ?>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Be Genius</title>
  </head>
  <body>
  <div class="container text-center mt-5 animate__animated animate__tada">
  <img src="src/lightbulb.png" class="rounded float-left" alt="...">
    <h1>Be Genius</h1>
  </div>
  <div class="container text-center mt-5 animate__animated animate__tada">
  <div class="row">
    <div class="col">
    <img src="src/quiz.png" class="rounded float-left" alt="...">
      <h1>Make Your Own Question Pack</h1>
      <button type="button" class="btn btn-outline-primary" onclick="window.location.href='/QuizMaker/QuestionMaker.php'">Continued</button>
    </div>
    <div class="col">
    <img src="src/quiz_player.png" class="rounded float-left" alt="...">
      <h1>View All Question Packs and Play</h1>
      <button type="button" class="btn btn-outline-success" onclick="window.location.href='/QuizMaker/QuestionPlayer.php'">Continued</button>
    </div>
  </div>
  </body>
</html>
