import React from "react"
import "../css/alert.css"
import Swal from 'sweetalert2'
import "react-notifications-component/dist/theme.css";
class Alert extends React.Component {
    addNotification(node){
        Swal.fire({
            title: 'Found it!',
            text: 'La persona que estabas buscando fue encontrada en el nodo '+ node ,
            type: 'info',
            confirmButtonText: 'Cool',
        }).then((result) =>{
            if(result.value){
                window.location = "/map"
            }
        })
    }
    render() {
      return(
        <div className="alertcontainer">
            <img src="./images/alerta.png" alt="" onClick={
                ()=>
                {
                    setTimeout(() =>{
                        this.addNotification("23")
                    },500);
                    
                }
                
            }
        />
        </div>
      );
    }
  } 
export default Alert;