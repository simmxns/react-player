import "./LayerTop.scss";

import {
  faHeart,
  faShare,
  faBackward,
  faForward,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LayerTop = (): JSX.Element => {
  return (
    <div className="layer__top">
      <div className="player__cover">
        <div className="cover" />
      </div>
      <div className="player__control">
        <div className="ctrl" id="heart">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="ctrl" id="share">
          <FontAwesomeIcon icon={faShare} />
        </div>
        <div className="ctrl" id="backward">
          <FontAwesomeIcon icon={faBackward} />
        </div>
        <div className="ctrl" id="forward">
          <FontAwesomeIcon icon={faForward} />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faPlay} />
        </div>
      </div>
    </div>
  );
};

export default LayerTop;
