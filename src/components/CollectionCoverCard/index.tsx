import React, { FC } from "react";
import { View, Text, FlatList, LogBox } from "react-native";
import { CollectionGame } from "../../types";
import GridCoverImageCard from "../GridCoverImageCard";

import { styles } from "./styles";

LogBox.ignoreAllLogs(); //Ignore all log notifications

interface ICollectionCoverCard {
  games: CollectionGame[];
  title: string;
}

const CollectionCoverCard: FC<ICollectionCoverCard> = ({ games, title }) => {
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
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default CollectionCoverCard;
