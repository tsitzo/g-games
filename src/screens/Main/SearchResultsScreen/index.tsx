import React, { FC, useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { RouteProp, useTheme } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { AppStackParams, Game } from "../../../types";
import { styles } from "./styles";
import { api } from "../../../api";
import SafeArea from "../../../components/SafeArea";
import Typography from "../../../components/Typography";
import GridCoverImageCard from "../../../components/GridCoverImageCard";

interface ISearchResultsScreenProps {
  navigation: NativeStackNavigationProp<AppStackParams, "SearchResultsScreen">;
  route: RouteProp<AppStackParams, "SearchResultsScreen">;
}

const SearchResultsScreen: FC<ISearchResultsScreenProps> = ({
  route,
  navigation,
}) => {
  const { query } = route.params;
  const { colors } = useTheme();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [searchResults, setSearchResults] = useState<Game[] | null>(null);

  const getSearchResults = async (keyword: string) => {
    setIsLoading(true);
    setError(false);
    try {
      const response = await api.post(
        "/games",
        `fields name, cover.url, name; where cover != null; search "${keyword}" ;limit 50;`
      );

      // if (response.data.length % 3 === 0) {
      //   setSearchResults(response.data);
      // } else {
      //   setSearchResults(
      //     response.data.slice(
      //       0,
      //       response.data.length - (response.data.length % 3)
      //     )
      //   );
      // }

      setSearchResults(response.data);
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getSearchResults(query);
  }, [query]);

  if (isLoading) {
    return (
      <SafeArea>
        <View style={styles.centeredPage}>
          <ActivityIndicator size={40} color={colors.primary} />
        </View>
      </SafeArea>
    );
  }

  if (!isLoading && error) {
    return (
      <SafeArea>
        <View style={styles.centeredPage}>
          <Typography>Error getting data.</Typography>
        </View>
      </SafeArea>
    );
  }
  return (
    <SafeArea>
      <FlatList
        style={styles.flatList}
        numColumns={3}
        data={searchResults}
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
    </SafeArea>
  );
};

export default SearchResultsScreen;
