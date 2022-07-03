import React from "react";
import { View, Text, Heading, Center, NativeBaseProvider } from "native-base";
import "./Quotes.css";

export default () => {
    return (
        <div className="quotes">
            <View>
                <Heading alignSelf="center">
                It is health that is the {" "}
                    <Heading color="dark">Real wealth</Heading>
                </Heading>
                <Text p='25' fontWeight="650">
                “The human body has been designed to resist an infinite number of changes and attacks brought 
                about by its environment.The secret of good health lies in successful adjustment 
                to changing stresses on the body.” – Harry J. Johnson
                </Text>
                <Text p='25' fontWeight="650">
                “The doctor of the future will give no medicine, but will instruct his patients in care of the 
                human frame, in diet, and in the cause and prevention of disease.” – Thomas Edison
                </Text>
            </View>
        </div>
    )
};