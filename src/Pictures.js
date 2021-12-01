import React from "react";
import "./Pictures.css";

export default function Pictures(props) {
  if (props.pictures) {
    return (
      <section className="Photos">
        <div className="row">
          {props.pictures.map(function (pictures, index) {
            return (
              <div className="col-4" key={index}>
                <a
                  href={pictures.src.original}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="img-fluid"
                    alt=""
                    src={pictures.src.landscape}
                    key={index}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
