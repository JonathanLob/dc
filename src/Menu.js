import React from "react";
import {Link} from "react-router-dom";

function Menu(){
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <Link to="/"><img src="./dc1.ico" width='50'/></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <Link className="nav-link active" aria-current="page" to='/Superman'><li className="nav-item">Superman</li></Link>                  
                    <Link className="nav-link" to='/Batman'><li className="nav-item">Batman</li></Link>                  
                    <Link className="nav-link" to='/Flash'><li className="nav-item">Flash</li></Link>                  
                    <Link className="nav-link" to='/Wolverine'><li className="nav-item">Wolverine</li></Link>                  
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
}
// personalizamos la funcion para que tenga un alcance publico
export default Menu;