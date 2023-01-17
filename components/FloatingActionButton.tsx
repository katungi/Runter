import { Box, Fab } from 'native-base';
import React from 'react';

/**
 *
 * @param FabIcon - The icon of the floating action button
 * @returns {React.ReactElement} - The floating action button component
 *
 * This is the floating action button component, it will act as the basis of the bottom part of the scaffold.
 * It will contain the icon of the floating action button.
 * The floating action button will be a fixed component that will be rendered on the bottom of the screen.
 *
 *
 * TODO: Add a prop to change the position of the floating action button
 */

export default function FloatingActionButton({
  FabIcon,
}: {
  FabIcon: React.ReactElement;
}) {
  return (
    <Box position="relative" h={100} w="100%">
      <Fab position="absolute" size="sm" icon={FabIcon} />
    </Box>
  );
}
