import styled from "styled-components";
import {motion} from 'framer-motion'

export const Box = styled.div`
  background: ${(props) => props.theme.body};
  height: 400vh;
  position: relative;
  display: flex ;
  align-items: center;
`;

export const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
`;

export const Rotate = styled.span`
    display: block;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    width: 80px;
    height: 80px;
    z-index: 1;
`;
export const container=  {
  hidden: {opacity:0},
  show: {
    opacity:1,
    transition: {
      staggerChildren:0.5,
      duration: 0.5
    }
  }
}