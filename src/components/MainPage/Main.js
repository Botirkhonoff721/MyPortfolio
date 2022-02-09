import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MainContainer,
  Container,
  Contact,
  BLOG,
  Work,
  ABOUT,
  SKILLS,
  BottomBar,
  Center,
  DarkDiv,
} from "./style";
import PowerButton from "../../subComponents/PowerButton";
import LogoComponent from "../../subComponents/LogoComponent/LogoComponent";
import SocialIcons from "../../subComponents/SocialIcons/SocialIcons";
import Intro from "../Intro/Intro";
import { YinYang } from "../AllSvgs/AllSvg";
const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} />
        <Center click={click}>
          <YinYang
            onClick={() => handleClick()}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
          ></YinYang>
          <span>Click here</span>
        </Center>

        <Contact
          target="blank"
          to={{ pathname: " mailto: botirkhonoffon571@gmail.com" }}
        >
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Say hi...
          </motion.h2>
        </Contact>
        <BLOG to="/blog">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            blog
          </motion.h2>
        </BLOG>
        <Work to="/work" click={click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            work
          </motion.h2>
        </Work>
        <BottomBar>
          <ABOUT to="/about" click={click}>
            <motion.h2
                initial={{
                  y:  200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              about
            </motion.h2>
          </ABOUT>
          <SKILLS to="/skills">
            <motion.h2 
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              My skills
            </motion.h2>
          </SKILLS>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
