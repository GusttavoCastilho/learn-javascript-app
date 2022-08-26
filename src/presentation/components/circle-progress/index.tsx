import React from "react";
import { Svg, Circle } from "react-native-svg";
import { useTheme } from "styled-components/native";
import { Wrapper, Progress } from "./styles";

type CircularProgressProps = {
  size: number;
  strokeWidth: number;
  progress: number;
};

export const CircleProgress = (props: CircularProgressProps) => {
  const { size, strokeWidth, progress } = props;
  const radius = (size - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;
  const svgProgress = (1 - progress) * 100;

  const theme = useTheme();

  return (
    <Wrapper testID="wrapper-circle">
      <Svg width={size} height={size}>
        <Circle
          stroke={theme.colors.dark["150"]}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          {...{ strokeWidth }}
        />

        {progress > 0 && (
          <Progress testID="circle-progress">
            <Circle
              stroke={
                progress >= 1 ? theme.colors.primary : theme.colors.secondary
              }
              fill="none"
              cx={size / 2}
              cy={size / 2}
              r={radius}
              strokeDasharray={`${circum} ${circum}`}
              strokeDashoffset={radius * Math.PI * 2 * (svgProgress / 100)}
              strokeLinecap="round"
              transform={`rotate(-90, ${size / 2}, ${size / 2})`}
              {...{ strokeWidth }}
            />
          </Progress>
        )}
      </Svg>
    </Wrapper>
  );
};
