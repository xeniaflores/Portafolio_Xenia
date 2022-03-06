<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	 <link rel="stylesheet" href="form.css" />
	<title>Unidades Valorativas</title>
</head>
<body>
	<form method="post">
		<h3>Ingresar Datos</h3><br>
			
			<label>Estudiante </label><input type="text" name="nombre"><br><br>

			<label>Materia1 UV </label><input type="number" name="materia1" value="materia1"><br><br>

			<label>nota </label><input type="float" name="nota1" ><br><br>

			<label>Materia2 UV </label><input type="number" name="materia2" value="materia2"><br><br>

			<label>nota </label><input type="float" name="nota2"><br><br>

			<label>Materia3 UV </label><input type="number" name="materia3" value="materia3"><br><br>

			<label>nota </label><input type="float" name="nota3"><br><br>

			<label>Materia4 UV </label><input type="number" name="materia4" value="materia4"><br><br>

			<label>nota </label><input type="float" name="nota4"><br><br>

			<label>Materia5 UV </label><input type="number" name="materia5" value="materia5"><br><br>

			<label>nota </label><input type="float" name="nota5"><br><br>


			<input type="submit" name="calcular" value="calcular"><br><br>
	</form>
<?php
	 	
		if(isset($_POST["calcular"])){
			$Estudiante=$_POST["nombre"];
			$Materia1=$_POST["materia1"];
	        $Materia2=$_POST["materia2"];
	        $Materia3=$_POST["materia3"];
	        $Materia4=$_POST["materia4"];
	        $Materia5=$_POST["materia5"];

	        $Nota1=$_POST["nota1"];
	        $Nota2=$_POST["nota2"];
	        $Nota3=$_POST["nota3"];
	        $Nota4=$_POST["nota4"];
	        $Nota5=$_POST["nota5"];

       		if($Materia1 != "" || $Materia2 != "" || $Materia3 != "" || $Materia4 != "" || $Materia5 != "")
       		{    			
       			$UM1=(($Materia1*$Nota1)+($Materia2*$Nota2)+($Materia3*$Nota3)+($Materia4*$Nota4)+($Materia5)*($Nota5))/($Materia1+$Materia2+$Materia3+$Materia4+$Materia5);

        		echo "Estudiante: " .$Estudiante; 
        		echo "<br>";
        		echo " CUM de " .number_format($UM1 , 2);

        		if($UM1 < 6.0){
        			echo " Podrá cursar un máximo de 16 unidades valorativas en el proximo ciclo";
        		}
        		else if($UM1 >= 6.0 && $UM1 < 7.0){
        			echo " Podrá cursar un máximo de 20 unidades valorativas en el proximo ciclo";
        		}
        		else if($UM1 >= 7.0 && $UM1 < 7.5){
        			echo " Podrá cursar un máximo de 24 unidades valorativas en el proximo ciclo";
        		}
        		else{
        			echo " Podrá cursar un máximo de 32 unidades valorativas en el proximo ciclo";
        		}
       		}
        	else{
        		echo "Debe completar todo";
        	}
    	}
    		
?>
</body>
</html>