import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Grid,
    GridItem,
    Input,
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
    schoolName: string
    slogan: string
    address: string
    city: string
    phone: string
    eMailSecretariat: string
    DANECode: string
    RectorName: string
    RectorID: number
    SecretaryName: string
    SecretaryID: number
    MinimumGrade: number
    MaximumGrade: number
    CurrentYear: number
    CurrentPeriod: number
    PeriodsPerYear: number
    SchoolCalendar: string
}
const ConfigGeneralForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
    }
    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                    width: '100%',
                    marginBottom: '20px',
                    marginTop: '0px',
                }}
            >
                <Grid
                    templateColumns="repeat(4,minmax(0,1fr))"
                    gridAutoFlow="row"
                    listStyleType="none"
                    m="0"
                    p="0"
                    gap={6}
                >
                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.schoolName !== undefined}>
                            <FormLabel htmlFor="name">Nombre Colegio</FormLabel>
                            <Input
                                type="text"
                                {...register('schoolName', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'La longitud mínima debe ser 4',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.schoolName && errors.schoolName.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.slogan !== undefined}>
                            <FormLabel htmlFor="name">Slogan</FormLabel>
                            <Input
                                type="text"
                                {...register('slogan', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'La longitud mínima debe ser 4',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.slogan && errors.slogan.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.address !== undefined}>
                            <FormLabel htmlFor="name">Direccion</FormLabel>
                            <Input
                                type="text"
                                {...register('address', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'La longitud mínima debe ser 4',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.address && errors.address.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.phone !== undefined}>
                            <FormLabel htmlFor="name">Ciudad</FormLabel>
                            <Input
                                type="text"
                                {...register('phone', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'La longitud mínima debe ser 4',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.phone && errors.phone.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.city !== undefined}>
                            <FormLabel htmlFor="name">Telefono</FormLabel>
                            <Input
                                type="text"
                                {...register('city', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'La longitud mínima debe ser 4',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.city && errors.city.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.eMailSecretariat !== undefined}>
                            <FormLabel htmlFor="name">eMail Secretaría</FormLabel>
                            <Input
                                type="text"
                                {...register('eMailSecretariat', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'La longitud mínima debe ser 4',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.eMailSecretariat && errors.eMailSecretariat.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.DANECode !== undefined}>
                            <FormLabel htmlFor="name">Código DANE</FormLabel>
                            <Input
                                type="text"
                                {...register('DANECode', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'La longitud mínima debe ser 4',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.DANECode && errors.DANECode.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.RectorName !== undefined}>
                            <FormLabel htmlFor="name">Nombre Rector</FormLabel>
                            <Input
                                type="text"
                                {...register('RectorName', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'La longitud mínima debe ser 4',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.RectorName && errors.RectorName.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.RectorID !== undefined}>
                            <FormLabel htmlFor="name">ID del Rector</FormLabel>
                            <Input
                                type="text"
                                {...register('RectorID', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'La longitud mínima debe ser 4',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.RectorID && errors.RectorID.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.SecretaryName !== undefined}>
                            <FormLabel htmlFor="name">Nombre Secretaria</FormLabel>
                            <Input
                                type="text"
                                {...register('SecretaryName', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'La longitud mínima debe ser 4',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.SecretaryName && errors.SecretaryName.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.SecretaryID !== undefined}>
                            <FormLabel htmlFor="name">ID Secretaria</FormLabel>
                            <Input
                                type="text"
                                {...register('SecretaryID', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'La longitud mínima debe ser 4',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.SecretaryID && errors.SecretaryID.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.MinimumGrade !== undefined}>
                            <FormLabel htmlFor="name">Nota Minima</FormLabel>
                            <Input
                                type="text"
                                {...register('MinimumGrade', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'La longitud mínima debe ser 4',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.MinimumGrade && errors.MinimumGrade.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.MaximumGrade !== undefined}>
                            <FormLabel htmlFor="name">Nota Máxima</FormLabel>
                            <Input
                                type="text"
                                {...register('MaximumGrade', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'La longitud mínima debe ser 4',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.MaximumGrade && errors.MaximumGrade.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.CurrentYear !== undefined}>
                            <FormLabel htmlFor="name">Año Actual</FormLabel>
                            <Input
                                type="text"
                                {...register('CurrentYear', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'La longitud mínima debe ser 4',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.CurrentYear && errors.CurrentYear.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.CurrentPeriod !== undefined}>
                            <FormLabel htmlFor="name">Periodo Actual</FormLabel>
                            <Input
                                type="text"
                                {...register('CurrentPeriod', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'La longitud mínima debe ser 4',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.CurrentPeriod && errors.CurrentPeriod.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.PeriodsPerYear !== undefined}>
                            <FormLabel htmlFor="name">Periodos por Año</FormLabel>
                            <Input
                                type="text"
                                {...register('PeriodsPerYear', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'La longitud mínima debe ser 4',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.PeriodsPerYear && errors.PeriodsPerYear.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.SchoolCalendar !== undefined}>
                            <FormLabel htmlFor="name">Calendario del Colegio</FormLabel>
                            <Input
                                type="text"
                                {...register('SchoolCalendar', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'La longitud mínima debe ser 4',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.SchoolCalendar && errors.SchoolCalendar.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>
                </Grid>

                <Button
                    isLoading={isSubmitting}
                    maxW="384px"
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
                    Guardar Cambios
                </Button>
            </form>
        </>
    )
}

export default ConfigGeneralForm
