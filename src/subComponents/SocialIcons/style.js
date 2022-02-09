import styled from "styled-components";
import { DarkTheme } from "../../components/Themes";
import { motion } from "framer-motion";
export const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 2rem;

    z-index: 3;

    &>*:not(:last-child) {
        margin: 0.3rem 0;
    }
`;

export const Line = styled(motion.span)`
    width: 2px;
    height: 8rem;
    background-color: ${(props) => props.color  === 'dark'? DarkTheme.text : DarkTheme.body};

`;