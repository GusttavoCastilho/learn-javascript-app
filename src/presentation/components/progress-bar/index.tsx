import React from "react";
import { Wrapper, Progress } from "./styles";

type ProgressBarProps = {
  progress: number;
};

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <Wrapper>
      <Progress testID="progress" progress={progress} />
    </Wrapper>
  );
};
