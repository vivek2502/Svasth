import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Block from '../Block/Block.js';
import ViewData from '../Block/ViewData.js';

const FirstRoute = () => (
  <>
    <Block/>
  </>
);

const SecondRoute = () => (
  <>
    <ViewData/>
  </>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Save On Blockchain' },
    { key: 'second', title: 'View From Blockchain' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}