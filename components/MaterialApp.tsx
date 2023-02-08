import React from 'react';
import type { MaterialAppProps } from './../Types/MaterialApp.types';
import { styled } from '@stitches/react';
import Colors from './../Defaults/Colors';
import { DefaultColorScheme } from './../Defaults/ColorScheme';

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
  // const themeColor = theme.brightness
  // const primaryColor = !!theme.colorScheme.primary ?? Colors.blue
  // const titleStyle = !!theme.textTheme ? theme.textTheme : '#fff'
  const scheme = theme?.colorScheme ?? DefaultColorScheme;

  const TextStyle = styled('p', {
    color: Colors.black,
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '0px',
    textUnderlinePosition: 'under',
    textUnderlineOffset: '2px',
    textDecoration: 'underline',
    textDecorationColor: Colors.yellow,
    textDecorationThickness: '5px',
  });

  const Title = styled('p', {
    color: Colors.white,
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '0px',
  });

  const Body = styled('div', {
    width: '100%',
    height: '100%',
    backgroundColor: scheme?.background,
    color: Colors.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  });

  // const Bar = styled('div', {
  //   width: '100%',
  //   height: '50px',
  //   backgroundColor: scheme.background,
  //   color: Colors.blue,
  //   display: 'flex',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // });

  return (
    <Body>
      {title && <Title>{title}</Title>}
      {home ? home : <TextStyle>Hello World</TextStyle>}
    </Body>
  );
}
