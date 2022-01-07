import LayerTop from "../LayerTop/LayerTop"
import LayerBottom from "../LayerBottom/LayerBottom"

import "./MusicLayer.scss"

const MusicLayer = (): JSX.Element => {
  return (
    <div className="overlay">
      <LayerTop />
      <LayerBottom />
    </div>
  )
}

export default MusicLayer