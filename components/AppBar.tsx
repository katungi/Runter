import React from 'react';
import { Appbar } from 'react-native-paper';
import type { AppBarProps } from 'Types/AppBarTypes';

/**
 *
 *
 *
 *  This is the appbar component, it will act as the basis of the top part of the scaffold. It will contain the title of the app and the menu button.
 *  The menu button will be a hamburger menu icon. The title will be the name of the app.
 *  The app bar will be a fixed component that will be rendered on the top of the screen.
 *  The app bar will be rendered on the top of the screen. It will be a fixed component. It will contain the title of the app and the menu button.
 *  The menu button will be a hamburger menu icon. The title will be the name of the app and the actions of the app bar. The actions will be rendered on the right side of the app bar.
 *   The AppBar takes the following props
 *  @param title - The title of the app bar
 *  @param leading - The leading component of the app bar - preferably an Icon button
 *  @param actions - The actions of the app bar - preferably an array of Icon buttons
 *
 *  @returns {React.ReactElement} - The app bar component
 *
 *  TODO: Add a prop to change the position of the app bar
 */

export default function AppBar({
  title,
  leading,
  actions,
  backAction,
}: AppBarProps): React.ReactElement {
  return (
    <Appbar.Header>
      {backAction && <Appbar.BackAction onPress={() => {}} />}
      {leading && <Appbar.Content title={title} />}
      {actions &&
        actions.map((action) => (
          <Appbar.Action icon={action.icon} onPress={action.onPress} />
        ))}
    </Appbar.Header>
  );
}
