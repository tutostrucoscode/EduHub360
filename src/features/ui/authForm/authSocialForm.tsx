import { useNavigate } from 'react-router-dom'
import { GoogleAuthProvider, deleteUser, signInWithPopup } from 'firebase/auth'
import { Button, Grid, useToast } from '@chakra-ui/react'
import { auth } from '../../../config/firebase-config'
import { useAppDispatch } from '../../../redux/hooks/hooks'
import { login, startLogout } from '../../../redux/actions/auth'
import GoogleIcon from '../googleIcon'
import { validateUserInFirestore } from '../../../services/auth.service'
import { Path } from '../../../constants'

const AuthSocialForm = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const toast = useToast()
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            const { photoURL, email, uid, displayName } = result.user
            const validate = await validateUserInFirestore(email)
            if (validate !== 'UserNotFound') {
                dispatch(login(uid, displayName, email, photoURL))
                navigate(Path.Dashboard)
            } else {
                await deleteUser(result.user)
                const msg = `Usuario ${email} no verificado o no valido`
                toast({
                    title: 'Problemas con la cuenta',
                    description: msg,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    variant: 'left-accent',
                    position: 'bottom-left',
                })
                dispatch(startLogout())
            }
        } catch (error) {
            await handleError(error)
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleError = async (error: any) => {
        const msg = `Error en la autenticación: ${error.message}`
        console.log(error)
        toast({
            title: 'Problemas con la cuenta',
            description: msg,
            status: 'error',
            duration: 5000,
            isClosable: true,
            variant: 'left-accent',
            position: 'bottom-left',
        })
    }
    return (
        <Grid templateColumns="repeat(1, 1fr)" templateRows="auto" autoColumns="1fr">
            <Button
                color="#F0F2F9"
                fontSize="16px"
                fontWeight="400"
                lineHeight="1.6"
                textTransform="none"
                border="1px solid rgb(255, 92, 136)"
                borderRadius="4px"
                h="40px"
                w="100%"
                py="0px"
                bgColor="transparent"
                _hover={{ backgroundColor: 'rgb(52, 73, 104)' }}
                leftIcon={<GoogleIcon />}
                onClick={handleGoogleLogin}
            >
                Google
            </Button>
        </Grid>
    )
}

export default AuthSocialForm
