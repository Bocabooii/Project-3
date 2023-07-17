import { useRef, useState, useEffect } from 'react';
import { tracks } from '../data/tracks';
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import '../styles/brain-freq-styles.css';
import '../styles/cosmic-animations.css';

const AudioPlayer = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // reference
  const audioRef = useRef();
  const progressBarRef = useRef();

  // Log the current track
  useEffect(() => {
    console.log(`currentTrack: ${JSON.stringify(currentTrack)}`);
  }, [currentTrack]);

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };
  
  return (
    <div className="app cosmic-theme cosmic-body">
      <header className="app-header">
          <h1 className="app-title">Brain Freq</h1>
          <nav className="app-nav">
              <select onChange={(e) => window.location.href = e.target.value}>
                <option value="#">Home</option>
                <option value="#">About</option>
                <option value="#">Contact</option>
              </select>
          </nav>
      </header>
      <div className="audio-player">
        <div className="inner">
          <DisplayTrack {...{ currentTrack, audioRef, setDuration, progressBarRef, handleNext }} />
          <Controls {...{ 
            audioRef, 
            progressBarRef, 
            duration, 
            setTimeProgress, 
            tracks, 
            trackIndex, 
            setTrackIndex, 
            setCurrentTrack, 
            handleNext
          }} />
          <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }} />
        </div>
      </div>
      <footer className="app-footer">
        <pre className="ascii-art">
          <code>
            {`▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
              ██░███░██░▄▄▄██░█████░▄▄▀██░▄▄▄░██░▄▀▄░██░▄▄▄
              ██░█░█░██░▄▄▄██░█████░█████░███░██░█░█░██░▄▄▄
              ██▄▀▄▀▄██░▀▀▀██░▀▀░██░▀▀▄██░▀▀▀░██░███░██░▀▀▀
              ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀`}
          </code>
        </pre>
        <p>&copy; 2023 Brain Freq. All rights reserved.</p>
      </footer>
    </div>
  );

};

export default AudioPlayer;