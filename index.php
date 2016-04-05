<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

  
    <link href='https://fonts.googleapis.com/css?family=Lato:400,700,300' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Merriweather' rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" type='text/css'>

    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/datepicker/bootstrap-datepicker.css" rel="stylesheet">
    <link href="css/form.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
</head>

<body>

	<div style="padding:10%">
		<button type="button" id="candNavIndietro" class="btn btn-default" style="display: none;"><i class="fa fa-arrow-left"></i></button>
		<button type="button" id="candNavAvanti" class="btn btn-primary" style="display: inline-block;"><i class="fa fa-arrow-right"></i></button>
	</div>
	<div style="padding:10%">
				<?php
				function carica_file($path){
				$p=$path;
				$f=fopen($p,'r');
				$ret=fread($f,filesize($p));
				fclose($f);
				return $ret;
				}
				$form=carica_file('form.html');
				echo($form);
				?>
	</div>
    <script src="js/bootstrap.js"></script>
    <script src="js/pesCandidatura.js"></script>
    <script src="js/pes/form.js"></script>
    <script src="js/pes/datepicker/bootstrap-datepicker.js"></script>
</body>
</html>
