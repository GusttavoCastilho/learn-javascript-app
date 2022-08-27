import React from "react";
import { useWindowDimensions } from "react-native";

import { CircleProgress } from "@components/circle-progress";
import { TopicItem } from "@models/topic-model";

import { Circle, Image, Title, Progress, Wrapper } from "./styles";

type TopicNodeProps = {
  topic: TopicItem;
  isDisabled?: boolean;
};

export const TopicNode = ({ topic, isDisabled = true }: TopicNodeProps) => {
  const { width: width } = useWindowDimensions();
  const itemWidth = width / 3 - 30;

  const onNavigateToScreen = () => {
    // navigation.navigate("Topic", { id: topic.id })
  };

  return (
    <Wrapper
      testID="wrapper-topic"
      onPress={onNavigateToScreen}
      disabled={isDisabled}
    >
      <Progress>
        <CircleProgress
          size={itemWidth}
          strokeWidth={8}
          progress={topic.progress}
        />
        <Circle isDisabled={isDisabled} testID="circle">
          <Image source={{ uri: topic.icon }} />
        </Circle>
      </Progress>
      <Title>{topic.title}</Title>
    </Wrapper>
  );
};
