import React from "react"
import "../css/city.css"
import "react-notifications-component/dist/theme.css";
class City extends React.Component {

    render() {
      return(
        <div className="citycontainer">
            <div>
                <h4 >Selecciona la ciudad de tu interes</h4>
            </div>
            <div className="cityselector" onClick={() => window.location = "/normalmap"}>
                <img src="https://static.iris.net.co/semana/upload/images/2017/10/27/545243_1.jpg" alt=""/>
                <h4>Bogota</h4>
            </div>
            <div className="cityselector">
                <img src="https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg" alt="" className="black"/>
                <h4>Londres</h4>
            </div>
            <div className="cityselector">
                <img src="https://www.bain.com/contentassets/f68751a8708848558d763e7fe458c10a/local-office-images-buenos-aires--1950x650.jpg" alt="" className="black"/>
                <h4>Buenos aires</h4>
            </div>
            <div className="cityselector">
                <img src="https://cdn.civitatis.com/francia/paris/paris.jpg" alt="" className="black"/>
                <h4>Paris</h4>
            </div>
            <div className="cityselector">
                <img src="https://www.ef.com.mx/sitecore/__/~/media/universal/stage/5x2/destinations/de/berlin.jpg" alt="" className="black"/>
                <h4>Berlin</h4>
            </div>
        </div>
      );
    }
  } 
export default City;