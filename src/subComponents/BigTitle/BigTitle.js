import React from "react";
import { Text } from "./style";
const BigTitle = (props) => {
  return <Text top={props.top} right={props.right} bottom={props.bottom} left={props.left}>
      {props.text}</Text>;
};

export default BigTitle;
