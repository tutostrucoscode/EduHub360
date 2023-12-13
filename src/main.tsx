import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import AppRouters from './features/routers/app'
import { store } from './redux/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <ChakraProvider>
                <AppRouters />
            </ChakraProvider>
        </Provider>
    </React.StrictMode>
)
