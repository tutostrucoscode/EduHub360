import { Badge, Box, Button, ButtonGroup, Flex } from '@chakra-ui/react'
import DasboardTemplate from '../features/ui/dasboardTemplate/dasboardTemplate'
import { IconFileExport, IconFileImport } from '@tabler/icons-react'
import TableUI from '../features/ui/table/table'

const Admissions = () => {
    const header = ['Name', 'Age', 'Country']
    const body = [
        ['John Doe', 25, 'USA'],
        ['Jane Smith', 30, 'Canada'],
        ['Carlos Rodriguez', 28, 'Mexico'],
        ['John Doe', 25, 'USA'],
        ['Jane Smith', 30, 'Canada'],
        ['Carlos Rodriguez', 28, 'Mexico'],
        ['John Doe', 25, 'USA'],
        ['Jane Smith', 30, 'Canada'],
        ['Carlos Rodriguez', 28, 'Mexico'],
        ['John Doe', 25, 'USA'],
        ['Jane Smith', 30, 'Canada'],
        ['Carlos Rodriguez', 28, 'Mexico'],
        ['John Doe', 25, 'USA'],
        ['Jane Smith', 30, 'Canada'],
        ['Carlos Rodriguez', 28, 'Mexico'],
        ['John Doe', 25, 'USA'],
        ['Jane Smith', 30, 'Canada'],
        ['Carlos Rodriguez', 28, 'Mexico'],
        ['John Doe', 25, 'USA'],
        ['Jane Smith', 30, 'Canada'],
        ['Carlos Rodriguez', 28, 'Mexico'],
    ]
    return (
        <DasboardTemplate title={'Gestión de admisiones'}>
            <Flex justifyContent="space-between">
                <Box>
                    <Badge colorScheme="purple" variant="subtle">
                        Estudiantes registrados: 0
                    </Badge>
                </Box>
                <Box>
                    <ButtonGroup size="sm" isAttached variant="solid">
                        <Button colorScheme="gray" size="sm" leftIcon={<IconFileImport />}>
                            Importar Estudiantes
                        </Button>
                        <Button colorScheme="gray" size="sm" rightIcon={<IconFileExport />}>
                            Exportar Estudiantes
                        </Button>
                    </ButtonGroup>
                </Box>
            </Flex>

            <Box mt={10}>
                <TableUI
                    showPagination
                    rowsPerPage={5}
                    header={header}
                    body={body}
                    sortableColumns={[0, 2]}
                    searchableColumns={[0, 2]}
                />
            </Box>
        </DasboardTemplate>
    )
}

export default Admissions
