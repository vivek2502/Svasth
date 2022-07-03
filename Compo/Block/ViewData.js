import React from "react";
import { View, Text, Heading, Center, NativeBaseProvider } from "native-base";

const Example = () => {
  return <View>
      <Heading>
        A component library for the{" "}
        <Heading color="emerald.400">React Ecosystem</Heading>
      </Heading>
      <Text pt="3" fontWeight="md">
        NativeBase is a simple, modular and accessible component library that
        gives you building blocks to build you React applications.
      </Text>
    </View>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
    