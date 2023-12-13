/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { types } from '../types/types'

interface AuthState {
    uid: string
    firestoreId?: ''
    name: string | null
    email: string | null
    urlimage: string | null
}

const initialState: AuthState = {
    uid: '',
    firestoreId: '',
    name: null,
    email: null,
    urlimage: null,
}

export const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.login:
            const objetoLogin = {
                ...state,
                uid: action.payload.uid,
                name: action.payload.name,
                email: action.payload.email,
                urlimage: action.payload.urlimage,
            }
            return objetoLogin
        case types.logout:
            return initialState
        case types.setFirestoreUser:
            return {
                ...state,
                firestoreId: action.payload.firestoreId || '',
            }
        default:
            return state
    }
}
