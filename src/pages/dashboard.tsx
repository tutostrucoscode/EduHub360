/* eslint-disable @typescript-eslint/no-explicit-any */
import DashboarMenu from '../features/ui/cardMenu/dashboarMenu'
import DasboardTemplate from '../features/ui/dasboardTemplate/dasboardTemplate'

const Dashboard = () => {
    return (
        <DasboardTemplate title={'Comience en minutos'}>
            <DashboarMenu />
        </DasboardTemplate>
    )
}

export default Dashboard
