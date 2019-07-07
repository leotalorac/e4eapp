import React from "react"
import "../css/map.css"
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
import arr from "../data/points.json"
  
class Normalmap extends React.Component {   
    render() {
        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              defaultZoom={15}
               
              defaultCenter={{ lat: 4.64, lng: -74.091784 }}
            >
              <Marker
                position={{ lat: 4.64, lng: -74.091784 }}
              /> 
              <Marker position={{ "lat":73.3 ,"lng":-4}}/>
              
              {arr.map((elemen,id) => {
                    return(<Marker position={{ lat:elemen["lat"] , lng:elemen["lng"]}} key={id} icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}/>)
              })}
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
export default Normalmap;