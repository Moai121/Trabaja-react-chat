import React from "react";

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
        mandar(event){
            var data= new FormData();
            data.append("usuario",localStorage.getItem("nombre"));
            data.append("texto",this.state.texto);
            data.append("id",this.state.id);
            fetch("http://localhost/React/Trabaja-react-chat/chat/php/conexion.php",{
                method: "POST",
                body: data 
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
                window.location.href="/mostrar"
                );               
        }
        render(){
            return(
                <div>
                <form>
                    <p>Usuario:{localStorage.getItem("nombre")}</p>
                    <p>Texto:<input type="text" onChange={this.texto}></input></p>
                    <p><button onClick={this.enviar}>Enviar</button></p>
                </form>
                <ul>
                        {    
                        this.state.mensajes.map(lol=>(<li key={lol.n\u00ba} >{lol.usuario}: {lol.texto}</li>))
                        }
                        </ul>  
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
            // render(){
            //      return(
            //         <div>
            //             <ul>
            //             {    
            //             this.state.mensajes.map(lol=>(<li key={lol.n\u00ba} >{lol.usuario}: {lol.texto}</li>))
            //             }
            //             </ul>               
            //         </div>        
            //     );
            // }
        }
export default Conexion;