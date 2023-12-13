import { ICardMenu } from '../types/cardMenu.types'
import FinancesLogo from '../assets/icons/impuestos.png'
import LogoRegistro from '../assets/icons/equipo.png'
import LogoSettings from '../assets/icons/servidor.png'
import SecretariatLogo from '../assets/icons/secretaria.png'
import ColegioLogo from '../assets/icons/colegio.png'

export enum Path {
    Index = '/',
    Dashboard = '/dashboard',
    Auth = '/login',
    EduDashConfig = '/edu-config',
    Admissions = '/admissions',
}

export const ListCardMenu: ICardMenu[] = [
    {
        title: 'Gestión de admisiones',
        description:
            'Automatiza admisiones y personaliza expedientes. Simplifica operaciones comerciales y mejora el marketing. Rastrea la actividad de clientes y ventas.',
        src: LogoRegistro,
        titleButtom: 'Admisiones',
        url: Path.Admissions,
        isHidden: false,
    },
    {
        title: 'Gestión de secretaría',
        description:
            'Simplifica la gestión educativa personalizando planes de estudio, matriculaciones en modalidades variadas, y mantente informado con notificaciones automáticas.',
        src: SecretariatLogo,
        titleButtom: 'Secretaría',
        url: Path.EduDashConfig,
        isHidden: true,
    },
    {
        title: 'Gestión de ingresos',
        description:
            'Administra ingresos y pagos con facilidad, simplifica procesos, registra movimientos de caja y automatiza trámites bancarios.',
        src: FinancesLogo,
        titleButtom: 'Ingresos',
        url: Path.EduDashConfig,
        isHidden: true,
    },
    {
        title: 'Campus',
        description:
            'Crea una red social colaborativa con un EVA/LMS privado, eliminando reuniones y horas de trabajo en gestión del centro. Optimiza recursos, supervisa el progreso de los alumnos y ofrece un espacio informativo para su formación.',
        src: ColegioLogo,
        titleButtom: 'Campus',
        url: Path.EduDashConfig,
        isHidden: true,
    },
    {
        title: 'Configuración del Tablero Educativo',
        description:
            'Personaliza tu tablero educativo y gestiona datos, calificaciones, funcionalidades y roles con facilidad.',
        src: LogoSettings,
        titleButtom: 'Personalizar y Gestionar',
        url: Path.EduDashConfig,
        isHidden: true,
    },
]
