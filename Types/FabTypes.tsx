type FabTypes = {
  icon: string;
  onPress: () => void;
  position: "absolute" | "fixed";
  label: string,
  uppercase?: boolean,
  animated?: boolean,
  color?: string,
  disabled?: boolean,
  loading?: boolean,
  size?: "small" | "medium" | "large",
  styles?: any
}