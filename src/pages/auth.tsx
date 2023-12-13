import { Box, Flex, Heading } from '@chakra-ui/react'
import AuthForm from '../features/ui/authForm/authForm'
import AuthTemplate from '../features/ui/authTemplate/authTemplate'

const Auth = () => {
    return (
        <AuthTemplate>
            <Box pos="relative" mx="auto" maxW="384px">
                <Flex
                    pos="relative"
                    w="100%"
                    h="auto"
                    px="20px"
                    flexFlow="column wrap"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Heading
                        as="h2"
                        textAlign="center"
                        mb="1rem"
                        mt="0px"
                        color="rgb(255, 255, 255)"
                        fontWeight="400"
                        fontSize="32px"
                        lineHeight="1.4"
                        w="470px"
                        sx={{ WebkitFontSmoothing: 'antialiased' }}
                    >
                        Iniciar sesión en EduHub360
                    </Heading>

                    <AuthForm />
                </Flex>
            </Box>
        </AuthTemplate>
    )
}

export default Auth
