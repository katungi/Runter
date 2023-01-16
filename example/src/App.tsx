import React from 'react';
import { Root, MaterialApp } from 'runter'; // <-- This is the library

export default function App() {
  return (
    <Root>
      <MaterialApp
        home={<div>Home</div>}
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
