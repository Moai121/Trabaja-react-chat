<?php
        $dominio="http://localhost:3000";
        header("Access-Control-Allow-Origin: $dominio");
        header("Access-Control-Allow-Headers: content-Type");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        
        $conectar=mysqli_connect("localhost","root","","chat");
        $mostrar=("SELECT * FROM mensaje");
        $mostrar=mysqli_query($conectar,$mostrar);
        $mostrar=mysqli_fetch_all($mostrar,MYSQLI_ASSOC);
        echo json_encode($mostrar);
?>