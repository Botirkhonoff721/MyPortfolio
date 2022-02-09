import React from "react";
import { Github } from "../../components/AllSvgs/AllSvg";
import { Box } from "./style";
import { Title, Description, Tags, Tag,Footer,Link,Git,Item } from "./style";
const Card = (props) => {
  const { id, name, description, tags, demo, github } = props.data;
  return (
    <Box key={id} variants={Item}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Tags>
        {tags.map((t, id) => (
          <Tag key={id}>#{t}</Tag>
        ))}
      </Tags>
      <Footer>
            <Link to={{pathname: `${demo}`}} target='_blank'>
                Visit
            </Link>
            <Git to={{pathname: `${github}`}} target='_blank'>
                <Github width={30} height={30}/>
            </Git>
      </Footer>
    </Box>
  );
};

export default Card;
