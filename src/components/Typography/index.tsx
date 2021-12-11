import React, { FC } from "react";
import { useTheme } from "@react-navigation/native";
import { TextStyle, Text, TextProps } from "react-native";

import { styles } from "./styles";

interface ITypographyProps extends TextProps {
  style?: TextStyle | TextStyle[];
  variant?: "light" | "regular" | "bold" | "black";
  color?: "primary" | "text" | "subtext";
  size?: number;
}

const Typography: FC<ITypographyProps> = ({
  children,
  variant,
  style,
  color = "text",
  size = 14,
  ...rest
}) => {
  const { colors } = useTheme();
  let textStyle;
  switch (variant) {
    case "light":
      textStyle = styles.light;
      break;
    case "regular":
      textStyle = styles.regular;
      break;
    case "bold":
      textStyle = styles.bold;
      break;
    case "black":
      textStyle = styles.black;
      break;
    default:
      textStyle = styles.light;
      break;
  }

  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return (
    <Text
      style={[
        textStyle,
        { color: colors[color], fontSize: size },
        { ...passedStyles },
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default Typography;
