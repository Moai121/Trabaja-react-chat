import React from "react";

class Conexion extends React.Component{
    constructor(props){
        super(props);
        this.state={usuario:"",texto:""}
        
        this.usuario=this.usu.bind(this);
        this.texto=this.text.bind(this);
        this.enviar=this.mandar.bind(this);
    }
        usu(event){
            this.setState({usuario:event.target.value});
        }
        text(event){
            this.setState({texto:event.target.value});
        }
        mandar(event){
            event.preventDefault();
            var data= new FormData();
            data.append("usuario",this.state.usuario);
            data.append("texto",this.state.texto);
            fetch("http://localhost/React/chat/php/conexion.php",{
                method: "POST",
                body: data 
            })
            .then(res => res.json())
            .catch(error => console.error("Fallo",error))
            .then(response=> console.log("Correcto",this.setState({usuario:response}) ));
        }
        render(){
            return(
                <form>
                    <p>Usuario:<input type="text" onChange={this.usuario}></input></p>
                    <p>Texto:<input type="text" onChange={this.texto}></input></p>
                    <p><button onClick={this.enviar}>Enviar</button></p>
                </form>
            );
        }
}
export default Conexion;