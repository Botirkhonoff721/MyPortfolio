import { ThemeProvider } from "styled-components";
import { lightTheme } from "../components/Themes";
import GlobalStyle from "../globalStyles";
import {  Routes, Route, useLocation } from "react-router-dom";
import SoundBar from "../subComponents/Sound/Sound";
import AboutPage from "../components/AboutPage/AboutPage";
import BlogPage from "../components/Blogpage/BlogPage";
import Main from "../components/MainPage/Main";
import WorkPage from "../components/WorkPage/WorkPage";
import MySkillsPage from "../components/MySkillsPage/MySkillsPage";
import { AnimatePresence } from "framer-motion";
const Root = () => {
  const location = useLocation();
  return (
    <>
        <GlobalStyle />
        <ThemeProvider theme={lightTheme}>
          <SoundBar />
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/skills" element={<MySkillsPage />} />
            </Routes>
          </AnimatePresence>
        </ThemeProvider>
    </>
  );
};

export default Root;
