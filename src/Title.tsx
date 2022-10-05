import React from "react";

export interface TitleProps {
  text?: string;
}

function Title({ text }: TitleProps) {
  return <div>{text}</div>;
}

export default Title;
