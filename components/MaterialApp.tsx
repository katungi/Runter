import React from 'react';
import type { MaterialAppProps } from './../Types/MaterialApp.types';
import { styled } from '@stitches/react';
import Colors from './../Defaults/Colors';
import { DefaultColorScheme } from './../Defaults/ColorScheme';
import { StyleSheet, Text, View } from 'react-native';

/**
 *
 * Material App is the child component of the root component. This component is responsible for rendering the home component
 * and also for rendering the theme provider. This component should be the root component of the application.
 * @param {React.ReactNode} home - The home component of the application
 * @param {ThemeData} theme - The theme provider of the application
 * @param {string} title - The title of the application
 *
 * @returns {React.ReactElement} - The material app component
 *
 */

export default function MaterialApp({
  home,
  theme,
  title,
}: MaterialAppProps): React.ReactElement {
  const scheme = theme?.colorScheme ?? DefaultColorScheme;

  return (
    <View style={{ ...styles.body, backgroundColor: scheme?.background }}>
      {title && <Text style={styles.defaultTitle}>{title}</Text>}
      {home ? home : <Text style={styles.textStyles}>Hello World</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    color: Colors.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultTitle: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    margin: '0px',
  },
  textStyles: {
    color: Colors.black,
    fontSize: 20,
    fontWeight: 'bold',
    margin: 0,
    textUnderlinePosition: 'under',
    textUnderlineOffset: 2,
    textDecoration: 'underline',
    textDecorationColor: Colors.yellow,
    textDecorationThickness: 5,
  },
});
