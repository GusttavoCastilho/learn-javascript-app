import React from "react";

import { Wrapper } from "./styles";

type TopicNodeRowProps = {
  children: React.ReactNode;
};

export const TopicNodeRow = ({ children }: TopicNodeRowProps) => {
  return <Wrapper testID="topic-node">{children}</Wrapper>;
};
