import React from "react"
import "../css/alert.css"
import Swal from 'sweetalert2'
import "react-notifications-component/dist/theme.css";
import Sound from 'react-sound';
class Alert extends React.Component {
    state ={
        statussound :"STOPPED"
    }
    addNotification(){
        
        Swal.fire({
            title: 'Found it!',
            text: 'Tus contactos seleccionadas han sido localizados',
            type: 'info',
            confirmButtonText: 'Ver mapa',
        }).then((result) =>{
            if(result.value){
                window.location = "/map"
            }
        })
    }
    render() {
      return(
          
        <div className="alertcontainer">
            <Sound url="sound.wav" playStatus={this.state.statussound} loop={true}/>
            <img src="./images/alerta.png" alt="" onClick={
                ()=>
                {
                    this.setState({
                        statussound:"PLAYING"
                    })
                    setTimeout(() =>{
                        this.addNotification()
                    },1000);
                    
                }
                
            }
        />
        </div>
      );
    }
  } 
export default Alert;