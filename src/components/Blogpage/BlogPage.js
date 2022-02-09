import React from "react";
import { MainContainer, Container, Center, Grid } from "./style";
import PowerButton from "../../subComponents/PowerButton";
import LogoComponent from "../../subComponents/LogoComponent/LogoComponent";
import SocialIcons from "../../subComponents/SocialIcons/SocialIcons";
import { Blogs } from "../../data/BlogData";
import BlogComponent from "../BlogComponents/BlogComponent";
import BigTitle from "../../subComponents/BigTitle/BigTitle";
const container = {
  hidden: {opacity:0},
  show: {
    opacity:1,
    transition: {
      staggerChildren:0.5,
      duration: 0.5
    }
  }
}
const BlogPage = () => {
  return (
    <MainContainer
    variants={container}
    initial='hidden'
    animate= 'show'
    exit={{
      opacity: 0,transition:{duration:0.5}
    }}
    >
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <Center>
          <Grid>
            {Blogs.map((blog) => {
             return <BlogComponent key={blog.id} blog={blog} />;
            })}
          </Grid>
        </Center>
        <BigTitle text='BLOG' top='5rem' left='5rem ' />
      </Container>
    </MainContainer>
  );
};

export default BlogPage;
