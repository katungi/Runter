import React from 'react';
import { styled } from '@stitches/react';

/**
 *
 * Root receives an initial component and renders it on the screen. This component also ideally should cover the entire screen
   and should be the only component that is rendered on the screen. This component should be the root component of the application.
 *  For starters, we can just render a div with a white background and center the children in the middle of the screen.
 * This should be wrapped in the root component of the RN application. This is so that we can have control over stuff like routing and navigation and theming -
   and other stuff that we might want to do in the future.
 */

export default function Root({ children }: { children: React.ReactNode }) {
  const RootWidget = styled('div', {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  });
  return <RootWidget>{children}</RootWidget>;
}
