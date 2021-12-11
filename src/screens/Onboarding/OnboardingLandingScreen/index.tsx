import { useTheme } from "@react-navigation/native";
import React, { FC } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Typography from "../../../components/Typography";

import { styles } from "./styles";
import Spacer from "../../../components/Spacer";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParams } from "../../../types";

interface IOnboardingLandingScreenProps {
  navigation: NativeStackNavigationProp<
    AppStackParams,
    "OnboardingLandingScreen"
  >;
}

const OnboardingLandingScreen: FC<IOnboardingLandingScreenProps> = ({
  navigation,
}) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={styles.centeredPage}>
      <Image
        source={require("../../../../assets/videogame.png")}
        style={styles.image}
      />
      <Spacer y={20} />

      <Typography variant="bold" size={22}>
        Welcome to GGames
      </Typography>
      <Spacer y={20} />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => navigation.push("OnboardingPlatformsSelectScreen")}
      >
        <Text style={styles.buttonText}>Let's go </Text>
        <Ionicons name="arrow-forward-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnboardingLandingScreen;
