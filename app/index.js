// Load application styles
import 'styles/index.scss';

import React from "react";
import ReactDOM from "react-dom";

const audioList = require('../audios.json');

const Audio = ({name, src}) =>
  <audio id="name" controls>
    <source
      type="audio/mpeg"
      src={src}/>
    Your browser does not support the <code>audio</code> element.
  </audio>;

const Index = () =>
  <ul className="audio-list">
    {Object.keys(audioList).map(audioName =>
      <li className="audio-container" key={audioName}>
        <p className="audio-name">{audioName.replace(/_/g, ' ')}</p>
        <Audio name={audioName} src={`../${audioList[audioName]}`}/>
      </li>
    )}
  </ul>;

ReactDOM.render( <Index/>, document.getElementById("index"));