import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // import from react-router-dom
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
  const navigate = useNavigate(); // use useNavigate instead of useHistory


  // Log the current track
  useEffect(() => {
    console.log(`currentTrack: ${JSON.stringify(currentTrack)}`);
    if(audioRef.current) {
      setDuration(audioRef.current.duration);
    }
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
          <select onChange={(e) => navigate(e.target.value)}>
            <option value="/">Home</option>
            <option value="/about">About</option>
            <option value="/contact">Contact</option>
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
    </div>
  );

};

export default AudioPlayer;