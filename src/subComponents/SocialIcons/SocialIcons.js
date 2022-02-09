import React from "react";
import { NavLink } from "react-router-dom";
import {
  Github,
  YouTube,
  Facebook,
  Twitter,
} from "../../components/AllSvgs/AllSvg";
import { motion } from "framer-motion";
import { Icons, Line } from "./style";
import { DarkTheme } from "../../components/Themes";
const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "//github.com/Botirkhonoff721" }}
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "//github.com/Botirkhonoff721" }}
        >
          <Twitter
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "//github.com/Botirkhonoff721" }}
        >
          <Facebook
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "//github.com/Botirkhonoff721" }}
        >
          <YouTube
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </motion.div>
      <Line
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
        color={props.theme}
      />
    </Icons>
  );
};

export default SocialIcons;
