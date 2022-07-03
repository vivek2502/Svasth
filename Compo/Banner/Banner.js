import React from "react";
import { View, Text, Heading, Center, NativeBaseProvider } from "native-base";
import "./banner.css";

const Example = () => {
    return (
        <View>
            <Heading>
            A Blockchain-based e-health records storage and sharing application{" "}
                <Heading fontSize="50px" color="emerald.400">SVASTH</Heading>
            </Heading>
            {/* <Center>
                <Text fontSize="20px" pt="10" fontWeight="650">
                A blockchain-based e-health records storage and sharing scheme{" "} 
                    <Text fontSize="30px" pt="10" fontWeight="650" color="emerald.400">
                        SVASTH.
                    </Text>
                </Text>
            </Center> */}
        </View>
    );
};

export default () => {
    return (
        <div className="banner">
            <div className="content">
                <Center flex={1} px="3">
                    <Example />
                </Center>
            </div>
        </div>
    );
};
