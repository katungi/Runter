import React from 'react';
import { styled } from '@stitches/react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

/**
 *
 * Root receives an initial component and renders it on the screen. This component also ideally should cover the entire screen
   and should be the only component that is rendered on the screen. This component should be the root component of the application.
 *  For starters, we can just render a div with a white background and center the children in the middle of the screen.
 * This should be wrapped in the root component of the RN application. This is so that we can have control over stuff like routing and navigation and theming -
   and other stuff that we might want to do in the future.

  * @param {React.ReactNode} children - The children of the root component
  *
  * @returns {React.ReactElement} - The root component
  *
  *
 */

export default function Root({ children }: { children: React.ReactNode }): React.ReactElement {
  return (

    // this does not work, but it should work in the future when we have a theme provider
    <PaperProvider>
      <View style={styles.root}>{children}</View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
})


