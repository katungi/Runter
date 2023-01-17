import { Box, Center, HStack, Icon, Pressable, Text } from 'native-base';
import React from 'react';
import type { BottomNavigationProps } from 'Types/BottomNavigationProps';

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

export default function BottomNavigationBar({
  navItems,
}: BottomNavigationProps) {
  const [selected, setSelected] = React.useState(1);
  return (
    <Box
      flex={1}
      bg="white"
      safeAreaTop
      width="100%"
      maxW="300px"
      alignSelf="center"
    >
      <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
        {navItems.map((item: any, index: any) => (
          <Pressable
            key={index}
            opacity={selected === 0 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => setSelected(0)}
          >
            <Center>
              <Icon mb="1" as={item.icon} color="white" size="sm" />
              <Text color="white" fontSize="12">
                {item.label}
              </Text>
            </Center>
          </Pressable>
        ))}
      </HStack>
    </Box>
  );
}
