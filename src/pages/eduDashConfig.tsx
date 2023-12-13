import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import DasboardTemplate from '../features/ui/dasboardTemplate/dasboardTemplate'
import ConfigGeneralForm from '../features/ui/configGeneralForm/configGeneralForm'
import GradesGeneralForm from '../features/ui/gradesGeneralForm/gradesGeneralForm'

const EduDashConfig = () => {
    return (
        <DasboardTemplate title={'Configuración Tablero Educativo'}>
            <Tabs isLazy variant="enclosed">
                <TabList>
                    <Tab>General</Tab>
                    <Tab>Notas</Tab>
                    <Tab>Competencias</Tab>
                    <Tab>Acceso</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <ConfigGeneralForm />
                    </TabPanel>
                    <TabPanel>
                        <GradesGeneralForm />
                    </TabPanel>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </DasboardTemplate>
    )
}

export default EduDashConfig
