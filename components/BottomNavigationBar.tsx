import { Box, Center, HStack, Icon, Pressable, Text } from 'native-base';
import React from 'react';
import type { BottomNavigationProps } from 'Types/BottomNavigationProps';

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
