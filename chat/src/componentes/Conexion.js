import React from "react";

class Conexion extends React.Component{
    constructor(props){
        super(props);
        this.state={usuario:"",texto:"",id:""}
        
        this.usuario=this.usu.bind(this);
        this.texto=this.text.bind(this);
        this.id=this.identificador(this);
        this.enviar=this.mandar.bind(this);
    }
        usu(event){
            this.setState({usuario:event.target.value});
        }
        text(event){
            this.setState({texto:event.target.value});
        }
        identificador(event){
            this.setState({id:event.target});
        }
        mandar(event){
            var data= new FormData();
            data.append("usuario",localStorage.getItem("nombre"));
            data.append("texto",this.state.texto);
            data.append("id",this.state.id);
            fetch("http://localhost/React/Trabaja-react-chat/chat/php/conexion.php",{
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
                    <p>Usuario:{localStorage.getItem("nombre")}</p>
                    <p>Texto:<input type="text" onChange={this.texto}></input></p>
                    <p><button onClick={this.enviar}>Enviar</button></p>
                </form>
            );
        }
}
export default Conexion;