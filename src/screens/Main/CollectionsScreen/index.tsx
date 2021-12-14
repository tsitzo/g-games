import { useTheme } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { FC, useContext } from "react";
import { FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import CollectionCoverCard from "../../../components/CollectionCoverCard";
import SafeArea from "../../../components/SafeArea";
import { CollectionsContext } from "../../../context/CollectionsContext";
import { AppStackParams } from "../../../types";

import { styles } from "./styles";

interface ICollectionsScreenProps {
  navigation: NativeStackNavigationProp<AppStackParams, "AppTabs">;
}

const CollectionsScreen: FC<ICollectionsScreenProps> = ({ navigation }) => {
  const { colors } = useTheme();
  const { archive, wishlist, backlog } = useContext(CollectionsContext);

  const collections = [
    { name: "Archive", games: archive },
    { name: "Backlog", games: backlog },
    { name: "Wishlist", games: wishlist },
  ];
  return (
    <SafeArea>
      <FlatList
        style={styles.flatList}
        numColumns={2}
        data={collections}
        keyExtractor={(item, index) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("SeeMoreCollectionsGamesScreen", {
                collection: item.name,
              })
            }
            style={[styles.coverWrapper, { backgroundColor: colors.card }]}
          >
            <CollectionCoverCard
              games={item.games.slice(0, 4)}
              title={item.name}
            />
          </TouchableOpacity>
        )}
      />
    </SafeArea>
  );
};

export default CollectionsScreen;
