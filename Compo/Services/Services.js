import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
    Box,
    Center,
    Text,
    HStack,
    AspectRatio,
    Image,
    Stack,
    Heading
} from 'native-base';

import './Services.css';

export default function Services() {
    return (
        <div className="Services">
            <div className="Services-item">
                <Box alignItems="center">
                    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                        borderColor: "coolGray.600",
                        backgroundColor: "gray.700"
                    }} _web={{
                        shadow: 2,
                        borderWidth: 0
                    }} _light={{
                        backgroundColor: "gray.50"
                    }}>
                        <Box>
                            <AspectRatio w="300%" ratio={16 / 9}>
                                <Image source={{
                                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB6mywj0WPJoqecUTbxfVesg-B92l31xgDJA&usqp=CAU"
                                }} alt="image" />
                            </AspectRatio>
                        </Box>
                        <Stack p="4" space={3}>
                            <Stack space={2}>
                                <Heading size="md" ml="-1">
                                    Doctor
                                </Heading>
                                <Text fontSize="xs" _light={{
                                    color: "violet.500"
                                }} _dark={{
                                    color: "violet.400"
                                }} fontWeight="500" ml="-0.5" mt="-1">
                                    Doctor
                                </Text>
                            </Stack>
                            <Text fontWeight="400">
                                Unbreakable
                            </Text>
                            <HStack alignItems="center" space={2} justifyContent="space-between">
                                <HStack alignItems="center">
                                    <Text color="coolGray.600" _dark={{
                                        color: "warmGray.200"
                                    }} fontWeight="400">
                                        Trust
                                    </Text>
                                </HStack>
                            </HStack>
                        </Stack>
                    </Box>
                </Box>
            </div>
            {/* <div className="Services-item">
                <Box alignItems="center">
                    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                        borderColor: "coolGray.600",
                        backgroundColor: "gray.700"
                    }} _web={{
                        shadow: 2,
                        borderWidth: 0
                    }} _light={{
                        backgroundColor: "gray.50"
                    }}>
                        <Box>
                            <AspectRatio w="100%" ratio={16 / 9}>
                                <Image source={{
                                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCvErmxO_FMP3ER64visRrFbwubv1smZiTwQ&usqp=CAU"
                                }} alt="image" />
                            </AspectRatio>
                        </Box>
                        <Stack p="4" space={3}>
                            <Stack space={2}>
                                <Heading size="md" ml="-1">
                                    Standard
                                </Heading>
                                <Text fontSize="xs" _light={{
                                    color: "violet.500"
                                }} _dark={{
                                    color: "violet.400"
                                }} fontWeight="500" ml="-0.5" mt="-1">
                                    The Silicon Valley of India.
                                </Text>
                            </Stack>
                            <Text fontWeight="400">
                                Bengaluru (also called Bangalore) is the center of India's high-tech
                                industry. The city is also known for its parks and nightlife.
                            </Text>
                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                <HStack alignItems="center">
                                    <Text color="coolGray.600" _dark={{
                                        color: "warmGray.200"
                                    }} fontWeight="400">
                                        6 mins ago
                                    </Text>
                                </HStack>
                            </HStack>
                        </Stack>
                    </Box>
                </Box>
            </div> */}
            <div className="Services-item">
                <Box alignItems="center">
                    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                        borderColor: "coolGray.600",
                        backgroundColor: "gray.700"
                    }} _web={{
                        shadow: 2,
                        borderWidth: 0
                    }} _light={{
                        backgroundColor: "gray.50"
                    }}>
                        <Box>
                            <AspectRatio w="300%" ratio={16 / 9}>
                                <Image source={{
                                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCvErmxO_FMP3ER64visRrFbwubv1smZiTwQ&usqp=CAU"
                                }} alt="image" />
                            </AspectRatio>
                        </Box>
                        <Stack p="4" space={3}>
                            <Stack space={2}>
                                <Heading size="md" ml="-1">
                                    Patient
                                </Heading>
                                <Text fontSize="xs" _light={{
                                    color: "violet.500"
                                }} _dark={{
                                    color: "violet.400"
                                }} fontWeight="500" ml="-0.5" mt="-1">
                                    Patient
                                </Text>
                            </Stack>
                            <Text fontWeight="400">
                                Crucial
                            </Text>
                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                <HStack alignItems="center">
                                    <Text color="coolGray.600" _dark={{
                                        color: "warmGray.200"
                                    }} fontWeight="400">
                                        Responsibility
                                    </Text>
                                </HStack>
                            </HStack>
                        </Stack>
                    </Box>
                </Box>
            </div>
        </div>
    );
}
