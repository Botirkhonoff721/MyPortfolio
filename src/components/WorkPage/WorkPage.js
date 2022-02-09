import React, { useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import Card from "../../subComponents/Cards/Card";
import { DarkTheme } from "../Themes";
import {YinYang} from '../AllSvgs/AllSvg'
import { Box, Main,Rotate,container } from "./style";
import { Work } from "../../data/WorkData";
import LogoComponent from "../../subComponents/LogoComponent/LogoComponent";
import SocialIcons from "../../subComponents/SocialIcons/SocialIcons";
import PowerButton from "../../subComponents/PowerButton";
import ParticleComponent from "../../subComponents/ParticleComponent/ParticleComponent";
import BigTitle from "../../subComponents/BigTitle/BigTitle";
const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);
  useEffect(() => {
    let element = ref.current;
    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      yinyang.current.style.transform= `rotate(` + -window.pageYOffset + 'deg)'
    };

    window.addEventListener("scroll", rotate);

    return () => window.removeEventListener("scroll", rotate);
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />
        <Main ref={ref} variants={container} initial='hidden' animate='show'>
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>
        <BigTitle text='WORK' top='10%' right='20%'/> 
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
