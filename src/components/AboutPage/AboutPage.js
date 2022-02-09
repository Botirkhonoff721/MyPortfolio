import React from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "../Themes";
import { Box, Main,SpaceMan } from "./style";
import astronaut from '../../assets/Images/spaceman.png'
import LogoComponent from '../../subComponents/LogoComponent/LogoComponent'
import SocialIcons from '../../subComponents/SocialIcons/SocialIcons'
import PowerButton from '../../subComponents/PowerButton'
import ParticleComponent from "../../subComponents/ParticleComponent/ParticleComponent";
import BigTitle from "../../subComponents/BigTitle/BigTitle";
const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme= 'dark'  />
        <SocialIcons  theme= 'dark' />
        <PowerButton />
        <ParticleComponent  theme= 'dark'/>
        <SpaceMan>
          <img src={astronaut} alt="astronaut" />
        </SpaceMan>
        <Main>I'm a front-end developer located in India. I love to create simple yet beautiful websites with great user experience.
<br /><br />
I'm interested in the whole frontend stack Like trying new things and building great projects. I'm an independent freelancer and blogger. I love to write blogs and read books.
<br /><br />

I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
</Main>

      </Box>
      <BigTitle text='ABOUT' top='5rem' left='5rem'/>
    </ThemeProvider>
  );
};

export default AboutPage;
