import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <div className="text">[ {props.phonetic.text} ]</div>

      <br />

      <ReactAudioPlayer
        className="player"
        src={props.phonetic.audio}
        controls
      />
    </div>
  );
}
