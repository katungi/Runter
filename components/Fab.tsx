import React from "react";
import { FAB } from "react-native-paper";

export default function Fab({ position, icon, onPress, label, uppercase, animated, color, disabled, loading, size, styles }: FabTypes): React.ReactElement {
  return (
    <FAB
      icon={icon}
      onPress={onPress}
      label={label}
      uppercase={uppercase}
      animated={animated}
      color={color}
      disabled={disabled}
      loading={loading}
      size={size}
      style={{ ...styles, position: position }}
    />
  )
}