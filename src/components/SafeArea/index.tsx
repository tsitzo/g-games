import React, { FC } from "react";
import { SafeAreaView } from "react-native";
import { styles } from "./styles";

const SafeArea: FC = ({ children }) => {
  return <SafeAreaView style={styles.safearea}>{children}</SafeAreaView>;
};

export default SafeArea;
