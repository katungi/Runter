import type { ColorScheme } from "./ColorScheme";
import type { TextTheme } from "./TextThemes";

type BrightnessType = 'light' | 'dark';

interface ThemeData {
  colorScheme: ColorScheme;
  textTheme: TextTheme;
  brightness: BrightnessType;
  title: string;
  dark: boolean;
}

/* It's exporting the type `ThemeData` so that it can be imported by other files. */
export type { ThemeData };