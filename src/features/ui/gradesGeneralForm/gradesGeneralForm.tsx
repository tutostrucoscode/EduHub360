import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Grid,
    GridItem,
    Input,
    Radio,
    RadioGroup,
    Stack,
} from '@chakra-ui/react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
    Achievements: string
    LowPerformance: number
    BasicPerformance: number
    HighPerformance: number
    SuperiorPerformance: number
    Recovery: string
    FirstPeriodPercentage: number
    SecondPeriodPercentage: number
    ThirdPeriodPercentage: number
    FourthPeriodPercentage: number
    FifthPeriodPercentage: number
    SixthPeriodPercentage: number
}

const GradesGeneralForm = () => {
    const {
        register,
        control,
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
                        <FormControl isInvalid={errors.Achievements !== undefined}>
                            <FormLabel htmlFor="name">Usa Logros</FormLabel>
                            <Controller
                                name="Achievements"
                                control={control}
                                render={({ field }) => (
                                    <RadioGroup {...field} defaultValue="false">
                                        <Stack spacing={5} direction="row">
                                            <Radio colorScheme="red" value="false">
                                                No
                                            </Radio>
                                            <Radio colorScheme="green" value="true">
                                                Si
                                            </Radio>
                                        </Stack>
                                    </RadioGroup>
                                )}
                            />

                            <FormErrorMessage>
                                {errors.Achievements && errors.Achievements.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.Recovery !== undefined}>
                            <FormLabel htmlFor="name">Usa Recuperación</FormLabel>
                            <Controller
                                name="Recovery"
                                control={control}
                                render={({ field }) => (
                                    <RadioGroup {...field} defaultValue="false">
                                        <Stack spacing={5} direction="row">
                                            <Radio colorScheme="red" value="false">
                                                No
                                            </Radio>
                                            <Radio colorScheme="green" value="true">
                                                Si
                                            </Radio>
                                        </Stack>
                                    </RadioGroup>
                                )}
                            />

                            <FormErrorMessage>
                                {errors.Recovery && errors.Recovery.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.LowPerformance !== undefined}>
                            <FormLabel htmlFor="name">Rendimiento Bajo</FormLabel>
                            <Input
                                type="number"
                                {...register('LowPerformance', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'La longitud mínima debe ser 4',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.LowPerformance && errors.LowPerformance.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.BasicPerformance !== undefined}>
                            <FormLabel htmlFor="name">Rendimiento Básico</FormLabel>
                            <Input
                                type="number"
                                {...register('BasicPerformance', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'La longitud mínima debe ser 4',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.BasicPerformance && errors.BasicPerformance.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.HighPerformance !== undefined}>
                            <FormLabel htmlFor="name">Rendimiento Alto</FormLabel>
                            <Input
                                type="number"
                                {...register('HighPerformance', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'La longitud mínima debe ser 4',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.HighPerformance && errors.HighPerformance.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.SuperiorPerformance !== undefined}>
                            <FormLabel htmlFor="name">Rendimiento Superior</FormLabel>
                            <Input
                                type="number"
                                {...register('SuperiorPerformance', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'La longitud mínima debe ser 4',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.SuperiorPerformance &&
                                    errors.SuperiorPerformance.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.FirstPeriodPercentage !== undefined}>
                            <FormLabel htmlFor="name">Porcentaje Primer Periodo</FormLabel>
                            <Input
                                type="number"
                                {...register('FirstPeriodPercentage', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'La longitud mínima debe ser 4',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.FirstPeriodPercentage &&
                                    errors.FirstPeriodPercentage.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.SecondPeriodPercentage !== undefined}>
                            <FormLabel htmlFor="name">Porcentaje Segundo Periodo</FormLabel>
                            <Input
                                type="number"
                                {...register('SecondPeriodPercentage', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'La longitud mínima debe ser 4',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.SecondPeriodPercentage &&
                                    errors.SecondPeriodPercentage.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.ThirdPeriodPercentage !== undefined}>
                            <FormLabel htmlFor="name">Porcentaje Tercer Periodo</FormLabel>
                            <Input
                                type="number"
                                {...register('ThirdPeriodPercentage', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'La longitud mínima debe ser 4',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.ThirdPeriodPercentage &&
                                    errors.ThirdPeriodPercentage.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.FourthPeriodPercentage !== undefined}>
                            <FormLabel htmlFor="name">Porcentaje Cuarto Periodo</FormLabel>
                            <Input
                                type="number"
                                {...register('FourthPeriodPercentage', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'La longitud mínima debe ser 4',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.FourthPeriodPercentage &&
                                    errors.FourthPeriodPercentage.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.FifthPeriodPercentage !== undefined}>
                            <FormLabel htmlFor="name">Porcentaje Quinto Periodo</FormLabel>
                            <Input
                                type="number"
                                {...register('FifthPeriodPercentage', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'La longitud mínima debe ser 4',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.FifthPeriodPercentage &&
                                    errors.FifthPeriodPercentage.message}
                            </FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        p="1.5rem"
                        justifyContent="space-between"
                        flexDir="column"
                        display="flex"
                    >
                        <FormControl isInvalid={errors.SixthPeriodPercentage !== undefined}>
                            <FormLabel htmlFor="name">Porcentaje Sexto Periodo</FormLabel>
                            <Input
                                type="number"
                                {...register('SixthPeriodPercentage', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'La longitud mínima debe ser 4',
                                    },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.SixthPeriodPercentage &&
                                    errors.SixthPeriodPercentage.message}
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

export default GradesGeneralForm
