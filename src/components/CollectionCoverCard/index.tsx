import { useTheme } from "@react-navigation/native";
import React, { FC } from "react";
import { View, Text, FlatList, LogBox } from "react-native";
import { CollectionGame } from "../../types";
import GridCoverImageCard from "../GridCoverImageCard";
import Typography from "../Typography";

import { styles } from "./styles";

LogBox.ignoreAllLogs(); //Ignore all log notifications

interface ICollectionCoverCard {
  games: CollectionGame[];
  title: string;
}

const CollectionCoverCard: FC<ICollectionCoverCard> = ({ games, title }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.coverWrapper}>
      <FlatList
        numColumns={2}
        data={games}
        renderItem={({ item }) => (
          <View style={styles.smallCoverwrapper}>
            <GridCoverImageCard game={item} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={[styles.titleWrapper, { backgroundColor: colors.surface }]}>
        <Typography variant="bold">{title}</Typography>
      </View>
    </View>
  );
};

export default CollectionCoverCard;
