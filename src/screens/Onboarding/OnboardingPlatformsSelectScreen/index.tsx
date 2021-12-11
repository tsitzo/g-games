import { useTheme } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { FC, useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import PlatformSelectionTile from "../../../components/PlatformSelectionTile";
import Spacer from "../../../components/Spacer";
import Typography from "../../../components/Typography";

import { SettingsContext } from "../../../context/SettingsContext";
import { AppStackParams } from "../../../types";

import { styles } from "./styles";

interface IOnboardingPlatformsSelectScreenProps {
  navigation: NativeStackNavigationProp<
    AppStackParams,
    "OnboardingPlatformsSelectScreen"
  >;
}

const OnboardingPlatformsSelectScreen: FC<IOnboardingPlatformsSelectScreenProps> =
  ({ navigation }) => {
    const { platforms, selectedPlatforms } = useContext(SettingsContext);
    const { colors } = useTheme();

    return (
      <SafeAreaView style={styles.page}>
        <View style={styles.header}>
          <Typography>
            To get a tailored experience let us know what kind of platforms you
            like/own.
          </Typography>
        </View>
        <Spacer y={20} />
        <View style={styles.content}>
          <FlatList
            data={platforms
              .sort((a, b) => a.name.localeCompare(b.name))
              .sort(
                (a, b) =>
                  selectedPlatforms.indexOf(b.id) -
                  selectedPlatforms.indexOf(a.id)
              )}
            renderItem={({ item }) => <PlatformSelectionTile platform={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            disabled={selectedPlatforms.length < 1}
            style={[
              styles.button,
              {
                backgroundColor:
                  selectedPlatforms.length < 1 ? "grey" : colors.primary,
              },
            ]}
            onPress={() => navigation.push("OnboardingGenresSelectScreen")}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

export default OnboardingPlatformsSelectScreen;
