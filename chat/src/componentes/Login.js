import React from "react";

class Login extends React.Component{
    constructor(props){//Creamos el constructor con cada uno de los componentes
        super(props);
        this.state={usuario:"",correo:""}
        this.usuario=this.usuario.bind(this);
        this.correo=this.mail.bind(this);
        this.login=this.entrar.bind(this);
    }
    usuario(event){
        this.setState({usuario:event.target.value});
    }
    mail(event){
        this.setState({correo:event.target.value});
    }
    entrar(event){
        event.preventDefault();
        var data=new FormData();
        data.append("usuario",this.state.usuario);
        data.append("correo",this.state.correo);
        localStorage.setItem("nombre",this.state.usuario);
        fetch("http://localhost/React/Trabaja-react-chat/chat/php/login.php",{
            method:"POST",
            body:data
        })
        .then(
            res=>res.json(),
            window.location.href="/Conexion"
                    )
        .catch(
            error=>console.error("Fallo",error)
        )
        .then(response=>console.log("Correcto",this.setState({usuario:response}
                    )
                )
            );
    }
    render(){
        return(
            <form>
                <p>Usuario:<input type="text" onChange={this.usuario}></input></p>
                <p>Correo:<input type="text" onChange={this.correo}></input></p>
                <button onClick={this.login}>Login</button>
            </form>
        )
    }

}
export default Login;