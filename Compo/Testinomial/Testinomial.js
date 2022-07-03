import { StatusBar } from 'expo-status-bar';
import {
    Text,
    Box,
    AspectRatio,
    Center,
    Image,
    Stack,
    Heading,
    HStack,
    NativeBaseProvider,
    Avatar
} from 'native-base';
import './Testinomial.css';

export default function Testinomial() {
    return (
        <div className="Testinomial">
            <div className="Testinomial-item">
                <Box>
                    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                        borderColor: "coolGray.600",
                        backgroundColor: "gray.700"
                    }} _web={{
                        shadow: 2,
                        borderWidth: 0
                    }} _light={{
                        backgroundColor: "white.100"
                    }}>

                        <Box>
                            <AspectRatio w="100%">
                                <Center>
                                    <Avatar bg="purple.600" size="2xl" source={{
                                        uri: "data:image/png;base64,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"
                                    }}>
                                        RB
                                    </Avatar>
                                </Center>
                            </AspectRatio>
                        </Box>

                        <Stack p="4" space={3}>
                            <Stack space={2}>
                                <Center>
                                    <Heading size="md" ml="-1">
                                    Testimonial 
                                    </Heading>
                                </Center>
                            </Stack>
                            <Text fontWeight="400">
                                Yours precious Thought
                            </Text>
                        </Stack>
                    </Box>
                </Box>
            </div>
            <div className="Testinomial-item">
                <Box>
                    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                        borderColor: "coolGray.600",
                        backgroundColor: "gray.700"
                    }} _web={{
                        shadow: 2,
                        borderWidth: 0
                    }} _light={{
                        backgroundColor: "white.100"
                    }}>

                        <Box>
                            <AspectRatio w="100%">
                                <Center>
                                    <Avatar bg="purple.600" size="2xl" source={{
                                        uri: "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg"
                                    }}>
                                        RB
                                    </Avatar>
                                </Center>
                            </AspectRatio>
                        </Box>

                        <Stack p="4" space={3}>
                            <Stack space={2}>
                                <Center>
                                    <Heading size="md" ml="-1">
                                    H Choudhary
                                    </Heading>
                                </Center>
                            </Stack>
                            <Text fontWeight="400">
                                Wonderful Project Idea
                            </Text>
                        </Stack>
                    </Box>
                </Box>
            </div>
            <div className="Testinomial-item">
                <Box alignItems="center">
                    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                        borderColor: "coolGray.600",
                        backgroundColor: "gray.700"
                    }} _web={{
                        shadow: 2,
                        borderWidth: 0
                    }} _light={{
                        backgroundColor: "white.100"
                    }}>

                        <Box alignItems="center">
                            <AspectRatio w="100%">
                                <Center>
                                    <Avatar bg="purple.600" size="2xl" source={{
                                        uri: "https://media-exp1.licdn.com/dms/image/C5103AQGPHU2A9nd3lQ/profile-displayphoto-shrink_200_200/0/1539499399310?e=1661990400&v=beta&t=rxXAiGvkwC3zsJWZ9sukJS8HVvCp_CvOjbAxEn1M-Ac"
                                    }}>
                                        RB
                                    </Avatar>
                                </Center>
                            </AspectRatio>
                        </Box>

                        <Stack p="4" space={3}>
                            <Stack space={2}>
                                <Center>
                                    <Heading size="md" ml="-1">
                                    Krish Naik
                                    </Heading>
                                </Center>
                            </Stack>
                            <Text fontWeight="400">
                            Wonderful Project Idea
                            </Text>
                        </Stack>
                    </Box>
                </Box>
            </div>
            <div className="Testinomial-item">
                <Box>
                    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                        borderColor: "coolGray.600",
                        backgroundColor: "gray.700"
                    }} _web={{
                        shadow: 2,
                        borderWidth: 0
                    }} _light={{
                        backgroundColor: "white.100"
                    }}>

                        <Box>
                            <AspectRatio w="100%">
                                <Center>
                                    <Avatar bg="purple.600" size="2xl" source={{
                                        uri: "https://media-exp1.licdn.com/dms/image/C5603AQG5aAveSRk8aw/profile-displayphoto-shrink_200_200/0/1635777767747?e=1661990400&v=beta&t=zGex06sTopxIGjwV-OUZqCL7m3WQHsgjT2s-Od1aeqo"
                                    }}>
                                        RB
                                    </Avatar>
                                </Center>
                            </AspectRatio>
                        </Box>

                        <Stack p="4" space={3}>
                            <Stack space={2}>
                                <Center>
                                    <Heading size="md" ml="-1">
                                    S Kumar
                                    </Heading>
                                </Center>
                            </Stack>
                            <Text fontWeight="400">
                                Wonderful Project Idea
                            </Text>
                        </Stack>
                    </Box>
                </Box>
            </div>
            <div className="Testinomial-item">
                <Box>
                    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                        borderColor: "coolGray.600",
                        backgroundColor: "gray.700"
                    }} _web={{
                        shadow: 2,
                        borderWidth: 0
                    }} _light={{
                        backgroundColor: "white.100"
                    }}>

                        <Box>
                            <AspectRatio w="100%">
                                <Center>
                                    <Avatar bg="purple.600" size="2xl" source={{
                                        uri: "https://media-exp1.licdn.com/dms/image/C5103AQFoWrDC0LJ6Qw/profile-displayphoto-shrink_100_100/0/1572255042551?e=1661990400&v=beta&t=9Q6WsWkvezt50Wh31Y4mFAs1aZ0y0rTGWoFetqDysMw"
                                    }}>
                                        RB
                                    </Avatar>
                                </Center>
                            </AspectRatio>
                        </Box>

                        <Stack p="4" space={3}>
                            <Stack space={2}>
                                <Center>
                                    <Heading size="md" ml="-1">
                                    Sanket Sahu
                                    </Heading>
                                </Center>
                            </Stack>
                            <Text fontWeight="400">
                                Wonderful Project Idea
                            </Text>
                        </Stack>
                    </Box>
                </Box>
            </div>
            <div className="Testinomial-item">
                <Box>
                    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                        borderColor: "coolGray.600",
                        backgroundColor: "gray.700"
                    }} _web={{
                        shadow: 2,
                        borderWidth: 0
                    }} _light={{
                        backgroundColor: "white.100"
                    }}>

                        <Box>
                            <AspectRatio w="100%">
                                <Center>
                                    <Avatar bg="purple.600" size="2xl" source={{
                                        uri: "https://media-exp1.licdn.com/dms/image/C4D0BAQGv3PNdNbwuQw/company-logo_200_200/0/1656654459959?e=1665014400&v=beta&t=WNetTnucdtFJTn2BJUc90wF34IwhJ-EELNYMOVydVZA"
                                    }}>
                                        RB
                                    </Avatar>
                                </Center>
                            </AspectRatio>
                        </Box>

                        <Stack p="4" space={3}>
                            <Stack space={2}>
                                <Center>
                                    <Heading size="md" ml="-1">
                                    geekyants
                                    </Heading>
                                </Center>
                            </Stack>
                            <Text fontWeight="400">
                                Wonderful Project Idea
                            </Text>
                        </Stack>
                    </Box>
                </Box>
            </div>
        </div>
    );
}
