import { Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Loading from '../loading/loading'
import NotFound from '../../pages/not-found'
import { Path } from '../../constants'
import Auth from '../../pages/auth'
import Dashboard from '../../pages/dashboard'
import PrivateRoute from './private-route'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../config/firebase-config'
import { login, startLogout } from '../../redux/actions/auth'
import { useAppDispatch } from '../../redux/hooks/hooks'
import EduDashConfig from '../../pages/eduDashConfig'
import Admissions from '../../pages/admissions'

const AppRouters = () => {
    const dispatch = useAppDispatch()
    const [session, setSession] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const unregisterAuthObserver = onAuthStateChanged(auth, (user) => {
            setIsLoading(false)
            if (user) {
                console.log('useEffect onAuthStateChanged user.email', user.email)
                const { photoURL, email, uid, displayName } = user
                dispatch(login(uid, displayName, email, photoURL))
                setSession(true)
            } else {
                console.log('useEffect onAuthStateChanged NO USER')
                dispatch(startLogout())
                setSession(false)
            }
        })

        return () => {
            console.log('Se retorno el ciclo de vida en useEffect - AppRouters')
            unregisterAuthObserver()
        }
    }, [dispatch])

    if (isLoading) {
        return <Loading />
    }
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route
                        path={Path.Index}
                        element={<Navigate to={Path.Dashboard} replace={true} />}
                    />
                    <Route path="*" element={<NotFound />} />
                    <Route path={Path.Auth} element={<Auth />} />
                    <Route element={<PrivateRoute canActivate={session} />}>
                        <Route path={Path.Dashboard} element={<Dashboard />} />
                        <Route path={Path.EduDashConfig} element={<EduDashConfig />} />
                        <Route path={Path.Admissions} element={<Admissions />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default AppRouters
