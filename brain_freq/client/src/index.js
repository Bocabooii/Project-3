import React from 'react';
import ReactDOM from 'react-dom/client';
import AudioPlayer from './components/AudioPlayer';

import './styles/index.css';
import './styles/custom-progress-bar.css';
import './styles/brain-freq-styles.css'; 
import './styles/cosmic-animations.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AudioPlayer />
  </React.StrictMode>
);