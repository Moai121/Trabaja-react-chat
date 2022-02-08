<?php
        $dominio="http://localhost:3000";
        header("Access-Control-Allow-Origin: $dominio");
        header("Access-Control-Allow-Headers: content-Type");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

        $usuario=$_POST["usuario"];
        $texto=$_POST["texto"];
        $conectar=mysqli_connect("localhost","root","","chat");
        $insertar=$conectar -> prepare("INSERT INTO  mensaje (usuario,texto) VALUES (?,?)");
        $insertar -> bind_param("ss",$usuario,$texto);
        $insertar-> execute();
?>