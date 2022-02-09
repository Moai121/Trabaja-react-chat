import React from "react";
class Traer extends React.Component{
    constructor(props){
        super(props)
        this.state={mensajes: []};
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
    render(){
        return(
            <div>
                <ul>
                {    
                this.state.mensajes.map(lol=>(<li key={lol.n\u00ba} >{lol.usuario}: {lol.texto}</li>))
                }
                </ul>               
            </div>        
        );
    } 
}
export default Traer;