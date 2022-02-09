import React from "react";
import { ThemeProvider } from "styled-components";
import { Design, Develope } from "../AllSvgs/AllSvg";
import { lightTheme } from "../Themes";
import { Box, Main, Title, Description } from "./style";
import LogoComponent from '../../subComponents/LogoComponent/LogoComponent'
import SocialIcons from '../../subComponents/SocialIcons/SocialIcons'
import PowerButton from '../../subComponents/PowerButton'
import ParticleComponent from "../../subComponents/ParticleComponent/ParticleComponent";
import BigTitle from "../../subComponents/BigTitle/BigTitle";
const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme= 'light'  />
        <SocialIcons  theme= 'light' />
        <PowerButton />
        <ParticleComponent  theme= 'light'/>
        <Main>
          <Title>
            <Design width={40} height={40} /> Designer
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minimal and
            simple.
          </Description>
          <Description>
            <strong>I like to design</strong>
            <ul>
              <li>Web Design</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>Figma</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} /> Frontend Developer
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>Skills</strong>
           <p>
Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc.

           </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>
VScode, Github, Codepen etc.</p>
          </Description>
        </Main>
        <BigTitle text='SKILLS' top='77%' left='32%'/>

      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
