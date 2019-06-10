<?php
// $folder_name = 'upload/';

// if (!empty($_FILES)) {
//   $temp_file = $_FILES['file']['tmp_name'];
//   $location = $folder_name . $_FILES['file']['name'];
//   move_uploaded_file($temp_file, $location);
// }

// if (!empty($_FILES)) {
//   $name = $_FILES['file']['name'];
//   $tmp = $_FILES['file']['tmp_name'];
//   $new = time() . $name;
//   $new = "upload/" . $new;
//   move_uploaded_file($tmp, $new);
//   if ($_FILES['file']['error'] == 0) {
//     $new = 'Erro ao carregar imagem. Tente novamente';
//   }
//   echo '<pre>';
//   print_r($_FILES);
//   echo '</pre>';
// }

?>
<!doctype html>
<html lang="pt-br">

<head>
  <title>Currículo</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

  <!--Currículo CSS-->
  <link rel="stylesheet" type="text/css" href="css/curriculum.css">

</head>

<body>

  <div class="container-fuid text-left mx-3 my-3 text-center text-justify">
    <!-- <img class="img-fluid img-thumbnail float-right" src="<?php echo $new ?>"> -->
    <h1 class="float-left"><?php echo $_POST['primeiro-nome'] ?></h1><br>
    <h1 class="float-left"><?php echo ' ' . $_POST['sobrenome']; ?></h1>
    <div class="text-right" id="contato">
      <h4>Contato</h4>
      <p><?php echo $_POST['telefone']; ?></p>
      <p><?php echo $_POST['email']; ?></p>
      <p><?php echo $_POST['data_nascimento']; ?></p>
      <p><?php echo $_POST['cidade']; ?></p>
      <p><?php echo $_POST['linkedin']; ?></p>

    </div>

    <div id="data" class="container-fuid text-left mx-3 my-3">

      <h4>Resumo</h4>
      <p><?php echo $_POST['resumo']; ?></p>

      <hr>

      <h4>Objetivo</h4>
      <p><?php echo $_POST['objetivo']; ?></p>

      <hr>

      <h4>Experiência</h4>
      <ul>
        <li><?php echo $_POST['cargo1']; ?></li>
        <li><?php echo $_POST['cargo2']; ?></li>
        <li><?php echo $_POST['cargo3']; ?></li>
      </ul>

      <hr>

      <h4>Idiomas</h4>
      <ul>
        <li><?php echo $_POST['idioma1']; ?></li>
        <li><?php echo $_POST['idioma2']; ?></li>
        <li><?php echo $_POST['idioma3']; ?></li>
      </ul>

      <hr>

      <h4>Capacitações</h4>
      <ul>
        <li><?php echo $_POST['capacitacao1']; ?></li>
        <li><?php echo $_POST['capacitacao2']; ?></li>
        <li><?php echo $_POST['capacitacao3']; ?></li>
      </ul>

      <hr>

      <h4>Observações</h4>
      <p><?php echo $_POST['observacao']; ?></p>

      <hr>

    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

</body>

</html>