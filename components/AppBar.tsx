import Colors from 'Defaults/Colors';
import { Box, HStack, Icon, IconButton, StatusBar, Text } from 'native-base';
import React from 'react';
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
}: AppBarProps): React.ReactElement {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Box safeAreaTop bg="violet.600" />
      <HStack
        bg="violet.600"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW="350"
      >
        <HStack alignItems="center">
          <IconButton
            icon={<Icon size="sm" as={leading} name="menu" color="white" />}
          />
          <Text color={Colors.white} fontSize="20" fontWeight="bold">
            {title}
          </Text>
        </HStack>
        {actions && (
          <HStack>
            {actions.map(
              (
                action:
                  | boolean
                  | React.ReactChild
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined,
                index: React.Key | null | undefined
              ) => {
                <div key={index}>{action}</div>;
              }
            )}
          </HStack>
        )}
      </HStack>
    </>
  );
}
