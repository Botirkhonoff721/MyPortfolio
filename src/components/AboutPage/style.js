import styled, { keyframes } from "styled-components";
export const Box = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
`;
export const float = keyframes`
  0% { transform: translateY(-10px)}
  50% { transform: translateY(15px) translateX(15px)}
  100% { transform: translateY(-10px)}
`;

export const SpaceMan = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

export const Main = styled.div`
    border: 2px solid ${props=> props.theme.text};
    color: ${props=> props.theme.text};
    padding: 2rem;
    width: 50vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;

    display: flex;
    justify-content: center;
    align-content: center;
    font-size: calc(0.6rem + 1vw    );
    backdrop-filter: blur(4px) ;
    position: absolute;
    left: calc(5rem + 5vw);
    top: 10rem;
    font-family: 'Ubuntu Mono',monospace;
    font-style: italic;
`;  


