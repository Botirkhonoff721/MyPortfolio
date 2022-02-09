import React from "react";
import { Box } from "./style";
import Particles from "react-particles-js";
import configDark from '../../config/particlesjs-config.json'
import configLight from '../../config/particlesjs-config-light.json'
const ParticleComponent = (props) => {
  return (
    <Box>
      <Particles style={{positin: 'absolute', top: 0}} params={props.theme === 'light' ? configLight : configDark}/>
    </Box>
  )
};

export default ParticleComponent;
