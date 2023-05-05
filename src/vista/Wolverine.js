import react from "react";
import "./Esti.css";
function Wolverine() {
  return (
    <div className="wol_p">
      <div className="wol_l">
        <img src="./superhero.png" width="50" />
      </div>
      <div className="wol">
        <div class="ratio ratio-4x3">
          <iframe
            width="160"
            height="115"
            src="https://www.youtube.com/embed/6IpiI8lrW-0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="wol_r">
        <img src="./wolverine.png" width="50" />
      </div>
    </div>
  );
}
// personalizamos la funcion para que tenga un alcance publico
export default Wolverine;
