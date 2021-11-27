import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./results.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <div className="text">[ {props.phonetic.text} ]</div>

      <br />

      <ReactAudioPlayer
        className="player"
        src={props.phonetic.audio}
        autoPlay
        controls
      />
    </div>
  );
}
