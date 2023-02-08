import React from 'react';
import { Text, View } from 'react-native';
import type { ScaffoldProps } from 'Types/ScaffoldProps';

export default function Scaffold({body, primary, backgroundColor, appBar, bottomNavigationBar, floatingActionButton}: ScaffoldProps): React.ReactElement {
  return (
    <View style={{backgroundColor: backgroundColor }}>
      {appBar && appBar}
      {body && body}
      {floatingActionButton && floatingActionButton}
      {bottomNavigationBar && bottomNavigationBar}
    </View>
  );
}

