/**
 *
 * All of the properties are optional, so that they can be overridden by the user
 *  - primary: The primary color of the app. This is used for the AppBar and the BottomNavigationBar.
 * - primaryVariant: The primary variant color of the app. This is used for the AppBar and the BottomNavigationBar.
 * - secondary: The secondary color of the app. This is used for the AppBar and the BottomNavigationBar.
 * - tertiary: The tertiary color of the app. This is used for the AppBar and the BottomNavigationBar.
 * - background: The background color of the app. This is used for the AppBar and the BottomNavigationBar.
 * - surface: The surface color of the app. This is used for the AppBar and the BottomNavigationBar.
 * - error: The error color of the app. This is used for the AppBar and the BottomNavigationBar.
 * - accent: The accent color of the app. This is used for the AppBar and the BottomNavigationBar.
 *
 *
 */

type ColorScheme = {
  primary?: string;
  primaryVariant?: string;
  secondary?: string;
  tertiary?: string;
  background?: string;
  surface?: string;
  error?: string;
  accent?: string;
};
export default ColorScheme;
