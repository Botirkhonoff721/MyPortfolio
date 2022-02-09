import React, { useRef, useState } from "react";
import { Box,Line} from "./style";
import music from "../../assets/audio/MUSIC.mp3";
const SoundBar = () => {
  const ref = useRef(null);
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);

    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  return (
    <Box onClick={() => handleClick()}>
        <Line click={click}/>
        <Line click={click}/>
        <Line click={click}/>
        <Line click={click}/>
        <Line click={click}/>
     <audio src={music} ref={ref} loop />
    </Box>
  );
};

export default SoundBar;
