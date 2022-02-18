<?php
        $dominio="http://localhost:3000";
        header("Access-Control-Allow-Origin: $dominio");
        header("Access-Control-Allow-Headers: content-Type");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

        $conectar=mysqli_connect("localhost","root","","chat");
        $usuario=$_POST["usuario"];
        $correo=$_POST["correo"];
        
        $comprobar=("SELECT * FROM usuarios");
        $done=mysqli_query($conectar,$comprobar);
        $done=mysqli_fetch_all($done,MYSQLI_ASSOC);

                foreach($done as $opcion){
                        $nombre=$opcion["usuario"];
                        $mail=$opcion["correo"];
                        if($usuario==$nombre && $correo==$mail){
                                echo json_encode("Correcto");
                        }
                }
?>