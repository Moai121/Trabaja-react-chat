<?php
        $dominio="http://localhost:3000";
        header("Access-Control-Allow-Origin: $dominio");
        header("Access-Control-Allow-Headers: content-Type");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

        $usuario=$_POST["usuario"];
        $correo=$_POST["correo"];
        $conectar=mysqli_connect("localhost","root","","chat");
        $insertar=$conectar -> prepare("INSERT INTO  usuarios (usuario,correo) VALUES (?,?)");
        $insertar -> bind_param("ss",$usuario,$correo);
        $insertar-> execute();
?>