import React from 'react';
import { Text } from 'react-native';

import { Root, MaterialApp } from 'runter'; // <-- This is the library

export default function App() {
  return (
    <Root>
      <MaterialApp
        home={<Text>New Project</Text>}
        theme={{
          colorScheme: {
            primary: '#2196F3',
            background: '#fff',
          },
          title: 'Runter Example',
        }}
        title="Runter Example"
      />
    </Root>
  );
}
