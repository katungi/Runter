/**
 *
 *
 * @file BottomNavigationProps.ts
 *
 * @description BottomNavigation component props.
 *
 * This file contains the props for the BottomNavigation component.
 * The BottomNavigation component is a navigation bar that is displayed
 * at the bottom of the screen. It is used to navigate between different pages
 * in the app.
 *
 * `navItems` is an array of objects that contain the label and icon for each nav item.
 * `onClick` is a function that is called when a nav item is clicked.
 * `position` is a string that determines whether the nav bar is at the top or bottom of the screen. It defaults to 'bottom'. The other option is 'top'.
 * `color` is a string that determines the color of the nav bar. It defaults to '#fff'. The other option is '#000'.
 * `labelled` is a boolean that determines whether the nav bar is labelled or not. It defaults to false.
 * `routes` is an array of objects that contain the title, key, focusedIcon, and unfocusedIcon for each route.
 * see https://material-ui.com/components/bottom-navigation/
 *
 *
 */
// type NavItemType = {
//   label: string;
//   icon: React.ReactElement;
// };

type RouteType = {
  title: string;
  key: string;
  focusedIcon: string;
  unfocusedIcon: string;
};

export interface BottomNavigationProps {
  //navItems: Array<NavItemType>;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  position?: 'bottom' | 'top';
  color?: string;
  labelled: boolean;
  routes: Array<RouteType>;
}
