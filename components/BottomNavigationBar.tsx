import React, { useEffect } from 'react';
import type { BottomNavigationProps } from 'Types/BottomNavigationProps';
import { BottomNavigation } from 'react-native-paper';
import { Text, View } from 'react-native';

/**
 *
 * @param navItems - The items of the bottom navigation bar
 *  `navItems` is an array of objects with the following properties:
 * - `label`: The label of the bottom navigation bar item
 * - `icon`: The icon of the bottom navigation bar item
 * @returns {React.ReactElement} - The bottom navigation bar component
 *
 * This is the bottom navigation bar component, it will act as the basis of the bottom part of the scaffold.
 *  It will contain the items of the bottom navigation bar.
 * The bottom navigation bar will be a fixed component that will be rendered on the bottom of the screen.
 *
 * TODO: Add a prop to change the position of the bottom navigation bar
 *
 */

// const BOTTOM_APPBAR_HEIGHT = 80;
// const MEDIUM_FAB_HEIGHT = 56;

export default function BottomNavigationBar({
  labelled,
  routes,
}: BottomNavigationProps): React.ReactElement {
  const [selected, setSelected] = React.useState(0);
  const [navRoutes, setNavRoutes] = React.useState([
    {
      key: 'music',
      title: 'Favorites',
      focusedIcon: 'heart',
      unfocusedIcon: 'heart-outline',
    },
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    {
      key: 'notifications',
      title: 'Notifications',
      focusedIcon: 'bell',
      unfocusedIcon: 'bell-outline',
    },
  ]);

  useEffect(() => {
    if (routes !== null) {
      setNavRoutes(routes);
    }
  }, [routes]);

  return (
    <BottomNavigation
      labeled={labelled}
      onIndexChange={setSelected}
      navigationState={{ index: selected, routes: navRoutes }}
      renderScene={({ route }) => {
        const index = navRoutes.findIndex((item) => item.key === route.key);
        const routeInfo = routes[index];
        return (
          <View>
            <Text>{routeInfo?.title}</Text>
          </View>
        );
      }}
    />
  );
}
