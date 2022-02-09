import { motion } from "framer-motion";
import styled from "styled-components";
import img from "../../assets/Images/Library.jpg";

export const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;
export const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;
export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;
