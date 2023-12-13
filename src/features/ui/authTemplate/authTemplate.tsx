import { ReactNode } from 'react'
import { Box, Image } from '@chakra-ui/react'
import img_bg1 from '../../../assets/bg/img-auth-bg-1.svg'
import img_bg2 from '../../../assets/bg/img-auth-bg-2.svg'
import img_bg3 from '../../../assets/bg/img-auth-bg-3.svg'
import img_bg4 from '../../../assets/bg/img-auth-bg-4.svg'
import img_bg5 from '../../../assets/bg/img-auth-bg-5.svg'
import img_bg6 from '../../../assets/bg/img-auth-bg-6.svg'
import img_bg7 from '../../../assets/bg/img-auth-bg-7.svg'
import img_bg8 from '../../../assets/bg/img-auth-bg-8.svg'
import img_bg9 from '../../../assets/bg/img-auth-bg-9.svg'
import img_bg10 from '../../../assets/bg/img-auth-bg-10.svg'
import img_bg11 from '../../../assets/bg/img-auth-bg-11.svg'
import '../../../styles/auth.css'

interface Props {
    children: ReactNode
}
const AuthTemplate = ({ children }: Props) => {
    return (
        <>
            <Box
                pos="absolute"
                w="1px"
                h="1px"
                p="0px"
                m="-1px"
                overflow="hidden"
                whiteSpace="nowrap"
                borderWidth="0px"
                display="none"
            ></Box>
            <main
                className="bg-img-main"
                style={{
                    backgroundColor: 'rgb(24, 27, 56)',
                    backgroundPosition: '50% 50%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    color: 'rgba(245, 245, 245, 0.9)',
                    fontSize: '18px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    minHeight: '100vh',
                    overflow: 'hidden',
                    paddingBottom: '70px',
                    paddingTop: '70px',
                    position: 'relative',
                    width: '100%',
                }}
            >
                <Image
                    src={img_bg1}
                    maxW="100%"
                    pos="absolute"
                    inset="0px 0px auto auto"
                    zIndex="0"
                    w="800px"
                    marginTop="-100px"
                    marginRight="-100px"
                    filter="saturate(120%)"
                    userSelect="none"
                    draggable="false"
                />
                <Image
                    src={img_bg2}
                    maxW="100%"
                    pos="absolute"
                    inset="0px 0px auto auto"
                    zIndex="0"
                    w="800px"
                    marginTop="-100px"
                    marginRight="-100px"
                    filter="saturate(120%)"
                    userSelect="none"
                    draggable="false"
                />
                <Image
                    src={img_bg3}
                    maxW="100%"
                    pos="absolute"
                    inset="0px 0px auto auto"
                    zIndex="0"
                    w="800px"
                    marginTop="-100px"
                    marginRight="-100px"
                    filter="saturate(120%)"
                    userSelect="none"
                    draggable="false"
                />
                <Image
                    src={img_bg4}
                    maxW="100%"
                    pos="absolute"
                    zIndex="0"
                    w="800px"
                    marginTop="-100px"
                    filter="saturate(120%)"
                    userSelect="none"
                    inset="0px auto auto 0px"
                    marginRight="auto"
                    draggable="false"
                />
                <Image
                    src={img_bg5}
                    maxW="100%"
                    pos="absolute"
                    zIndex="0"
                    w="800px"
                    marginTop="-100px"
                    filter="saturate(120%)"
                    userSelect="none"
                    inset="0px auto auto 0px"
                    marginRight="auto"
                    draggable="false"
                />
                <Image
                    src={img_bg6}
                    maxW="100%"
                    pos="absolute"
                    zIndex="0"
                    w="800px"
                    marginTop="-100px"
                    filter="saturate(120%)"
                    userSelect="none"
                    inset="0px auto auto 0px"
                    marginRight="auto"
                    draggable="false"
                />
                <Image
                    src={img_bg7}
                    maxW="100%"
                    pos="absolute"
                    zIndex="0"
                    w="800px"
                    filter="saturate(120%)"
                    userSelect="none"
                    inset="auto auto 0px 0px"
                    margin="auto auto -100px -100px"
                    draggable="false"
                />
                <Image
                    src={img_bg8}
                    maxW="100%"
                    pos="absolute"
                    zIndex="0"
                    w="800px"
                    filter="saturate(120%)"
                    userSelect="none"
                    inset="auto auto 0px 0px"
                    margin="auto auto -100px -100px"
                    draggable="false"
                />
                <Image
                    src={img_bg9}
                    maxW="100%"
                    pos="absolute"
                    zIndex="0"
                    w="800px"
                    filter="saturate(120%)"
                    userSelect="none"
                    inset="auto auto 0px 0px"
                    margin="auto auto -100px -100px"
                    draggable="false"
                />
                <Image
                    src={img_bg10}
                    maxW="100%"
                    pos="absolute"
                    zIndex="0"
                    w="800px"
                    margin="auto -100px -100px auto"
                    filter="saturate(120%)"
                    userSelect="none"
                    inset="auto 0px 0px auto"
                    draggable="false"
                />
                <Image
                    src={img_bg11}
                    maxW="100%"
                    pos="absolute"
                    zIndex="0"
                    w="800px"
                    margin="auto -100px -100px auto"
                    filter="saturate(120%)"
                    userSelect="none"
                    inset="auto 0px 0px auto"
                    draggable="false"
                />
                <Box tabIndex={-1} outline="none">
                    {children}
                </Box>
            </main>
        </>
    )
}

export default AuthTemplate
