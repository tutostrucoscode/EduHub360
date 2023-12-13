import { ReactNode } from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'
import Header from '../header/header'

interface Props {
    title: string
    children: ReactNode
}
const DasboardTemplate = ({ title, children }: Props) => {
    return (
        <Box color="rgb(94, 107, 150)" fontSize="14px" lineHeight="20px">
            <Header />
            <Box h="110vh" backgroundColor="#f8f8ff">
                <Box pt="72px" h="100%">
                    <Flex flexDir="column" h="100%">
                        <Box>
                            <Box tabIndex={-1} outline="none">
                                <Box>
                                    <Box px="1.5rem" maxW="1280px" my="2rem" mx="auto">
                                        <Flex
                                            justifyContent="space-between"
                                            alignItems="center"
                                        >
                                            <Heading
                                                as="h1"
                                                noOfLines={1}
                                                color="color: rgb(33 35 46/1)"
                                                lineHeight="2rem"
                                                fontWeight="500"
                                                fontSize="1.5rem"
                                                mb="0"
                                            >
                                                {title}
                                            </Heading>
                                        </Flex>
                                    </Box>
                                    <Box
                                        px="1.5rem"
                                        maxW="1280px"
                                        mb="2rem"
                                        mt="0.5rem"
                                        mx="auto"
                                    >
                                        {children}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box>{/* Footer */}</Box>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}

export default DasboardTemplate
