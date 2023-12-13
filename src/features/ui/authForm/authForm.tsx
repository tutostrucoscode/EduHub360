/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    useToast,
} from '@chakra-ui/react'
import { auth } from '../../../config/firebase-config'
import { validateUserInFirestore } from '../../../services/auth.service'
import { useAppDispatch } from '../../../redux/hooks/hooks'
import { Path } from '../../../constants'
import { login, startLogout } from '../../../redux/actions/auth'

type Inputs = {
    email: string
    password: string
}

const AuthForm = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const toast = useToast()
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<Inputs>()
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const result = await signInWithEmailAndPassword(auth, data.email, data.password)
            const { photoURL, email, uid, displayName } = result.user
            const validate = await validateUserInFirestore(email)
            if (validate !== 'UserNotFound') {
                dispatch(login(uid, displayName, email, photoURL))
                navigate(Path.Dashboard)
            } else {
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
            console.log(data)
        } catch (error) {
            await handleError(error)
        }
    }

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
        <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
                width: '100%',
                maxWidth: '384px',
                marginBottom: '20px',
                marginTop: '0px',
            }}
        >
            <FormControl isInvalid={errors.email !== undefined}>
                <FormLabel htmlFor="name">Email</FormLabel>
                <Input
                    autoComplete="email"
                    type="text"
                    placeholder="your@email.com"
                    {...register('email', {
                        required: true,
                        minLength: { value: 4, message: 'La longitud mínima debe ser 4' },
                    })}
                />
                <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.email !== undefined} mt="30px">
                <FormLabel htmlFor="name">Password</FormLabel>
                <InputGroup>
                    <Input
                        autoComplete="current-password"
                        type={show ? 'text' : 'password'}
                        placeholder="Introducir el password"
                        {...register('password', {
                            required: true,
                            minLength: { value: 4, message: 'La longitud mínima debe ser 4' },
                        })}
                    />
                    <InputRightElement width="4.5rem" mr="5px">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? 'Ocultar' : 'Mostrar'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                    {errors.password && errors.password.message}
                </FormErrorMessage>
            </FormControl>
            <Button
                isLoading={isSubmitting}
                type="submit"
                backgroundColor="rgb(79, 101, 241)"
                border="0px"
                borderRadius="4px"
                color="rgb(255, 255, 255)"
                display="inline-block"
                fontSize="15px"
                fontWeight="400"
                height="44px"
                letterSpacing="1px"
                lineHeight="inherit"
                p="9px 20px"
                textDecoration="none"
                textTransform="uppercase"
                w="100%"
                boxShadow="rgb(67, 81, 232) 0px 0px 0px 0px inset, rgba(79, 101, 241, 0.15) 0px 7px 12px -2px"
                mt="30px"
                _hover={{ backgroundColor: 'none' }}
            >
                Iniciar sesión
            </Button>
        </form>
    )
}

export default AuthForm
