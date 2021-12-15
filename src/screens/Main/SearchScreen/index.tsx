import { useTheme } from "@react-navigation/native";
import React, { FC, useContext, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SafeArea from "../../../components/SafeArea";

import { styles } from "./styles";
import { SearchContext } from "../../../context/SearchContext";
import Typography from "../../../components/Typography";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParams } from "../../../types";

interface ISearchScreenProps {
  navigation: NativeStackNavigationProp<AppStackParams, "AppTabs">;
}

const SearchScreen: FC<ISearchScreenProps> = ({ navigation }) => {
  const { colors } = useTheme();
  const [searchword, setSearchword] = useState<string>("");
  const { searchHistory, addToHistory, removeFromHistory, clearHistory } =
    useContext(SearchContext);

  return (
    <SafeArea>
      <View style={styles.searchbarWrapper}>
        <TextInput
          placeholder="Search for over 500.000 games"
          placeholderTextColor={colors.subtext}
          onChangeText={(e) => setSearchword(e)}
          value={searchword}
          clearButtonMode="always"
          onEndEditing={({ nativeEvent }) => {
            addToHistory(nativeEvent.text);
            navigation.navigate("SearchResultsScreen", {
              query: searchword,
            });
            setSearchword("");
          }}
          style={[
            styles.searchbarInput,
            { backgroundColor: colors.surface, color: colors.subtext },
          ]}
        />
        <View style={styles.iconWrapper}>
          <Ionicons name="ios-search" size={20} color={colors.subtext} />
        </View>
      </View>

      <View style={styles.searchHistoryHeader}>
        <Typography variant="bold" size={22}>
          Recent Searches
        </Typography>
        <Typography color="primary" onPress={() => clearHistory()}>
          Clear
        </Typography>
      </View>
      <FlatList
        style={styles.flatlist}
        data={searchHistory}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.searchHistoryItem,
              { backgroundColor: colors.surface },
            ]}
            onPress={() => {
              navigation.navigate("SearchResultsScreen", {
                query: item,
              });
            }}
          >
            <Typography color="subtext" variant="regular">
              {item}
            </Typography>
            <Ionicons
              name="close"
              size={20}
              color={colors.primary}
              onPress={() => removeFromHistory(item)}
            />
          </TouchableOpacity>
        )}
      />
    </SafeArea>
  );
};

export default SearchScreen;
