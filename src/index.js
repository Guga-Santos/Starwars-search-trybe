import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Font/Starjedi.ttf';

ReactDOM.render(
  <div>
    <App />
    <audio
        src="http://upbeatmusicproductions.com/_UpBeatPractice/StarWars/Main%20Title.mp3"
        controls
        autoPlay
        hidden
        id="myAydio"
  
      />
  </div>,
  document.getElementById('root'),
);
