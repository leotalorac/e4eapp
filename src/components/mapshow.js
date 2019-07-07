import React from "react"
import "../css/map.css"
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
  
  
class Mapshow extends React.Component {      
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
        </div>
      );
    }
  }
export default Mapshow;