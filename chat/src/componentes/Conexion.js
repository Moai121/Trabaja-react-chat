import React from "react";
import enviar from "../assests/imagenes/enviar.png";
import salir from "../assests/imagenes/salir.png";
class Conexion extends React.Component{
    constructor(props){
        super(props);
        this.state={usuario:"",texto:"",id:""}
        
        this.usuario=this.usu.bind(this);
        this.texto=this.text.bind(this);
        this.id=this.identificador(this);
        this.enviar=this.mandar.bind(this);
        this.state={mensajes: []};
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
        volver(event){
            event.preventDefault();
            window.location.href="/login"
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
            fetch("http://localhost/React/Trabaja-react-chat/chat/php/mostrar.php",{
            })
            .then(
                res => 
                res.json()
            )
            .then(
                (result) => {
                this.setState({mensajes: result});
                },      
                (error) =>{this.state({error});
            })
            .then(
                res => res.json()
            )
            .catch(
                error => console.error("Fallo",error)
                )
            .then(
                response=> console.log("Correcto",this.setState({usuario:response}) ),
                window.location.href="/Conexion"
                );               
        }
        render(){
            return(
                <div>
                <form className="formulario">
                    <img src={salir} onClick={this.volver} className="salir"></img>
                    <div className="usuario">Usuario:{localStorage.getItem("nombre")}</div>
                </form>
                <div className="chat">
                    <ul>
                        {    
                        this.state.mensajes.map(lol=>(<p className="message"><li key={lol.n\u00ba} >{lol.usuario}: {lol.texto}</li></p>))
                        } 
                    </ul>                     
                </div>
                <div className="responder">
                    Texto:<input type="text" onChange={this.texto} className="mensaje"></input>
                    <img src={enviar} onClick={this.enviar} className="enviar"></img> 
                </div>
                </div>
            );
        }
            componentDidMount(){
                fetch("http://localhost/React/Trabaja-react-chat/chat/php/mostrar.php",{
                })
                .then(
                    res => 
                    res.json()
                )
                .then(
                    (result) => {
                    this.setState({mensajes: result});
                    },      
                    (error) =>{this.state({error});
                })
            }
        }
export default Conexion;