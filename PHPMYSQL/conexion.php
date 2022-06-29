<?php
class Cconexion{
    function ConexionBD(){
        $host = 'localhost';
        $dbname = 'aprendiendoando';
        $username = 'root';
        $pasword = '';

        try {
            $conn = new PDO ("mysql:host=$host;dbname=$dbname",$username,$pasword);
            echo "Se conecto Correctamente a la BD";

        } catch (PDOException $exp) {
            echo ("No se Conecto a la BD:$dbname, error:$exp"); 
        }
        return $conn;
    }

}

?>