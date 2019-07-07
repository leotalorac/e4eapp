import React from "react"
import {Button} from "react-bootstrap"
import "../css/map.css"
import Swal from 'sweetalert2'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
  
  
class Mapshow extends React.Component {    
    inputalert() {
      Swal.fire({
        title: 'Ingresa tu mensaje',
        input: 'text',
        showCancelButton: true,
      }).then(() =>{
        Swal.fire({
          title: 'Mensaje enviado',
          type:"success"
          
        })
      })
    }  
    render() {
        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              defaultZoom={15}
               
              defaultCenter={{ lat: 4.64, lng: -74.091784 }}
            >
              <Marker
                position={{ lat: 4.64, lng: -74.091784 }}
              />
              <Marker
                position={{ lat: 4.65, lng: -74.091784 }}
                icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
                onClick={this.inputalert}
              />
            </GoogleMap>
          ));
      return(
          
        <div className="logoContainer">
            <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB0aXMcu_0QP2o5MkHyHKCzXLWTJEb6ipU&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div className={"map"}/>}
                mapElement={<div style={{ height: `100%` }} />}
            />
            <Button className="superboton" onClick={() =>{window.location = "/city"}}>Volver</Button>
        </div>
      );
    }
  }
export default Mapshow;
