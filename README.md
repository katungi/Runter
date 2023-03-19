# runter

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

A concise way of making applications using a Flutter Like approach.
<br>
When you think about it, Flutter comes with a component library, a default language (dart) and an Engine (Skia).
<br>
This library is an attempt to bring the component library and the framework to React Native.

## Why?

Still trying to figure that out. But I think it's because I love Flutter and I love React Native and I would want the best of both worlds.

⚠️ Experimental WIP ⚠️

## Installation

```sh
npm install runter
```

or

```sh
yarn add runter
```

## Usage

To get started, import the `Root` component from the `runter` package.
<br>
This component is the root of your application and should be rendered at the top of your component tree. It is the equivalent of `runApp` in [Flutter](https://api.flutter.dev/flutter/widgets/runApp.html).

Root takes a component child `MaterialApp` which is the main component of the library. It is the equivalent of `MaterialApp` in [Flutter](https://api.flutter.dev/flutter/material/MaterialApp-class.html).

MaterialApp takes a `home` prop which is the main component of your application.

MaterialApp also takes a `theme` prop which is an object that contains the theme of your application.

The theme object takes a `colorScheme` prop which is an object that contains the colors of your application.

The theme object also takes a `title` prop which is the title of your application.

```js
// in App.js
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

// ...
```

## Components

I am working to bring all the components from Flutter to React Native. Starting with the basic ones. Here is a list of the components that are in the frontline of development.

<input type="checkbox" disabled checked /> Scaffold - In Testing 🧪 <br/> <input type="checkbox" disabled checked /> AppBar - In Testing 🧪 <br/> <input type="checkbox" disabled checked /> FloatingActionButton - In Testing 🧪 <br/> <input type="checkbox" disabled /> Container <br/> <input type="checkbox" disabled /> Row <br/> <input type="checkbox" disabled /> Column <br/> <input type="checkbox" disabled /> Center <br/> <input type="checkbox" disabled /> Stack <br/> <input type="checkbox" disabled /> Positioned <br/> <input type="checkbox" disabled /> Image <br/> <input type="checkbox" disabled /> Icon <br/> <input type="checkbox" disabled /> IconButton <br/>

## Roadmap

The current focus is building the basic 2 components (Root and MaterialApp) and making sure they work as expected. After that, I will be working on the components listed above.

The next thing will probably be routing and navigation. I am still trying to figure out how to do that.

I will also be working on the documentation and the examples.

## Contributing

This idea is insane and still in its infancy and is no where ready for production.
<br>
If you would like to contribute, please do so.
<br>
See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with ❤️ by [Daniel Dennis](https://github.com/katungi)
