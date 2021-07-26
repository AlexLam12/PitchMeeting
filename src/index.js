import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { PitchMeeting } from './components/PitchMeeting';
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PitchMeeting />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
