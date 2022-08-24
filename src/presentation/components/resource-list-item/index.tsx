import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Ionicons } from "@expo/vector-icons";

import { ResourceItem } from "@models/resource-model";

import {
  ContainerCompleted,
  Icon,
  LineIndicator,
  TextCompleted,
  Title,
  Wrapper,
} from "./styles";

export type ResourceListItemProps = {
  resource: ResourceItem;
  index: number;
  isLast?: boolean;
};

export const ResourceListItem = ({
  index,
  isLast,
  resource,
}: ResourceListItemProps) => {
  const onNavigateToUrl = () => {
    WebBrowser.openBrowserAsync(resource.url);
  };
  return (
    <Wrapper testID="resource" onPress={onNavigateToUrl}>
      <ContainerCompleted completed={resource.completed}>
        {resource.completed ? (
          <Icon testID="completed-icon">
            <Ionicons name="ios-checkmark-sharp" size={20} color="white" />
          </Icon>
        ) : (
          <TextCompleted>{index + 1}</TextCompleted>
        )}
      </ContainerCompleted>
      <Title>{resource.title}</Title>
      <Ionicons
        name="open-outline"
        size={24}
        color="black"
        style={{ marginLeft: "auto" }}
      />
      {isLast && (
        <LineIndicator testID="line-indicator" completed={resource.completed} />
      )}
    </Wrapper>
  );
};
