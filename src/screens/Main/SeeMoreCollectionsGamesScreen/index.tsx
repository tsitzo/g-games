import React, { FC, useContext } from "react";
import { FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import GridCoverImageCard from "../../../components/GridCoverImageCard";
import { CollectionsContext } from "../../../context/CollectionsContext";
import { AppStackParams } from "../../../types";

import { styles } from "./styles";

interface ISeeMoreCollectionsGamesScreenProps {
  navigation: NativeStackNavigationProp<
    AppStackParams,
    "SeeMoreCollectionsGamesScreen"
  >;
  route: RouteProp<AppStackParams, "SeeMoreCollectionsGamesScreen">;
}

const SeeMoreCollectionsGamesScreen: FC<ISeeMoreCollectionsGamesScreenProps> =
  ({ route, navigation }) => {
    const { collection } = route.params;

    const { archive, backlog, wishlist } = useContext(CollectionsContext);

    const getGames = (collection: string) => {
      switch (collection) {
        case "Archive":
          return archive;
        case "Backlog":
          return backlog;
        case "Wishlist":
          return wishlist;
        default:
          return [];
      }
    };

    return (
      <SafeAreaView style={styles.page}>
        <FlatList
          style={styles.flatList}
          numColumns={3}
          data={getGames(collection)}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("GameDetailsScreen", {
                  id: item.id,
                })
              }
              style={styles.imageWrapper}
            >
              <GridCoverImageCard game={item} />
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    );
  };

export default SeeMoreCollectionsGamesScreen;
