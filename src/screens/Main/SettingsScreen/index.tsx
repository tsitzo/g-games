import React, { FC, useContext } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import Spacer from "../../../components/Spacer";
import Typography from "../../../components/Typography";

import { ThemeContext } from "../../../context/ThemeContext";
import { AppStackParams } from "../../../types";
import { styles } from "./styles";

interface ISettingsScreenProps {
  navigation: NativeStackNavigationProp<AppStackParams, "AppTabs">;
}

const SettingsScreen: FC<ISettingsScreenProps> = ({ navigation }) => {
  const { isDarkTheme, switchTheme } = useContext(ThemeContext);
  const { colors } = useTheme();
  return (
    <SafeAreaView style={styles.page}>
      <ScrollView style={styles.pageContent}>
        <Spacer y={30} />
        <View>
          <Typography size={20} variant="bold">
            Preferences
          </Typography>
        </View>

        <Spacer y={30} />
        <TouchableOpacity
          style={styles.settingRow}
          onPress={() => navigation.push("PlatformsSelectScreen")}
        >
          <Typography variant="light" size={16}>
            Platforms
          </Typography>
          <Ionicons name="md-chevron-forward" size={18} color={colors.text} />
        </TouchableOpacity>

        <Spacer y={30} />

        <TouchableOpacity
          style={styles.settingRow}
          onPress={() => navigation.push("GenresSelectScreen")}
        >
          <Typography variant="light" size={16}>
            Genres
          </Typography>
          <Ionicons name="md-chevron-forward" size={18} color={colors.text} />
        </TouchableOpacity>

        <Spacer y={30} />

        <View style={styles.settingRow}>
          <Typography variant="light" size={16}>
            Dark Mode
          </Typography>

          <Switch
            trackColor={{ true: colors.primary, false: "grey" }}
            value={isDarkTheme}
            onValueChange={() => switchTheme()}
            style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
          />
        </View>

        <Spacer y={50} />
        <View>
          <Typography size={20} variant="bold">
            Infos
          </Typography>
        </View>

        <Spacer y={30} />
        <TouchableOpacity style={styles.settingRow}>
          <Typography variant="light" size={16}>
            About
          </Typography>
          <Ionicons name="md-chevron-forward" size={18} color={colors.text} />
        </TouchableOpacity>

        <Spacer y={30} />

        <TouchableOpacity style={styles.settingRow}>
          <Typography variant="light" size={16}>
            Version
          </Typography>
          <Ionicons name="md-chevron-forward" size={18} color={colors.text} />
        </TouchableOpacity>

        <Spacer y={30} />

        <TouchableOpacity
          style={styles.settingRow}
          onPress={() =>
            AsyncStorage.getAllKeys()
              .then((keys) => AsyncStorage.multiRemove(keys))
              .then(() => alert("All Keys removed"))
          }
        >
          <Typography variant="light" size={16}>
            Clear Settings
          </Typography>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;
