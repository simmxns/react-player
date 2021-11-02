import "./LayerBottom.scss";

const PlayerBottom = (): JSX.Element => {
  return (
    <div className="layer__bottom">
      <div className="progress__top">
        <div className="player__info">
          <h4>HIGHEST IN THE ROOM</h4>
          <p>Travis Scott</p>
        </div>
        <span className="progress__duration">0:00</span>
      </div>
      <div className="progress__area">
        <div className="progress__bar" />
      </div>
      <span className="progress__time">0:00</span>
      <audio src="../../assets/media/videoplayback.mp3" id="audio" />
    </div>
  );
};

export default PlayerBottom;
