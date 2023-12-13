/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactNode, useMemo, useState } from 'react'
import {
    IconArrowNarrowDown,
    IconArrowNarrowUp,
    IconArrowsUpDown,
    IconChevronLeft,
    IconChevronRight,
    IconSearch,
} from '@tabler/icons-react'
import {
    TableContainer,
    Thead,
    Tbody,
    Table,
    Tr,
    Th,
    Td,
    Box,
    InputGroup,
    Input,
    InputRightAddon,
    Flex,
    Tfoot,
    Button,
    Text,
    IconButton,
    ButtonGroup,
} from '@chakra-ui/react'

interface TableProps {
    header: string[]
    body: ReactNode[][]
    cellComponent?: React.ComponentType<{ children: ReactNode }>
    sortableColumns?: number[]
    searchableColumns?: number[]
    rowsPerPage?: number
    showPagination?: boolean
}

const TableUI = ({
    header,
    body,
    cellComponent: Cell = DefaultCell,
    sortableColumns = [],
    searchableColumns = [],
    rowsPerPage = 10,
    showPagination = false,
}: TableProps) => {
    const [sortColumn, setSortColumn] = useState<number | null>(null)
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [currentPage, setCurrentPage] = useState(1)

    const filterRows = (rows: ReactNode[][]) => {
        if (searchTerm.trim() === '') {
            return rows
        }

        return rows.filter((row) =>
            row.some((cell, cellIndex) => {
                if (cell && (searchableColumns.length === 0 || searchableColumns.includes(cellIndex))) {
                    return cell.toString().toLowerCase().includes(searchTerm.toLowerCase())
                }
                return false
            })
        )
    }

    const sortedAndFilteredBody = useMemo(() => {
        return filterRows(body).sort((a, b) => {
            if (
                a &&
                b &&
                sortColumn !== null &&
                sortColumn !== undefined &&
                a[sortColumn] !== undefined &&
                b[sortColumn] !== undefined
            ) {
                const aValue = a[sortColumn]?.toString() || ''
                const bValue = b[sortColumn]?.toString() || ''

                if (aValue === null || aValue === undefined) return 1
                if (bValue === null || bValue === undefined) return -1
                if (aValue === null && bValue === null) return 0

                const compareResult = aValue.localeCompare(bValue)
                return sortDirection === 'asc' ? compareResult : -compareResult
            }
            return 0
        })
    }, [sortColumn, sortDirection, filterRows, body])

    const numPages = Math.ceil(sortedAndFilteredBody.length / rowsPerPage)

    const pageRows = useMemo(() => {
        const start = (currentPage - 1) * rowsPerPage
        return sortedAndFilteredBody.slice(start, start + rowsPerPage)
    }, [currentPage, rowsPerPage, sortedAndFilteredBody])

    const handleSort = (columnIndex: number) => {
        if (sortableColumns.includes(columnIndex)) {
            if (sortColumn === columnIndex) {
                setSortDirection((prevDirection) => (prevDirection === 'asc' ? 'desc' : 'asc'))
            } else {
                setSortColumn(columnIndex)
                setSortDirection('asc')
            }
        }
    }

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }

    return (
        <Box
            borderStyle="solid"
            borderColor="rgb(224, 224, 224)"
            borderWidth="1px"
            bgColor="grey.50"
            borderRadius="md"
            overflow="hidden"
            p="1rem"
            mt="1rem"
            mb="1rem"
        >
            <TableContainer>
                <Box display="flex" justifyContent="flex-end">
                    <InputGroup size="sm" w="250px">
                        <Input placeholder="Buscar" value={searchTerm} onChange={handleSearch} />
                        <InputRightAddon children={<IconSearch />} />
                    </InputGroup>
                </Box>
                <Table size="sm">
                    <Thead>
                        <Tr>
                            {header.map((col, index) => (
                                <Th
                                    key={index}
                                    onClick={() => handleSort(index)}
                                    borderStyle="solid"
                                    borderColor="rgb(224, 224, 224)"
                                    borderWidth="1px"
                                    bgColor="grey.50"
                                    borderRadius="md"
                                >
                                    <Flex>
                                        <Box>{col}</Box>

                                        {sortableColumns.includes(index) && (
                                            <Box>
                                                {sortColumn !== index && (
                                                    <IconArrowsUpDown opacity={0.8} size={16} />
                                                )}

                                                {sortColumn === index && sortDirection === 'asc' && (
                                                    <IconArrowNarrowUp opacity={0.8} size={16} />
                                                )}

                                                {sortColumn === index && sortDirection === 'desc' && (
                                                    <IconArrowNarrowDown opacity={0.8} size={16} />
                                                )}
                                            </Box>
                                        )}
                                    </Flex>
                                </Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {pageRows.map((row, rowIndex) => (
                            <Tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <Cell key={cellIndex}>{cell}</Cell>
                                ))}
                            </Tr>
                        ))}
                    </Tbody>

                    <Tfoot></Tfoot>
                </Table>
            </TableContainer>
            <Box>
                {showPagination && (
                    <Flex w="full" justifyContent="space-between">
                        <Flex justify="space-between" mt={4} align="center">
                            <Text>
                                Página {currentPage} de {numPages}
                            </Text>
                        </Flex>
                        <Flex justify="space-between" mt={4} align="center">
                            <ButtonGroup size="sm" isAttached>
                                <IconButton
                                    isRound={true}
                                    aria-label="Anterior"
                                    icon={<IconChevronLeft />}
                                    isDisabled={currentPage === 1}
                                    onClick={() => {
                                        if (currentPage > 1) {
                                            setCurrentPage((prev) => prev - 1)
                                        }
                                    }}
                                />

                                {Array.from({ length: numPages }, (_, i) => i + 1).map((page) => (
                                    <Button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        bg={currentPage === page ? 'blue.500' : 'gray.100'}
                                        color={currentPage === page ? 'white' : 'gray.900'}
                                    >
                                        {page}
                                    </Button>
                                ))}

                                <IconButton
                                    isRound={true}
                                    aria-label="Siguiente"
                                    icon={<IconChevronRight />}
                                    isDisabled={currentPage === numPages}
                                    onClick={() => {
                                        if (currentPage < numPages) {
                                            setCurrentPage((prev) => prev + 1)
                                        }
                                    }}
                                />
                            </ButtonGroup>
                        </Flex>
                    </Flex>
                )}
            </Box>
        </Box>
    )
}

interface DefaultCellProps {
    children: ReactNode
}

const DefaultCell: React.FC<DefaultCellProps> = ({ children }) => (
    <Td
        borderStyle="solid"
        borderColor="rgb(224, 224, 224)"
        borderWidth="1px"
        bgColor="grey.50"
        borderRadius="md"
    >
        {children}
    </Td>
)

export default TableUI
