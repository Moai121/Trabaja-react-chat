import React from "react";
class Login extends React.Component{
    constructor(props){//Creamos el constructor con cada uno de los componentes
        super(props);
        this.state={usuario:"",correo:"",mensaje:"",rusuario:"",rcorreo:"",supp:""}

        this.usu=this.usu.bind(this);
        this.mail=this.mail.bind(this);
        this.login=this.login.bind(this);

        this.rusuario_evento=this.rusuario_evento.bind(this);
        this.rcorreo_evento=this.rcorreo_evento.bind(this);
        this.registrarse=this.registrarse.bind(this);

    }
    usu(event){
        this.setState({usuario:event.target.value});
    }
    mail(event){
        this.setState({correo:event.target.value});
    }

    rusuario_evento(event){
        this.setState( { rusuario_evento: event.target.value});
    }
    rcorreo_evento(event){
        this.setState({rcorreo_evento:event.target.value});
    }
    login(event){
        event.preventDefault();
        var data=new FormData();
        data.append("usuario",this.state.usuario);
        data.append("correo",this.state.correo);
        console.log(this.state.usuario)
        localStorage.setItem("nombre",this.state.usuario);
        fetch("http://localhost/React/Trabaja-react-chat/chat/php/login.php",{
            method:"POST",
            body:data
        })
        .then(
            res=>res.json(),        
                    )
        .catch(
            error=>console.error("Fallo",error)
        )
        .then(
            response=>{
                if(response=="Correcto"){                                    
                    window.location.href="/Conexion"
                }
                else{
                    this.setState({supp:"Usuario no valido"})
                }                   
            });
    }
    registrarse(event){
        
        event.preventDefault();
        const datos=new FormData();
        datos.append("usuario",this.state.rusuario_evento);
        datos.append("correo",this.state.rcorreo_evento);

        fetch("http://localhost/React/Trabaja-react-chat/chat/php/identificarse.php",{
            method:"POST",
            body:datos
        })
        .then(
            res=>res.json(),
            
        )
        .catch(
            error=>console.error("Fallo",error)
        )
        .then(
            response=>{
                console.log("Correcto",this.setState({response}))
                this.setState({mensaje:response})
            });
    }
    render(){
        return(
            <div>
            <form className="login">
                <h2>Bienvenido</h2>
                <p>Usuario:<input type="text" value={this.state.usuario} onChange={this.usu}></input></p>
                <p>Correo:<input type="text" value={this.state.correo} onChange={this.mail}></input></p>
                <button onClick={this.login}>Login</button>
                <h3>{this.state.supp}</h3>
            </form>
            <form className="identificarse">
            <h2>¿Eres nuevo? Registrarte en tan solo unos segundos</h2>
                <p>Usuario:<input type="text"  onChange={this.rusuario_evento}></input></p>
                <p>Correo:<input type="text" onChange={this.rcorreo_evento}></input></p>
                <button onClick={this.registrarse}>Registrarse</button>
                <h3>{this.state.mensaje}</h3>
            </form>
            </div>
        )
    }

}
export default Login;