import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { FC } from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import CoverImageCard from "../../../components/CoverImageCard";
import GridCoverImageCard from "../../../components/GridCoverImageCard";
import { AppStackParams } from "../../../types";

import { styles } from "./styles";

interface ISeeMoreGamesScreenProps {
  navigation: NativeStackNavigationProp<AppStackParams, "SeeMoreGamesScreen">;
  route: RouteProp<AppStackParams, "SeeMoreGamesScreen">;
}

const SeeMoreGamesScreen: FC<ISeeMoreGamesScreenProps> = ({
  route,
  navigation,
}) => {
  const { games } = route.params;
  return (
    <SafeAreaView>
      <FlatList
        style={styles.flatList}
        numColumns={3}
        data={games}
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

export default SeeMoreGamesScreen;
