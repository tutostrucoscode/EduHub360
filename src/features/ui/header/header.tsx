import {
    Box,
    Button,
    Flex,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react'
import { IconArrowBarRight, IconChevronDown, IconUser } from '@tabler/icons-react'
import Logo from '../../../assets/icono-logo.png'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks'
import { startLogout } from '../../../redux/actions/auth'

const Header = () => {
    const dispatch = useAppDispatch()
    const { email } = useAppSelector((state) => state.auth)
    return (
        <Box w="100%" zIndex="20" position="fixed">
            <Box display="block">
                <Box
                    backgroundColor="rgb(255 255 255/1)"
                    borderBottomColor="rgb(222 231 249/1)"
                    borderStyle="solid"
                    borderBottomWidth="1px"
                    borderWidth="0"
                    w="100%"
                    h="72px"
                >
                    <Flex
                        px="1.5rem"
                        py="0"
                        justifyContent="space-between"
                        alignItems="center"
                        maxW="1280px"
                        h="100%"
                        m="auto"
                    >
                        <header style={{ height: '100%', display: 'block' }}>
                            <nav
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '100%',
                                }}
                            >
                                <a
                                    href="/"
                                    style={{
                                        marginBottom: '0px',
                                        marginTop: '0px',
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        textDecoration: 'none',
                                        backgroundColor: 'transparent',
                                        color: '#4f65f1',
                                    }}
                                >
                                    <Image
                                        src={Logo}
                                        h="58px"
                                        mb="4px"
                                        display="flex"
                                        verticalAlign="middle"
                                        borderStyle="none"
                                    />
                                </a>
                            </nav>
                        </header>
                        <Flex>
                            <Flex flexDir="column" w="260px" h="2.5rem" pos="relative">
                                <Menu>
                                    {({ isOpen }) => (
                                        <>
                                            <MenuButton
                                                leftIcon={<IconUser />}
                                                isActive={isOpen}
                                                as={Button}
                                                rightIcon={<IconChevronDown />}
                                                color="rgb(94, 107, 150)"
                                                fontSize="13px"
                                                fontWeight="400"
                                                overflow="hidden"
                                                textOverflow="ellipsis"
                                                whiteSpace="nowrap"
                                            >
                                                {email}
                                            </MenuButton>
                                            <MenuList>
                                                <MenuItem
                                                    onClick={() => dispatch(startLogout())}
                                                >
                                                    <IconArrowBarRight color="rgb(94, 107, 150)" />
                                                    <span
                                                        style={{
                                                            fontSize: '13px',
                                                            lineHeight: '14px',
                                                            fontWeight: '400',
                                                            color: 'rgb(94, 107, 150)',
                                                        }}
                                                    >
                                                        Desconectar
                                                    </span>
                                                </MenuItem>
                                            </MenuList>
                                        </>
                                    )}
                                </Menu>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}

export default Header
