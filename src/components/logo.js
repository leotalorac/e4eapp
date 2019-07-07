import React from "react"
import "../css/logo.css"
import Fade from "react-reveal/Fade"
class Logo extends React.Component {
    render() {
      return(
        <div className="logoContainer">
            <Fade clear 
              onReveal={() => {
                window.location = "/alert"
              }}
              wait={500}
            >
              <img src="./images/logo.png" alt="" className="logo"/>
            </Fade> 
        </div>
      );
    }
  }
export default Logo;