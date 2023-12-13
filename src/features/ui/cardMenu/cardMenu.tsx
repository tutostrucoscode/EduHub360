import { Box, Button, Flex, GridItem, Image, Text } from '@chakra-ui/react'
import { ICardMenu } from '../../../types/cardMenu.types'
import { useNavigate } from 'react-router-dom'

const CardMenu = ({ src, title, description, titleButtom, url, isHidden }: ICardMenu) => {
    const navigate = useNavigate()
    return (
        <Box as='div' hidden={isHidden}>
            <GridItem
                p="1.5rem"
                backgroundColor="rgb(247 249 253/1)"
                borderColor="rgb(222 231 249/1)"
                borderStyle="solid"
                borderWidth="1px"
                borderRadius=".375rem"
                justifyContent="space-between"
                flexDir="column"
                display="flex"
            >
                <Box mb="2rem">
                    <Flex alignItems="center" marginBottom="1rem">
                        <Image
                            src={src}
                            w="1.75rem"
                            h="1.75rem"
                            mr="0.75rem"
                            verticalAlign="middle"
                            borderStyle="none"
                            draggable="false"
                        />
                        <Text
                            color="rgb(52 56 72/1)"
                            lineHeight="1.5rem"
                            fontWeight="500"
                            fontSize="lg"
                        >
                            {title}
                        </Text>
                    </Flex>
                    <Text
                        color="rgb(33 35 46/1)"
                        lineHeight="1.5rem"
                        fontWeight="400"
                        fontSize="sm"
                    >
                        {description}
                    </Text>
                </Box>
                <Button
                    textDecorationLine="none"
                    color="color: rgb(47 47 76/1)"
                    lineHeight="1.5rem"
                    fontWeight="500"
                    fontSize="sm"
                    px="0.75rem"
                    py="0.5rem"
                    bgColor="rgb(255 255 255/1)"
                    borderColor="rgb(222 231 249/1)"
                    borderStyle="solid"
                    borderWidth="1px"
                    borderRadius=".375rem"
                    whiteSpace="nowrap"
                    justifyContent="center"
                    alignItems="center"
                    minW="80px"
                    h="2.5rem"
                    display="inline-flex"
                    m="0"
                    onClick={() => navigate(url)}
                >
                    {titleButtom}
                </Button>
            </GridItem>
        </Box>
    )
}

export default CardMenu
