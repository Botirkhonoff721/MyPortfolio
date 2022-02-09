import React from "react";
import { Container,Box, Image, Title, HashTags, Tag, Date } from "./style";
const Item = {
  hidden: {
    scale: 0
  },
  show: {
    scale:1,
    transition:{
      type:'spring',
      duration: 0.5
    }
  }
}

const BlogComponent = (props) => {
  const { name, tags, date, imgSrc, link } = props.blog;
  return (
    <Container
    variants={Item}
    >
        <Box target="_blank" to={{ pathname: link }}>
      <Image src={imgSrc} />
      <Title>{name}</Title>
      <HashTags>
        {tags.map((t, id) => {
          return <Tag key={id}>#{t}</Tag>;
        })}
      </HashTags>
      <Date>{date}</Date>
    </Box>
    </Container>
  
  );
};

export default BlogComponent;
