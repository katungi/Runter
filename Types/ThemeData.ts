import type ColorScheme from './ColorScheme';
import type { TextTheme } from './TextThemes';

type BrightnessType = 'light' | 'dark';

/**
 *
 *
 * ThemeData is the type that is used to define the theme of the app.
 * It contains the following properties:
 * - colorScheme: The color scheme of the app. This is used for the AppBar and the BottomNavigationBar.
 * - textTheme: The text theme of the app. This is used for the AppBar and the BottomNavigationBar.
 * - brightness: The brightness of the app. This is used for the AppBar and the BottomNavigationBar.
 * - title: The title of the app. This is used for the AppBar and the BottomNavigationBar.
 * - dark: The dark mode of the app. This is used for the AppBar and the BottomNavigationBar.
 *
 * @file ThemeData.ts
 * @description ThemeData type.
 * @see https://material-ui.com/customization/default-theme/
 * @see https://material-ui.com/customization/color/
 * @see https://material-ui.com/customization/typography/
 * @see https://material-ui.com/customization/palette/
 * @see https://material-ui.com/customization/themes/
 * @see https://material-ui.com/customization/default-theme/
 *
 *
 *
 */
interface ThemeData {
  colorScheme?: ColorScheme;
  textTheme?: TextTheme;
  brightness?: BrightnessType;
  title: string;
  dark?: boolean;
}

/* It's exporting the type `ThemeData` so that it can be imported by other files. */
export type { ThemeData };
