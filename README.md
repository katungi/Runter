# runter

A concise way of making applications using a Flutter Like approach.

The best of both worlds, React Native and Flutter.

## Installation

```sh
npm install runter
```

 or

```sh
yarn add runter
```

## Usage

To get started, import the `Root` component from the `runter` package. This component is the root of your application and should be rendered at the top of your component tree.

Root takes a component child `MaterialApp` which is the main component of the library.

MaterialApp takes a `home` prop which is the main component of your application.

MaterialApp also takes a `theme` prop which is an object that contains the theme of your application.

The theme object takes a `colorScheme` prop which is an object that contains the colors of your application.

The theme object also takes a `title` prop which is the title of your application.

```js
// in App.js
import React from 'react';
import { Root, MaterialApp } from 'runter' // <-- This is the library

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
          title: 'Runter Example'
        }}
        title="Runter Example"
      />
    </Root>
  );
}


// ...

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
