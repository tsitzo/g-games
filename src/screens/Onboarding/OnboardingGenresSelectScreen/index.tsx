import { useTheme } from "@react-navigation/native";
import React, { useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import GenresSelectionTile from "../../../components/GenresSelectionTile";
import Spacer from "../../../components/Spacer";
import Typography from "../../../components/Typography";

import { SettingsContext } from "../../../context/SettingsContext";
import { styles } from "./styles";

const OnboardingGenresSelectScreen = () => {
  const { genres, selectedGenres, setFirstVisitFalse } =
    useContext(SettingsContext);
  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.header}>
        <Typography>Also let us know what kind of games you like.</Typography>
      </View>
      <Spacer y={20} />
      <View style={styles.content}>
        <FlatList
          data={genres
            .sort(
              (a, b) =>
                selectedGenres.indexOf(b.id) - selectedGenres.indexOf(a.id)
            )
            .sort((a, b) => a.name.localeCompare(b.name))}
          renderItem={({ item }) => <GenresSelectionTile genre={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          disabled={selectedGenres.length < 1}
          style={[
            styles.button,
            {
              backgroundColor:
                selectedGenres.length < 1 ? "grey" : colors.primary,
            },
          ]}
          onPress={() => setFirstVisitFalse()}
        >
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingGenresSelectScreen;
